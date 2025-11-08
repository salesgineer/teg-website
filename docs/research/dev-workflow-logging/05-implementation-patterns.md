# Implementation Patterns: Development Workflow Logging
**Research Date:** 25.11.08_12:44
**Stack:** Next.js 16, Pino, TypeScript, Claude Code CLI

---

## Installation

```bash
# Install Pino and development formatter
pnpm add pino
pnpm add -D pino-pretty

# For Next.js specific features (optional)
pnpm add next-logger
```

---

## Basic Pino Configuration

### `src/lib/dev-logger.ts`

```typescript
import pino from 'pino';
import { mkdir } from 'fs/promises';
import { join } from 'path';

// Ensure log directory exists
const LOG_DIR = join(process.cwd(), 'logs', 'dev-workflow');
await mkdir(LOG_DIR, { recursive: true }).catch(() => {});

// Get timestamp for log filename
const getTimestamp = () => {
  const now = new Date();
  const year = now.getFullYear().toString().slice(-2);
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hour = String(now.getHours()).padStart(2, '0');
  const minute = String(now.getMinutes()).padStart(2, '0');
  return `${year}.${month}.${day}_${hour}:${minute}`;
};

// Session counter (increment for each session)
let sessionCounter = 1;
const SESSION_ID = `session-${getTimestamp()}-${String(sessionCounter).padStart(3, '0')}`;

// Logger configuration
export const devLogger = pino({
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',

  // Add dynamic context to every log
  base: {
    pid: process.pid,
    hostname: require('os').hostname(),
    sessionId: SESSION_ID,
  },

  // Custom timestamp format
  timestamp: () => `,"time":${Date.now()}`,

  // Transport for development (pretty-print to console + file)
  transport: process.env.NODE_ENV === 'development'
    ? {
        targets: [
          {
            target: 'pino-pretty',
            level: 'debug',
            options: {
              colorize: true,
              translateTime: 'SYS:standard',
              ignore: 'pid,hostname',
            },
          },
          {
            target: 'pino/file',
            level: 'debug',
            options: {
              destination: join(LOG_DIR, `${SESSION_ID}.ndjson`),
              mkdir: true,
            },
          },
        ],
      }
    : undefined,
});

// Helper to add agent context
export const createAgentLogger = (agentName: string, agentStack: string[] = []) => {
  return devLogger.child({
    agentName,
    agentStack: [...agentStack, agentName],
  });
};

// Helper to log events with consistent structure
export const logEvent = (
  event: string,
  level: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal',
  data: Record<string, any>
) => {
  devLogger[level]({
    event,
    timestamp: Date.now(),
    ...data,
  });
};

export default devLogger;
```

---

## Integration Patterns

### 1. Agent Lifecycle Logging

#### Wrapper for Task Tool (Conceptual)

```typescript
// src/lib/agent-wrapper.ts
import { logEvent, createAgentLogger } from './dev-logger';

interface AgentTask {
  agentType: string;
  task: string;
  parentAgent?: string;
}

export async function spawnAgentWithLogging(
  agentType: string,
  task: string,
  parentAgent: string = 'Main'
): Promise<any> {
  const taskId = `task-${Date.now()}`;
  const agentStack = parentAgent === 'Main'
    ? ['Main', agentType]
    : [...getParentStack(parentAgent), agentType];

  // Log agent spawn
  logEvent('agent_spawn', 'debug', {
    agentType,
    parentAgent,
    agentStack,
    task,
    taskId,
  });

  const startTime = Date.now();

  try {
    // Execute actual agent task (placeholder for Task tool)
    const result = await executeAgentTask(agentType, task);

    const duration = Date.now() - startTime;

    // Log successful completion
    logEvent('agent_complete', 'info', {
      agentType,
      taskId,
      success: true,
      duration,
      summary: result.summary,
      filesCreated: result.filesCreated || 0,
      filesModified: result.filesModified || 0,
    });

    return result;
  } catch (error) {
    const duration = Date.now() - startTime;

    // Log agent error
    logEvent('agent_error', 'error', {
      agentType,
      taskId,
      errorType: error.constructor.name,
      errorMessage: error.message,
      stackTrace: error.stack,
      duration,
    });

    throw error;
  }
}

// Placeholder for actual execution (would use Task tool in real implementation)
async function executeAgentTask(agentType: string, task: string): Promise<any> {
  // In real implementation, this would invoke the Task tool
  return {
    summary: `Completed ${task}`,
    filesCreated: 0,
    filesModified: 0,
  };
}

function getParentStack(parentAgent: string): string[] {
  // In real implementation, track agent hierarchy
  return ['Main', parentAgent];
}
```

---

### 2. File Operation Logging

#### Wrapper for Edit/Write/Read Tools (Conceptual)

