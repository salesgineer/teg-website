# Recommended Development Events to Log
**Research Date:** 25.11.08_12:44
**Context:** Claude Code CLI nested agent architecture, Next.js development

---

## Event Taxonomy

### Log Level Guidelines

**TRACE (10):** Ultra-verbose, every tiny operation
- File system calls (open, close, seek)
- Individual function executions
- Loop iterations

**DEBUG (20):** Development details for troubleshooting
- Agent spawns/completions
- File read/write/edit operations
- MCP tool calls
- Command executions

**INFO (30):** High-level workflow milestones
- Session start/end
- Build start/end
- Test suite runs
- Git commits/pushes
- Major agent transitions

**WARN (40):** Potential issues, non-fatal
- Build warnings
- Test failures (non-blocking)
- Deprecated API usage
- Performance slowdowns

**ERROR (50):** Failures requiring attention
- Build errors
- Test suite failures
- Command execution errors
- File operation failures
- Agent crashes

**FATAL (60):** Critical failures, workflow halted
- Unrecoverable build errors
- Data corruption
- System-level failures

---

## Core Development Events

### 1. Agent Lifecycle Events

#### agent_spawn (DEBUG)
**When:** Main spawns a subagent (or coordinator spawns executor)
**Why:** Track delegation hierarchy, verify nested architecture
**Data:**
```json
{
  "level": 20,
  "event": "agent_spawn",
  "timestamp": 1699456789000,
  "agentType": "research-coordinator",
  "parentAgent": "Main",
  "agentStack": ["Main", "research-coordinator"],
  "task": "Investigate logging strategies for AI workflows",
  "taskId": "task-001",
  "sessionId": "session-2025-11-08-001"
}
```

#### agent_complete (INFO)
**When:** Agent finishes task (success or failure)
**Why:** Measure performance, track success rates
**Data:**
```json
{
  "level": 30,
  "event": "agent_complete",
  "timestamp": 1699456889000,
  "agentType": "research-coordinator",
  "taskId": "task-001",
  "success": true,
  "duration": 100000,
  "summary": "Created 3 research documents in /docs/research/dev-workflow-logging/",
  "filesCreated": 3,
  "filesModified": 0
}
```

#### agent_error (ERROR)
**When:** Agent encounters unrecoverable error
**Why:** Debug failures, improve prompts
**Data:**
```json
{
  "level": 50,
  "event": "agent_error",
  "timestamp": 1699456889000,
  "agentType": "web-dev-worker",
  "taskId": "task-002",
  "errorType": "TypeScriptCompileError",
  "errorMessage": "Cannot find module 'pino'",
  "stackTrace": "...",
  "context": {
    "file": "src/lib/logger.ts",
    "line": 3
  }
}
```

---

### 2. File Operation Events

#### file_read (DEBUG)
**When:** Agent reads file (via Read tool)
**Why:** Track file access patterns, verify context usage
**Data:**
```json
{
  "level": 20,
  "event": "file_read",
  "timestamp": 1699456789000,
  "agentName": "Explore",
  "agentStack": ["Main", "research-coordinator", "Explore"],
  "filePath": "/home/user/project/src/components/Button.tsx",
  "fileSize": 2048,
  "linesRead": 85,
  "reason": "Analyzing component structure for refactoring"
}
```

#### file_write (INFO)
**When:** Agent creates new file (via Write tool)
**Why:** Track code generation, audit new files
**Data:**
```json
{
  "level": 30,
  "event": "file_write",
  "timestamp": 1699456789000,
  "agentName": "web-dev-worker",
  "filePath": "/home/user/project/src/lib/logger.ts",
  "fileSize": 1024,
  "linesWritten": 42,
  "purpose": "Create Pino logger configuration for development"
}
```

#### file_edit (INFO)
**When:** Agent modifies existing file (via Edit tool)
**Why:** Track changes, verify AI modifications
**Data:**
```json
{
  "level": 30,
  "event": "file_edit",
  "timestamp": 1699456789000,
  "agentName": "web-dev-worker",
  "filePath": "/home/user/project/src/components/Button.tsx",
  "linesChanged": 12,
  "changeDescription": "Added TypeScript strict types to Button props",
  "oldString": "props: any",
  "newString": "props: ButtonProps"
}
```

---

### 3. Command Execution Events

#### bash_exec_start (DEBUG)
**When:** Agent executes bash command
**Why:** Track commands run, verify proper tool usage
**Data:**
```json
{
  "level": 20,
  "event": "bash_exec_start",
  "timestamp": 1699456789000,
  "agentName": "parallel-bash-executor",
  "command": "npm run build",
  "workingDir": "/home/user/project",
  "taskId": "task-003"
}
```

