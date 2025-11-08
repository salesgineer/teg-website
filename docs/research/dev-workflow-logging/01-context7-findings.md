# Context7 Research: Development Logging Tools
**Research Date:** 25.11.08_12:44
**Focus:** Development vs production logging, AI workflow observability

---

## Key Findings

### 1. Pino vs Winston for Development Workflows

**Pino (Recommended for Performance)**
- Fast JSON logger, minimal overhead
- 170 code snippets, trust score 9.2
- Supports multi-stream (stdout/stderr separation)
- Custom log levels for dev-specific events
- Mixin functions for dynamic context (request tracking, environment info)
- Built-in level management (`isLevelEnabled` for expensive operations)

**Winston (Recommended for Features)**
- Versatile, feature-rich logging library
- 101 code snippets, trust score 7.6
- Stream API for real-time log processing
- Custom transports (VS Code Output Channel for extension dev)
- Colorized output for dev readability
- String interpolation (`format.splat()`)

**Key Difference:**
- **Pino:** Production-grade performance, structured JSON, minimal config
- **Winston:** Rich formatting, custom transports, development-friendly features

### 2. Development vs Production Logging Patterns

**Development Logging:**
- Higher verbosity (debug, trace levels)
- Human-readable formatting (colorized, pretty-printed)
- Console/file output for immediate feedback
- Context tracking (request IDs, agent names, task descriptions)

**Production Logging:**
- Structured JSON only
- Lower levels (info, warn, error, fatal)
- Remote aggregation (Elasticsearch, Loki, cloud services)
- Performance-optimized (async writes, buffering)

**Pino Development Pattern:**
```javascript
const logger = pino({
  level: 'debug',
  transport: {
    target: 'pino-pretty', // Dev-friendly formatting
    options: { colorize: true }
  }
});

// Add dynamic context per request/agent
const contextLogger = pino({
  mixin() {
    return {
      agentName: getCurrentAgent(),
      taskId: getCurrentTaskId(),
      timestamp: Date.now()
    };
  }
});
```

**Winston Development Pattern:**
```javascript
const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp }) =>
      `${timestamp} [${level}]: ${message}`
    )
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'dev.log' })
  ]
});

// Stream logs for real-time processing
winston.stream({ start: -1 }).on('log', (log) => {
  // Claude could read this stream for debugging
  console.log(log);
});
```

### 3. AI-Assisted Coding Observability

**No Specific Libraries Found**
- Standard logging libraries (Pino, Winston) can be adapted
- Key requirement: structured, parseable output (JSON)
- Context enrichment crucial (which agent, what operation, when)

**Recommended Approach:**
1. Use Pino for performance + structured output
2. Add mixins for Claude Code context:
   - Agent hierarchy (Main → Coordinator → Executor)
   - Task descriptions
   - File operations (reads, writes, edits)
   - Command executions
   - MCP tool calls

3. Custom log levels for AI workflows:
   - `agent_spawn`: When subagent created
   - `agent_complete`: When subagent finishes
   - `file_op`: File read/write/edit
   - `bash_exec`: Command execution
   - `mcp_call`: MCP tool invocation
   - `git_commit`: Git operations

### 4. Next.js Development Logging

**Official Next.js Logging (v13+):**
- `next.config.js` supports `logging` config
- Development mode: console output by default
- Build process: verbose with `--debug` flag
- No built-in integration with Winston/Pino

**Integration Pattern:**
```javascript
// Custom logger for Next.js dev workflow
const devLogger = pino({
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
  transport: process.env.NODE_ENV === 'development'
    ? { target: 'pino-pretty', options: { colorize: true } }
    : undefined
});

// Log build events, API route hits, component renders (dev only)
```

### 5. Recommendations for Claude Code CLI Workflows

**What to Log:**
- Agent lifecycle (spawn, execute, complete, fail)
- File operations (which files touched, by which agent, when)
- Bash commands (what ran, exit codes, stdout/stderr)
- MCP tool calls (which tool, parameters, results)
- Git operations (commits, branches, what changed)
- Build/test results (pass/fail, timing, errors)

**How to Implement:**
1. **Wrapper Functions:** Intercept file ops, bash calls, MCP tools
2. **Structured Logging:** JSON format for Claude to parse later
3. **Context Preservation:** Include full agent stack (Main → Coord → Exec)
4. **Real-Time Streaming:** Winston's `stream()` API for live observation
5. **Log Storage:** File-based for session persistence, searchable by timestamp

**Example Implementation:**
```javascript
// Agent activity logger
const agentLogger = pino({
  level: 'debug',
  mixin() {
    return {
      agentStack: getAgentHierarchy(), // ["Main", "research-coordinator", "Explore"]
      sessionId: process.env.CLAUDE_SESSION_ID,
      timestamp: Date.now()
    };
  }
});

// Log agent spawn
agentLogger.info({
  event: 'agent_spawn',
  agentType: 'research-coordinator',
  task: 'Investigate logging strategies',
  parentAgent: 'Main'
});

// Log file operation
agentLogger.debug({
  event: 'file_write',
  filePath: '/path/to/file.ts',
  agentName: 'web-dev-worker',
  linesChanged: 42
});

// Log bash execution
agentLogger.debug({
  event: 'bash_exec',
  command: 'npm run build',
  exitCode: 0,
  duration: 12500, // ms
  stdout: '...',
  stderr: ''
});
```

---

## Conclusion

**Use Pino for Claude Code development logging:**
- Performance: minimal overhead during "vibe coding"
- Structured: JSON output Claude can parse
- Flexible: mixins for agent context
- Real-time: can stream logs to monitoring tools

**Focus on workflow observability, not application observability:**
- Track what Claude does (agent actions)
- NOT what the built application does (user actions)
- Development phase = agent activity audit trail
- Production phase = application error tracking (separate concern)