```typescript
// src/lib/file-operation-logger.ts
import { logEvent } from './dev-logger';
import { readFile, writeFile } from 'fs/promises';

export async function loggedReadFile(
  filePath: string,
  agentName: string,
  reason?: string
): Promise<string> {
  const startTime = Date.now();

  try {
    const content = await readFile(filePath, 'utf-8');
    const lines = content.split('\n').length;

    logEvent('file_read', 'debug', {
      agentName,
      filePath,
      fileSize: Buffer.byteLength(content),
      linesRead: lines,
      reason,
      duration: Date.now() - startTime,
    });

    return content;
  } catch (error) {
    logEvent('file_read_error', 'error', {
      agentName,
      filePath,
      errorMessage: error.message,
    });
    throw error;
  }
}

export async function loggedWriteFile(
  filePath: string,
  content: string,
  agentName: string,
  purpose?: string
): Promise<void> {
  const startTime = Date.now();

  try {
    await writeFile(filePath, content, 'utf-8');
    const lines = content.split('\n').length;

    logEvent('file_write', 'info', {
      agentName,
      filePath,
      fileSize: Buffer.byteLength(content),
      linesWritten: lines,
      purpose,
      duration: Date.now() - startTime,
    });
  } catch (error) {
    logEvent('file_write_error', 'error', {
      agentName,
      filePath,
      errorMessage: error.message,
    });
    throw error;
  }
}

export async function loggedEditFile(
  filePath: string,
  oldString: string,
  newString: string,
  agentName: string,
  changeDescription?: string
): Promise<void> {
  const startTime = Date.now();

  try {
    const content = await readFile(filePath, 'utf-8');
    const updated = content.replace(oldString, newString);
    await writeFile(filePath, updated, 'utf-8');

    const linesChanged = oldString.split('\n').length;

    logEvent('file_edit', 'info', {
      agentName,
      filePath,
      linesChanged,
      changeDescription,
      oldString: oldString.substring(0, 100), // Truncate for log
      newString: newString.substring(0, 100),
      duration: Date.now() - startTime,
    });
  } catch (error) {
    logEvent('file_edit_error', 'error', {
      agentName,
      filePath,
      errorMessage: error.message,
    });
    throw error;
  }
}
```

---

### 3. Command Execution Logging

#### Wrapper for Bash Tool (Conceptual)

```typescript
// src/lib/bash-logger.ts
import { exec } from 'child_process';
import { promisify } from 'util';
import { logEvent } from './dev-logger';

const execAsync = promisify(exec);

export async function loggedBashExec(
  command: string,
  agentName: string,
  workingDir?: string
): Promise<{ stdout: string; stderr: string; exitCode: number }> {
  const taskId = `bash-${Date.now()}`;

  logEvent('bash_exec_start', 'debug', {
    agentName,
    command,
    workingDir: workingDir || process.cwd(),
    taskId,
  });

  const startTime = Date.now();

  try {
    const { stdout, stderr } = await execAsync(command, {
      cwd: workingDir,
    });

    const duration = Date.now() - startTime;

    logEvent('bash_exec_complete', 'info', {
      command,
      exitCode: 0,
      duration,
      stdoutLines: stdout.split('\n').length,
      stderrLines: stderr.split('\n').length,
      stdout: stdout.substring(0, 1000), // Truncate
      stderr: stderr.substring(0, 1000),
    });

    return { stdout, stderr, exitCode: 0 };
  } catch (error: any) {
    const duration = Date.now() - startTime;

    logEvent('bash_exec_error', 'error', {
      command,
      exitCode: error.code || 1,
      duration,
      errorType: 'CommandExecutionError',
      stderr: error.stderr?.substring(0, 1000) || error.message,
    });

    throw error;
  }
}
```

---

### 4. Build Process Integration

#### Next.js Build Logging

```typescript
// scripts/log-build.js
const pino = require('pino');
const { join } = require('path');

const logger = pino({
  transport: {
    target: 'pino/file',
    options: {
      destination: join(process.cwd(), 'logs/dev-workflow/build.ndjson'),
      mkdir: true,
    },
  },
});

logger.info({
  event: 'build_start',
  timestamp: Date.now(),
  buildType: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  framework: 'Next.js 16',
  nodeVersion: process.version,
});

process.on('exit', (code) => {
  if (code === 0) {
    logger.info({
      event: 'build_complete',
      timestamp: Date.now(),
      exitCode: code,
      success: true,
    });
  } else {
    logger.error({
      event: 'build_error',
      timestamp: Date.now(),
      exitCode: code,
      success: false,
    });
  }
});
```

**Usage in `package.json`:**

```json
{
  "scripts": {
    "build": "node scripts/log-build.js && next build",
    "build:verbose": "next build --debug 2>&1 | tee logs/dev-workflow/build-verbose.log"
  }
}
```

---

### 5. Test Execution Logging