#### bash_exec_complete (INFO)
**When:** Command finishes execution
**Why:** Capture exit codes, stdout/stderr for debugging
**Data:**
```json
{
  "level": 30,
  "event": "bash_exec_complete",
  "timestamp": 1699456889000,
  "command": "npm run build",
  "exitCode": 0,
  "duration": 12500,
  "stdoutLines": 142,
  "stderrLines": 0,
  "stdout": "✓ Compiled successfully\n✓ Linted successfully\n...",
  "stderr": ""
}
```

#### bash_exec_error (ERROR)
**When:** Command exits with non-zero code
**Why:** Claude reads this to auto-fix build errors
**Data:**
```json
{
  "level": 50,
  "event": "bash_exec_error",
  "timestamp": 1699456889000,
  "command": "npm run build",
  "exitCode": 1,
  "duration": 5200,
  "errorType": "BuildError",
  "stderr": "ERROR in src/components/Button.tsx\nType 'string' is not assignable to type 'ButtonVariant'\n",
  "failedAt": "compilation",
  "suggestedFix": "Check TypeScript types in Button.tsx"
}
```

---

### 4. Git Operation Events

#### git_commit (INFO)
**When:** Agent commits changes (via Bash tool)
**Why:** Track version control activity, audit changes
**Data:**
```json
{
  "level": 30,
  "event": "git_commit",
  "timestamp": 1699456789000,
  "agentName": "Main",
  "commitHash": "a1b2c3d",
  "commitMessage": "Add Pino logging configuration for development workflow\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
  "filesChanged": ["src/lib/logger.ts", "package.json"],
  "additions": 42,
  "deletions": 0
}
```

#### git_push (INFO)
**When:** Agent pushes to remote repository
**Why:** Track deployment triggers, verify remote sync
**Data:**
```json
{
  "level": 30,
  "event": "git_push",
  "timestamp": 1699456789000,
  "branch": "feature/logging-implementation",
  "remote": "origin",
  "commits": 3,
  "success": true
}
```

---

### 5. Build/Test Pipeline Events

#### build_start (INFO)
**When:** Build process begins
**Why:** Track build frequency, identify slow builds
**Data:**
```json
{
  "level": 30,
  "event": "build_start",
  "timestamp": 1699456789000,
  "buildType": "production",
  "framework": "Next.js 16",
  "nodeVersion": "v20.10.0",
  "triggeredBy": "web-dev-worker"
}
```

#### build_complete (INFO)
**When:** Build succeeds
**Why:** Measure build performance, confirm readiness
**Data:**
```json
{
  "level": 30,
  "event": "build_complete",
  "timestamp": 1699456889000,
  "buildType": "production",
  "duration": 18500,
  "warnings": 2,
  "outputSize": "2.4 MB",
  "routes": 12,
  "success": true
}
```

#### build_error (ERROR)
**When:** Build fails
**Why:** Critical for autonomous debugging
**Data:**
```json
{
  "level": 50,
  "event": "build_error",
  "timestamp": 1699456889000,
  "buildType": "production",
  "duration": 5200,
  "errorType": "TypeScriptError",
  "errorMessage": "Type error in src/components/Button.tsx:42",
  "errorDetails": "Type 'string' is not assignable to type 'ButtonVariant'",
  "filePath": "src/components/Button.tsx",
  "line": 42,
  "column": 15,
  "fullError": "..."
}
```

#### test_run_start (INFO)
**When:** Test suite execution begins
**Why:** Track testing frequency, identify test performance
**Data:**
```json
{
  "level": 30,
  "event": "test_run_start",
  "timestamp": 1699456789000,
  "testType": "unit",
  "framework": "Jest",
  "suites": 24,
  "totalTests": 156,
  "triggeredBy": "parallel-bash-executor"
}
```

#### test_run_complete (INFO)
**When:** Tests finish (pass or fail)
**Why:** Verify code quality, track regression
**Data:**
```json
{
  "level": 30,
  "event": "test_run_complete",
  "timestamp": 1699456889000,
  "testType": "unit",
  "duration": 8200,
  "passed": 152,
  "failed": 4,
  "skipped": 0,
  "coverage": {
    "lines": 82.5,
    "branches": 76.3,
    "functions": 88.1,
    "statements": 82.5
  },
  "failedTests": [
    "src/components/Button.test.tsx: renders with variant prop",
    "src/lib/logger.test.ts: formats log messages correctly"
  ]
}
```

---

### 6. MCP Tool Call Events

#### mcp_call_start (DEBUG)
**When:** Agent invokes MCP tool
**Why:** Track external integrations, optimize token usage
**Data:**
```json
{
  "level": 20,
  "event": "mcp_call_start",
  "timestamp": 1699456789000,
  "agentName": "general-purpose",
  "tool": "mcp__context7__get-library-docs",
  "params": {
    "libraryID": "/pinojs/pino",
    "topic": "development logging patterns",
    "tokens": 3000
  }
}
```