#### Jest Test Logger

```typescript
// scripts/log-test.js
const pino = require('pino');
const { join } = require('path');
const { execSync } = require('child_process');

const logger = pino({
  transport: {
    target: 'pino/file',
    options: {
      destination: join(process.cwd(), 'logs/dev-workflow/test.ndjson'),
      mkdir: true,
    },
  },
});

logger.info({
  event: 'test_run_start',
  timestamp: Date.now(),
  testType: 'unit',
  framework: 'Jest',
});

const startTime = Date.now();

try {
  const output = execSync('npm test -- --json --outputFile=test-results.json', {
    encoding: 'utf-8',
  });

  const results = require('../test-results.json');
  const duration = Date.now() - startTime;

  logger.info({
    event: 'test_run_complete',
    timestamp: Date.now(),
    testType: 'unit',
    duration,
    passed: results.numPassedTests,
    failed: results.numFailedTests,
    skipped: results.numPendingTests,
    coverage: results.coverageMap ? {
      lines: results.coverageMap.getCoverageSummary().lines.pct,
      branches: results.coverageMap.getCoverageSummary().branches.pct,
    } : null,
  });
} catch (error) {
  const duration = Date.now() - startTime;

  logger.error({
    event: 'test_run_error',
    timestamp: Date.now(),
    duration,
    errorMessage: error.message,
  });

  process.exit(1);
}
```

**Usage in `package.json`:**

```json
{
  "scripts": {
    "test": "jest",
    "test:logged": "node scripts/log-test.js"
  }
}
```

---

### 6. Git Operation Logging

#### Git Hook (Pre-Commit)

```bash
#!/bin/bash
# .git/hooks/pre-commit

# Get changed files
CHANGED_FILES=$(git diff --cached --name-only)

# Log commit
node << 'EOF'
const pino = require('pino');
const { join } = require('path');
const { execSync } = require('child_process');

const logger = pino({
  transport: {
    target: 'pino/file',
    options: {
      destination: join(process.cwd(), 'logs/dev-workflow/git.ndjson'),
      mkdir: true,
    },
  },
});

const changedFiles = process.env.CHANGED_FILES?.split('\n').filter(Boolean) || [];

logger.info({
  event: 'git_commit',
  timestamp: Date.now(),
  filesChanged: changedFiles,
  agentName: process.env.CLAUDE_AGENT_NAME || 'unknown',
});
EOF

# Continue with commit
exit 0
```

---

### 7. MCP Tool Call Logging (Conceptual)

```typescript
// src/lib/mcp-logger.ts
import { logEvent } from './dev-logger';

export async function loggedMCPCall<T>(
  tool: string,
  params: Record<string, any>,
  agentName: string,
  execute: () => Promise<T>
): Promise<T> {
  logEvent('mcp_call_start', 'debug', {
    agentName,
    tool,
    params,
  });

  const startTime = Date.now();

  try {
    const result = await execute();
    const duration = Date.now() - startTime;

    logEvent('mcp_call_complete', 'debug', {
      tool,
      duration,
      success: true,
      // Add result metadata (not full result, too large)
      resultsCount: Array.isArray(result) ? result.length : 1,
    });

    return result;
  } catch (error: any) {
    const duration = Date.now() - startTime;

    logEvent('mcp_call_error', 'warn', {
      tool,
      duration,
      errorType: error.constructor.name,
      errorMessage: error.message,
    });

    throw error;
  }
}
```

---

### 8. Session Management

#### Session Start Logger

```typescript
// src/lib/session-logger.ts
import { logEvent, devLogger } from './dev-logger';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function logSessionStart(userPrompt: string) {
  // Try to read previous session summary
  let previousSummary = null;
  try {
    const logs = await readFile(
      join(process.cwd(), 'logs/dev-workflow/latest.ndjson'),
      'utf-8'
    );
    const lines = logs.trim().split('\n');
    const lastLine = JSON.parse(lines[lines.length - 1]);

    if (lastLine.event === 'session_end') {
      previousSummary = lastLine.summary;
    }
  } catch {
    // No previous session
  }

  logEvent('session_start', 'info', {
    project: process.cwd(),
    continuedFrom: previousSummary ? 'previous session' : null,
    previousSummary,
    userPrompt: userPrompt.substring(0, 200), // Truncate
  });
}

export function logSessionEnd(summary: {
  filesCreated: number;
  filesModified: number;
  commitsCreated: number;
  agentsSpawned: number;
  commandsExecuted: number;
  nextSteps: string[];
}) {
  logEvent('session_end', 'info', {
    duration: Date.now() - (devLogger.bindings() as any).sessionStartTime || 0,
    ...summary,
  });
}
```

---

## Usage Examples

### Basic Logging (No Wrappers)

```typescript
import { devLogger } from '@/lib/dev-logger';

// Simple log
devLogger.info('Build started');

// Structured log
devLogger.info({
  event: 'build_start',
  buildType: 'production',
  timestamp: Date.now(),
});

// Error log
devLogger.error({
  event: 'build_error',
  errorMessage: 'Type error in Button.tsx',
  filePath: 'src/components/Button.tsx',
  line: 42,
});
```

### With Agent Context

```typescript
import { createAgentLogger } from '@/lib/dev-logger';

const agentLogger = createAgentLogger('web-dev-worker', ['Main', 'web-dev-worker']);

agentLogger.info({
  event: 'file_write',
  filePath: 'src/lib/logger.ts',
  linesWritten: 42,
});
```

### Reading Logs for Debugging

```bash
# View all logs
bat logs/dev-workflow/session-25.11.08_12:44-001.ndjson

# Filter by event
jq '.[] | select(.event=="build_error")' logs/dev-workflow/latest.ndjson

# View last 10 events
tail -n 10 logs/dev-workflow/latest.ndjson | jq

# Search for specific agent
jq '.[] | select(.agentName=="web-dev-worker")' logs/dev-workflow/latest.ndjson
```

---

## Integration with Claude Code Workflow

### Autonomous Error Fixing Pattern

```typescript
// Pseudo-code: Claude reading logs to fix build errors

// 1. User reports: "Fix the build error"

// 2. Claude executes:
const logs = await Bash('cat logs/dev-workflow/latest.ndjson | jq \'.[] | select(.event=="build_error") | .[0]\'');

// 3. Claude parses log:
const buildError = JSON.parse(logs.stdout);
// {
//   event: "build_error",
//   errorMessage: "Type 'string' is not assignable to type 'ButtonVariant'",
//   filePath: "src/components/Button.tsx",
//   line: 42
// }

// 4. Claude reads file:
const fileContent = await Read(buildError.filePath);

// 5. Claude identifies issue at line 42, fixes it:
await Edit(buildError.filePath, oldString, newString);

// 6. Claude re-runs build:
await Bash('npm run build');

// 7. Build succeeds → build_complete logged
```

---

## Next.js Specific Integration

### Middleware Logging (Optional)

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { devLogger } from '@/lib/dev-logger';

export function middleware(request: NextRequest) {
  // Only log in development
  if (process.env.NODE_ENV === 'development') {
    devLogger.debug({
      event: 'http_request',
      method: request.method,
      url: request.url,
      timestamp: Date.now(),
    });
  }

  return NextResponse.next();
}
```

### API Route Logging

```typescript
// app/api/example/route.ts
import { NextResponse } from 'next/server';
import { devLogger } from '@/lib/dev-logger';

export async function GET(request: Request) {
  const startTime = Date.now();

  try {
    // API logic
    const data = await fetchData();

    devLogger.info({
      event: 'api_request',
      route: '/api/example',
      method: 'GET',
      duration: Date.now() - startTime,
      success: true,
    });

    return NextResponse.json(data);
  } catch (error) {
    devLogger.error({
      event: 'api_error',
      route: '/api/example',
      method: 'GET',
      duration: Date.now() - startTime,
      errorMessage: error.message,
    });

    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
```

---

## Performance Considerations

### Minimize Overhead in Hot Paths

```typescript
// AVOID: Logging inside tight loops
for (let i = 0; i < 10000; i++) {
  devLogger.debug({ event: 'loop_iteration', i }); // ❌ Too verbose
}

// PREFER: Log summary
const startTime = Date.now();
for (let i = 0; i < 10000; i++) {
  // process
}
devLogger.debug({
  event: 'loop_complete',
  iterations: 10000,
  duration: Date.now() - startTime,
}); // ✅ Better
```

### Use Log Levels Appropriately

```typescript
// Development: verbose
if (process.env.NODE_ENV === 'development') {
  devLogger.level = 'debug';
}

// Production build: minimal
if (process.env.NODE_ENV === 'production') {
  devLogger.level = 'warn'; // Only warnings and errors
}
```

### Async File Writes (Pino Handles This)

Pino automatically buffers and writes asynchronously. No manual optimization needed.

---

## Summary

**Recommended Implementation Order:**

1. **Basic Pino setup** (`src/lib/dev-logger.ts`)
2. **Build/test logging** (scripts for `npm run build`, `npm test`)
3. **Git hook logging** (`.git/hooks/pre-commit`)
4. **Session management** (start/end logging)
5. **File operation wrappers** (when needed)
6. **Agent lifecycle wrappers** (advanced, when delegation gets complex)

**Key Takeaways:**
- Start simple, add complexity as needed
- Focus on events that enable autonomous debugging
- Use structured JSON for Claude to parse
- Store logs in predictable location (`/logs/dev-workflow/`)
- Integrate with existing tools (git, npm scripts, hooks)