#### mcp_call_complete (DEBUG)
**When:** MCP tool returns result
**Why:** Measure MCP performance, verify data retrieval
**Data:**
```json
{
  "level": 20,
  "event": "mcp_call_complete",
  "timestamp": 1699456889000,
  "tool": "mcp__context7__get-library-docs",
  "duration": 2100,
  "success": true,
  "tokensUsed": 2847,
  "resultsCount": 15,
  "snippetsRetrieved": 15
}
```

#### mcp_call_error (WARN)
**When:** MCP tool fails or errors
**Why:** Debug integration issues, fallback strategies
**Data:**
```json
{
  "level": 40,
  "event": "mcp_call_error",
  "timestamp": 1699456889000,
  "tool": "mcp__perplexity__perplexity_research",
  "errorType": "401 Unauthorized",
  "errorMessage": "Perplexity API error: authentication failed",
  "fallbackAction": "Using Brave Search instead"
}
```

---

### 7. Session Management Events

#### session_start (INFO)
**When:** New Claude Code session begins
**Why:** Track session frequency, load previous context
**Data:**
```json
{
  "level": 30,
  "event": "session_start",
  "timestamp": 1699456789000,
  "sessionId": "session-2025-11-08-001",
  "project": "/home/user/Projects/TEG_001",
  "continuedFrom": "session-2025-11-07-003",
  "previousSummary": "Implemented research on logging strategies",
  "userPrompt": "Implement Pino logging based on research"
}
```

#### session_end (INFO)
**When:** Claude Code session terminates
**Why:** Preserve context for next session, track costs
**Data:**
```json
{
  "level": 30,
  "event": "session_end",
  "timestamp": 1699458589000,
  "sessionId": "session-2025-11-08-001",
  "duration": 1800000,
  "summary": "Implemented Pino logging, created logger config, added build/test logging",
  "filesCreated": 2,
  "filesModified": 5,
  "commitsCreated": 2,
  "agentsSpawned": 8,
  "commandsExecuted": 15,
  "costTotal": 0.0556,
  "tokensTotal": 55870,
  "nextSteps": [
    "Test logging during next build",
    "Add agent wrapper functions for full observability"
  ]
}
```

---

## Event Filtering Recommendations

### Development Phase (Verbose)
**Log Levels:** DEBUG and above
**Events to Log:**
- All agent lifecycle (spawn, complete, error)
- All file operations (read, write, edit)
- All command executions
- All MCP tool calls
- Build/test events
- Git operations

**Purpose:** Full observability for debugging, learning agent patterns

### Production Development (Focused)
**Log Levels:** INFO and above
**Events to Log:**
- Agent completions (not spawns)
- File writes/edits (not reads)
- Command errors (not all executions)
- Build/test results
- Git commits/pushes

**Purpose:** Audit trail without excessive verbosity

### Minimal (Git Only)
**Log Levels:** INFO and above (via git commits)
**Events to Log:**
- Git commits with descriptive messages
- Session summaries in commit messages

**Purpose:** Lowest effort, basic tracking

---

## Log Retention Strategy

### Session Logs (Immediate)
**Retention:** 7 days
**Location:** `/logs/dev-workflow/YYYY-MM-DD-session-###.ndjson`
**Purpose:** Active debugging, session continuity

### Archived Logs (Historical)
**Retention:** 30 days
**Location:** `/logs/dev-workflow/archive/YYYY-MM/`
**Purpose:** Long-term patterns, regression analysis

### Summary Reports (Permanent)
**Retention:** Forever (small size)
**Location:** `/docs/sessions/YYYY-MM-DD-session-###-summary.md`
**Purpose:** Project history, documentation

**Example Summary:**
```markdown
# Session Summary: 2025-11-08 Session 001
**Duration:** 30 minutes
**Cost:** $0.0556
**Outcome:** Implemented Pino logging research

## Files Changed
- `/docs/research/dev-workflow-logging/01-context7-findings.md` (created)
- `/docs/research/dev-workflow-logging/02-perplexity-findings.md` (created)
- `/docs/research/dev-workflow-logging/03-brave-search-findings.md` (created)

## Next Steps
- Implement Pino logger configuration
- Add build/test event logging
```

---

## Critical Events for Autonomous Debugging

**These events MUST be logged for Claude to auto-fix issues:**

1. **build_error** → Claude reads error, identifies file/line, fixes
2. **test_run_complete** (with failures) → Claude sees failed tests, runs them, fixes
3. **bash_exec_error** → Claude sees command failure, adjusts command
4. **agent_error** → Claude diagnoses agent failure, improves prompt

**Log Storage Requirement:**
- Structured JSON (Claude parses with `jq`)
- Timestamped with consistent format
- Stored in predictable location (`/logs/dev-workflow/latest.ndjson`)

**Workflow:**
```
1. Build fails → build_error logged
2. User: "Fix the build error"
3. Claude: bat /logs/dev-workflow/latest.ndjson | jq '.[] | select(.event=="build_error")'
4. Claude: Reads error details, identifies src/components/Button.tsx:42
5. Claude: Edits file, re-runs build
6. Build succeeds → build_complete logged
```
