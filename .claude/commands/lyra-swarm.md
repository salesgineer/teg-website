# /lyra-swarm - Automated Swarm Command Generator

Integrates Lyra prompt optimization with Claude-Flow swarm orchestration to generate copyable terminal commands.

---

## 🎯 Automated Workflow

**CRITICAL**: This command has TWO modes with a verification step:

### **Mode 1: DETAIL (Interactive - Default)**
1. **User runs**: `/lyra-swarm "build a REST API"` OR `/lyra-swarm DETAIL "build a REST API"`
2. **Execute /lyra DETAIL** → Ask clarifying questions
3. **User answers questions** → Lyra refines understanding ← **WAIT FOR USER INPUT**
4. **Lyra returns optimized prompt** → After questions answered
5. **VERIFICATION STEP** → Show prompt and ask: "Is this prompt OK or do you want any changes?" ← **WAIT FOR APPROVAL**
6. **If changes needed** → User requests modifications, loop back to step 4
7. **If approved** → Analyze & generate swarm command → Create final output

### **Mode 2: BASIC (Quick - No Questions, BUT STILL REQUIRES VERIFICATION!)**
1. **User runs**: `/lyra-swarm BASIC "build a REST API"`
2. **Execute /lyra BASIC** → Immediate optimization (NO questions)
3. **Lyra returns optimized prompt** → No Q&A, just optimized output
4. **🚨 MANDATORY VERIFICATION STEP** → Show prompt and ask: "Is this prompt OK or do you want any changes?" ← **⏸️ WAIT FOR USER APPROVAL**
5. **If changes needed** → User requests modifications, loop back to step 4 (show modified prompt again)
6. **If approved** ("OK", "Approved", "Looks good") → **ONLY THEN** proceed to swarm analysis & generation

**CRITICAL**: BASIC mode skips clarifying questions, NOT the verification step! User MUST approve prompt before swarm generation.

---

## 📋 Instructions

You are an intelligent swarm command wrapper agent. Your execution flow:

### Step 0: Determine Mode & Execute Lyra (FIRST!)

**Check user input for mode:**
- If user provides `BASIC` → Use `/lyra BASIC using Claude: [prompt]`
- If user provides `DETAIL` OR no mode specified → Use `/lyra DETAIL using Claude: [prompt]`

**CRITICAL FOR DETAIL MODE:**
- Lyra will ask 2-3 clarifying questions
- **DO NOT PROCEED** until user answers those questions
- **WAIT** for Lyra to provide the final optimized prompt after user answers
- Only then move to analysis phase

**For BASIC MODE:**
- Lyra returns optimized prompt immediately (no questions)
- **THEN SHOW PROMPT FOR VERIFICATION** (same as DETAIL mode!)
- **WAIT FOR USER APPROVAL** before proceeding to analysis phase

### Step 1-6: Analyze and Generate (ONLY AFTER user approves optimized prompt!)

1. **Use Lyra's APPROVED optimized prompt** for analysis (not the raw user input!)
2. **Read documentation** from `/docs/lyra-swarm-integration/`
3. **Determine optimal swarm configuration** based on Lyra's output
4. **Generate a copyable swarm command** that the user can execute

---

## 🔍 Complete Execution Process

### Step 0: Execute Lyra (FIRST - MANDATORY!)

**Determine mode from user input:**

**If DETAIL mode (default):**
```
SlashCommand("/lyra DETAIL using Claude: [user's raw prompt]")
```
- ⚠️ **Lyra will ask clarifying questions**
- ⏸️ **PAUSE and wait for user to answer**
- ✅ **Only proceed after Lyra provides optimized prompt**

**If BASIC mode:**
```
SlashCommand("/lyra BASIC using Claude: [user's raw prompt]")
```
- ✅ **Lyra returns optimized prompt immediately**
- ▶️ **Proceed directly to analysis**

**Critical**: Use the FINAL optimized prompt (after any Q&A AND approval) for all subsequent analysis, NOT the raw user input.

---

### Step 0.5: Verification & Approval (MANDATORY!)

**After Lyra provides the optimized prompt:**

1. **Display the optimized prompt** to the user clearly
2. **Ask for approval**:
   ```
   📋 Here's the optimized prompt Lyra created:

   [Show full optimized prompt]

   ✅ Is this prompt OK, or do you want any changes?

   Reply with:
   - "OK" or "Approved" to proceed with swarm generation
   - Describe any changes you'd like to make
   ```

3. **Wait for user response**:
   - ✅ **If approved** ("OK", "Approved", "Looks good", etc.) → Proceed to Step 1
   - 🔄 **If changes requested** → Make adjustments to the prompt, show it again, and repeat verification

**DO NOT PROCEED** to swarm analysis until the user explicitly approves the prompt!

---

### Step 1: Read Reference Documentation (Parallel - ONLY AFTER APPROVAL!)

**After Lyra completes**, read ALL documentation files in parallel:
- `/docs/lyra-swarm-integration/01-swarm-command-reference.md`
- `/docs/lyra-swarm-integration/02-prompt-type-examples.md`
- `/docs/lyra-swarm-integration/03-topology-decision-tree.md`
- `/docs/lyra-swarm-integration/04-agent-selection-guide.md`

### Step 2: Analyze Lyra's Optimized Prompt

Determine:
- **Criticality**: HIGH/MEDIUM/LOW
- **Complexity**: UNKNOWN/WELL-DEFINED/SIMPLE/COMPLEX
- **Collaboration**: HIGH/MEDIUM/LOW
- **Specialization**: HIGH/MEDIUM/LOW
- **Structure**: WELL-DEFINED/LOOSELY-DEFINED
- **Component Count**: How many parts/features mentioned
- **Primary Task Type**: BUILD/ANALYZE/DEBUG/OPTIMIZE/DECIDE/REVIEW/DOCUMENT
- **Domains**: backend, frontend, mobile, database, auth, testing, devops, performance, ml, api_docs

### Step 3: Select Topology

Use the decision tree from `03-topology-decision-tree.md`:

```
Priority 1: Criticality
├─ HIGH → Check if consensus needed
│   ├─ YES → Byzantine (7-9 agents)
│   └─ NO → Check specialization

Priority 2: Complexity
├─ UNKNOWN → Adaptive (3-5 agents)

Priority 3: Collaboration
├─ HIGH + Consensus → Byzantine (7-9 agents)
├─ HIGH + Peer Review → Mesh (4-6 agents)

Priority 4: Specialization
├─ HIGH → Star (5-7 agents)

Priority 5: Structure
├─ WELL-DEFINED → Hierarchical (5-8 agents)

Priority 6: Scale
├─ 10+ components → Gossip (8-12 agents)

Default → Adaptive (3-4 agents)
```

### Step 4: Calculate Agent Count & Enforce Caps

```javascript
// Define base agents and caps
baseAgents = {
  adaptive: 3,
  hierarchical: 5,
  mesh: 4,
  star: 5,
  byzantine: 7,
  gossip: 8
};

caps = {
  adaptive: 5,
  hierarchical: 10,
  mesh: 7,
  star: 8,
  byzantine: 9,
  gossip: 12
};

// Calculate desired agent count
desiredAgents = baseAgents[topology];
if (componentCount >= 10) {
  desiredAgents += 3;
} else if (componentCount >= 5) {
  desiredAgents += 2;
} else if (componentCount >= 3) {
  desiredAgents += 1;
}

if (criticality === 'HIGH') {
  desiredAgents += 1;
}

// CRITICAL: Enforce topology caps
maxAgents = desiredAgents;
let reasoning = '';

if (desiredAgents > caps[topology]) {
  // Option 1: Cap at topology limit (default)
  maxAgents = caps[topology];
  reasoning = `Capped from desired ${desiredAgents} to ${maxAgents} (${topology} topology limit). `;

  // Option 2: If significantly over cap AND scale justifies it, consider Gossip
  if (desiredAgents > 10 && componentCount >= 10 && topology !== 'gossip') {
    const previousTopology = topology;
    topology = 'gossip';
    maxAgents = Math.min(desiredAgents, caps.gossip); // Cap at 12
    reasoning = `Original ${previousTopology} topology would cap at ${caps[previousTopology]} agents, but task complexity (${componentCount} components) justifies Gossip topology with ${maxAgents} agents. `;
  }

  // Option 3: If user explicitly requested agent count range (10-20), note limitation
  if (userRequestedRange && desiredAgents > 12) {
    reasoning += `Note: Maximum supported by any topology is 12 agents (Gossip). Recommending ${maxAgents} agents for optimal coordination. `;
  }
}

// Store final configuration with reasoning
finalConfig = {
  topology,
  maxAgents,
  reasoning: reasoning || `Optimal ${maxAgents} agents for ${topology} topology`
};
```

### Step 5: Select Strategy

```javascript
taskTypeToStrategy = {
  'BUILD/IMPLEMENT': 'development',
  'ANALYZE/EVALUATE': 'analysis',
  'DEBUG/FIX': 'maintenance',
  'OPTIMIZE': 'optimization',
  'DECIDE': 'research',
  'REVIEW': 'testing',
  'DOCUMENT': 'research'
};
```

### Step 6: Select Agents

Use the agent selection logic from `04-agent-selection-guide.md`:

1. **Essential agents** (if maxAgents threshold met):
   - coordinator (if maxAgents >= 5)
   - tester (if maxAgents >= 4)
   - reviewer (if maxAgents >= 4)

2. **Task-specific agents** (always include):
   - Based on primaryTaskType

3. **Domain-specific agents** (if domain detected):
   - backend-dev, mobile-dev, ml-developer, etc.

4. **Support agents** (fill remaining slots):
   - Additional coders, analysts, etc.

---

## 📤 Output Format

Generate output in this EXACT format:

```markdown
# Swarm Command for: [Brief Task Description]

## 📊 Analysis

**Prompt Characteristics:**
- **Criticality**: [HIGH/MEDIUM/LOW]
- **Complexity**: [UNKNOWN/WELL-DEFINED/SIMPLE/COMPLEX]
- **Task Type**: [BUILD/ANALYZE/DEBUG/OPTIMIZE/DECIDE/REVIEW/DOCUMENT]
- **Domains**: [list detected domains]
- **Component Count**: [number]

**Selected Configuration:**
- **Topology**: [topology] - [reason]
- **Max Agents**: [number] [include cap reasoning if applicable]
- **Strategy**: [strategy]
- **Mode**: [mode]

**Reasoning**: [Explain topology selection and any cap adjustments made]

---

## 🖥️ Terminal Command (Copy & Execute)

\`\`\`bash
npx claude-flow swarm "[objective]" \\
  --strategy [strategy] \\
  --mode [mode] \\
  --max-agents [number] \\
  --parallel \\
  --monitor
\`\`\`

---

## 🤖 MCP Tools Alternative (For Advanced Users)

### Coordination Setup
\`\`\`javascript
// Initialize swarm coordination
mcp__claude-flow__swarm_init {
  topology: "[topology]",
  maxAgents: [number],
  strategy: "[strategy]"
}

// Spawn coordination agents
[List each agent with mcp__claude-flow__agent_spawn]
\`\`\`

### Agent Execution (Claude Code)
\`\`\`javascript
// Claude Code Task tool spawns real agents
[List each Task() call with full instructions]

// Batch all todos in ONE call
TodoWrite { todos: [
  // List 5-10+ todos
]}
\`\`\`

### Task Orchestration
\`\`\`javascript
mcp__claude-flow__task_orchestrate {
  task: "[detailed task description]",
  strategy: "parallel",
  priority: "[low/medium/high/critical]",
  dependencies: {
    // Map agent dependencies for proper execution order
    "Agent 1": [], // No dependencies, runs first
    "Agent 2": ["Agent 1"], // Waits for Agent 1
    "Agent 3": ["Agent 1", "Agent 2"], // Waits for both
    // ... etc
  }
}
\`\`\`

---

## 👥 Agent Responsibilities

[For each selected agent, provide:]
**[Agent Type]**: [Agent Name]
- **Role**: [description]
- **Key Tasks**: [list main responsibilities]

---

## 💡 Execution Notes

[Provide any specific notes about:]
- Expected execution time
- Critical dependencies
- Suggested monitoring points
- Risk areas to watch
```

---

## 🚨 Critical Rules

1. **EXECUTE /lyra FIRST** - Always start by running `/lyra` (DETAIL or BASIC) on the user's raw prompt
2. **DETECT MODE** - Check if user specified BASIC, otherwise default to DETAIL
3. **WAIT for Q&A (DETAIL mode)** - If DETAIL, Lyra will ask questions. PAUSE until user answers!
4. **WAIT for optimized prompt** - Don't proceed until you have the optimized prompt (after any Q&A)
5. **SHOW PROMPT FOR VERIFICATION** - Display the optimized prompt and ask: "Is this prompt OK or do you want any changes?"
6. **WAIT FOR APPROVAL** - PAUSE until user approves or requests changes
7. **LOOP IF CHANGES NEEDED** - If user wants changes, modify the prompt, show it again, and wait for approval
8. **ONLY PROCEED AFTER APPROVAL** - Do NOT start swarm analysis until user explicitly approves
9. **USE Lyra's APPROVED prompt** for all analysis, not the raw user input
10. **READ all 4 documentation files in PARALLEL** after approval
11. **FOLLOW the decision tree logic** from documentation, don't improvise
12. **ENFORCE agent count caps strictly** - Never exceed topology limits: Adaptive (5), Hierarchical (10), Mesh (7), Star (8), Byzantine (9), Gossip (12). If desired count exceeds cap, either cap at limit OR switch to Gossip topology for large tasks (10+ components)
13. **PROVIDE both terminal command AND MCP tools alternative**
14. **MAKE commands COPYABLE** - user should be able to copy-paste directly
15. **BE SPECIFIC in agent names** - "Backend Developer" not just "Developer"
16. **EXPLAIN your reasoning** - user should understand why this configuration

---

## 🎯 Example Execution

### Example 1: DETAIL Mode (Interactive)

**User runs**: `/lyra-swarm "build a REST API"` (or explicitly `/lyra-swarm DETAIL "build a REST API"`)

**Step 0 - You execute**:
```
SlashCommand("/lyra DETAIL using Claude: build a REST API")
```

**Lyra asks questions**:
```
I'll help optimize your REST API prompt. Let me ask a few clarifying questions:

1. What's your target framework preference (Express, Fastify, NestJS)?
2. What authentication method do you need (JWT, OAuth, session-based)?
3. What database are you using (PostgreSQL, MongoDB, MySQL)?
```

**User answers**:
```
1. Express with TypeScript
2. JWT with refresh tokens
3. PostgreSQL with Prisma
```

**Lyra returns optimized prompt** (after Q&A):
```
You are a senior backend engineer specializing in Node.js and API security.

Build a production-ready REST API with:
- Framework: Express.js with TypeScript
- Authentication: JWT with refresh tokens
- Database: PostgreSQL with Prisma ORM
- Testing: Jest with >80% coverage
...
```

**Step 0.5 - You show for verification**:
```
📋 Here's the optimized prompt Lyra created:

"You are a senior backend engineer specializing in Node.js and API security.

Build a production-ready REST API with:
- Framework: Express.js with TypeScript
- Authentication: JWT with refresh tokens
- Database: PostgreSQL with Prisma ORM
- Testing: Jest with >80% coverage
..."

✅ Is this prompt OK, or do you want any changes?
```

**User responds**:
```
OK, looks perfect!
```
OR
```
Can you add rate limiting and add API documentation requirements?
```

**If changes requested** → Update prompt, show again, wait for approval

**Once approved** → Proceed to Step 1-6

**Step 1-6 - You analyze Lyra's APPROVED output and generate**:

---

### Example 2: BASIC Mode (Quick - But Still Verifies!)

**User runs**: `/lyra-swarm BASIC "build a REST API"`

**Step 0 - You execute**:
```
SlashCommand("/lyra BASIC using Claude: build a REST API")
```

**Lyra immediately returns** (no questions asked, unlike DETAIL mode):
```
You are a backend developer.

Build a REST API with standard features:
- Modern framework
- Authentication
- Database integration
- Basic testing
```

**🚨 Step 0.5 - MANDATORY VERIFICATION (Same as DETAIL mode!)**:
```
📋 Here's the optimized prompt Lyra created:

"You are a backend developer.

Build a REST API with standard features:
- Modern framework
- Authentication
- Database integration
- Basic testing"

✅ Is this prompt OK, or do you want any changes?

Reply with:
- "OK" or "Approved" to proceed with swarm generation
- Describe any changes you'd like (e.g., "Add rate limiting and logging")
```

**⏸️ WAIT FOR USER RESPONSE**:
- If user says "Approved" / "OK" / "Looks good" → Proceed to Step 1 (analysis)
- If user says "Add X and Y" → Modify prompt, show again, wait for approval (loop back to Step 0.5)

**🚨 CRITICAL**: Do NOT proceed to swarm analysis until user explicitly approves!

**Once approved** → NOW proceed to Step 1-6 (read docs, analyze, generate swarm command)

**Step 1-6 - You analyze APPROVED prompt and generate**:
```markdown
# Swarm Command for: REST API with JWT Auth & Tests

## 📊 Analysis

**Prompt Characteristics:**
- **Criticality**: MEDIUM (standard development)
- **Complexity**: WELL-DEFINED (clear requirements)
- **Task Type**: BUILD/IMPLEMENT
- **Domains**: backend, database, auth, testing
- **Component Count**: 4 (API, Auth, Database, Tests)

**Selected Configuration:**
- **Topology**: Hierarchical - Well-defined structure with multiple components
- **Max Agents**: 6 (base 5 + 1 for component count)
- **Strategy**: development
- **Mode**: hierarchical

---

## 🖥️ Terminal Command (Copy & Execute)

\`\`\`bash
npx claude-flow swarm "Build REST API with JWT auth, PostgreSQL, comprehensive tests" \\
  --strategy development \\
  --mode hierarchical \\
  --max-agents 6 \\
  --parallel \\
  --monitor
\`\`\`

---

## 🤖 MCP Tools Alternative

### Coordination Setup
\`\`\`javascript
mcp__claude-flow__swarm_init {
  topology: "hierarchical",
  maxAgents: 6,
  strategy: "development"
}

mcp__claude-flow__agent_spawn { type: "architect", name: "System Architect" }
mcp__claude-flow__agent_spawn { type: "backend-dev", name: "API Developer" }
mcp__claude-flow__agent_spawn { type: "analyst", name: "Database Designer" }
mcp__claude-flow__agent_spawn { type: "tester", name: "QA Engineer" }
mcp__claude-flow__agent_spawn { type: "reviewer", name: "Code Reviewer" }
mcp__claude-flow__agent_spawn { type: "coordinator", name: "Tech Lead" }
\`\`\`

### Agent Execution
\`\`\`javascript
Task("System Architect", "Design API architecture with auth flow.

MANDATORY HOOKS:
- BEFORE: npx claude-flow@alpha hooks pre-task --description 'Design API architecture'
- DURING: npx claude-flow@alpha hooks post-edit --file '[file]' --memory-key 'architect/decisions'
- AFTER: npx claude-flow@alpha hooks post-task --task-id 'architect' --analyze-performance true

Store all architectural decisions in memory for other agents.", "architect")

Task("API Developer", "Implement REST endpoints with JWT.

MANDATORY HOOKS:
- BEFORE: npx claude-flow@alpha hooks pre-task --description 'Implement REST API'
- DURING: npx claude-flow@alpha hooks post-edit --file '[file]' --memory-key 'api/implementation'
- CHECK: npx claude-flow@alpha hooks pre-search --query 'auth flow' (check architect decisions)
- AFTER: npx claude-flow@alpha hooks post-task --task-id 'api-dev'

Coordinate with architect via memory before implementing.", "backend-dev")

Task("Database Designer", "Design PostgreSQL schema with Prisma.

MANDATORY HOOKS:
- BEFORE: npx claude-flow@alpha hooks pre-task --description 'Design database schema'
- DURING: npx claude-flow@alpha hooks post-edit --file '[file]' --memory-key 'database/schema'
- NOTIFY: npx claude-flow@alpha hooks notify --message '[schema decisions]'
- AFTER: npx claude-flow@alpha hooks post-task --task-id 'database'

Store schema decisions for API developer.", "analyst")

Task("QA Engineer", "Create comprehensive test suite with >80% coverage.

MANDATORY HOOKS:
- BEFORE: npx claude-flow@alpha hooks pre-task --description 'Create test suite'
- CHECK: npx claude-flow@alpha hooks session-restore --session-id 'swarm-[id]' (load API context)
- DURING: npx claude-flow@alpha hooks post-edit --file '[file]' --memory-key 'tests/coverage'
- AFTER: npx claude-flow@alpha hooks post-task --task-id 'tests'", "tester")

Task("Code Reviewer", "Review code quality and security.

MANDATORY HOOKS:
- BEFORE: npx claude-flow@alpha hooks pre-task --description 'Code review'
- CHECK: npx claude-flow@alpha hooks memory-usage --action 'retrieve' (check all agent decisions)
- NOTIFY: npx claude-flow@alpha hooks notify --message '[review findings]'
- AFTER: npx claude-flow@alpha hooks post-task --task-id 'reviewer'", "reviewer")

Task("Tech Lead", "Coordinate all agents and track progress.

MANDATORY HOOKS:
- BEFORE: npx claude-flow@alpha hooks pre-task --description 'Tech lead coordination'
- MONITOR: npx claude-flow@alpha hooks swarm-monitor --interval 30 (real-time monitoring)
- AFTER: npx claude-flow@alpha hooks session-end --export-metrics true", "coordinator")

TodoWrite { todos: [
  {id: "1", content: "Design API architecture", status: "in_progress", priority: "high"},
  {id: "2", content: "Setup project structure", status: "pending", priority: "high"},
  {id: "3", content: "Implement JWT authentication", status: "pending", priority: "high"},
  {id: "4", content: "Build REST endpoints", status: "pending", priority: "high"},
  {id: "5", content: "Design database schema", status: "pending", priority: "high"},
  {id: "6", content: "Write unit tests", status: "pending", priority: "medium"},
  {id: "7", content: "Integration tests", status: "pending", priority: "medium"},
  {id: "8", content: "API documentation", status: "pending", priority: "low"}
]}
\`\`\`

### Task Orchestration
\`\`\`javascript
mcp__claude-flow__task_orchestrate {
  task: "Implement production-ready REST API with JWT authentication, PostgreSQL database, and comprehensive test suite",
  strategy: "parallel",
  priority: "high",
  dependencies: {
    "System Architect": [], // No deps, starts first
    "Database Designer": [], // No deps, starts first
    "API Developer": ["System Architect", "Database Designer"], // Needs architecture and schema
    "QA Engineer": ["API Developer"], // Needs implementation complete
    "Code Reviewer": ["API Developer", "QA Engineer"], // Reviews code and tests
    "Tech Lead": [] // Monitors all, no blocking dependencies
  }
}
\`\`\`

---

## 👥 Agent Responsibilities

**System Architect**
- **Role**: High-level system design
- **Key Tasks**: API structure, auth flow design, database schema planning

**API Developer**
- **Role**: Backend implementation
- **Key Tasks**: REST endpoints, JWT middleware, request/response handling

**Database Designer**
- **Role**: Database architecture
- **Key Tasks**: Schema design, migrations, Prisma ORM setup

**QA Engineer**
- **Role**: Testing strategy
- **Key Tasks**: Unit tests, integration tests, test coverage reports

**Code Reviewer**
- **Role**: Quality assurance
- **Key Tasks**: Code review, security check, best practices enforcement

**Tech Lead**
- **Role**: Coordination
- **Key Tasks**: Progress tracking, agent coordination, blocker resolution

---

## 💡 Execution Notes

- **Estimated Time**: 2-4 hours for complete implementation
- **Critical Dependencies**: PostgreSQL must be installed/accessible
- **Monitoring Points**: Watch for auth implementation and database migrations
- **Risk Areas**: JWT security configuration, database connection handling
```

---

## 🔧 Special Handling

### For Vague Prompts
If the Lyra prompt is still vague after optimization:
- Default to **Adaptive topology (3-4 agents)**
- Use **research strategy**
- Note in output: "Prompt appears exploratory - using adaptive configuration"

### For Extremely Complex Prompts
If componentCount > 10:
- Consider **Gossip topology (8-12 agents)**
- Break down into phases in the "Execution Notes"
- Suggest running in phases if too complex

### For Critical/Production Tasks
If criticality is HIGH:
- Default to **Byzantine topology** for consensus
- Add extra validation agents
- Note: "High-stakes task - using fault-tolerant consensus"

### For User-Requested Agent Counts
If user explicitly mentions agent count (e.g., "with 10-20 agents" or "use 15 agents"):

**If request is within topology cap:**
```javascript
// User wants 8 agents, Hierarchical caps at 10 → OK
maxAgents = userRequestedCount;
reasoning = `Using ${maxAgents} agents as requested by user`;
```

**If request exceeds topology cap:**
```javascript
// Option 1: Cap at topology limit
maxAgents = caps[topology];
reasoning = `User requested ${userRequestedCount} agents, but ${topology} topology caps at ${maxAgents}. Capped to maintain optimal coordination.`;

// Option 2: Switch to higher-capacity topology
if (userRequestedCount > 10 && componentCount >= 10) {
  topology = 'gossip';
  maxAgents = Math.min(userRequestedCount, 12); // Gossip max is 12
  reasoning = `User requested ${userRequestedCount} agents. Switched to Gossip topology (max 12 agents) for higher capacity. Using ${maxAgents} agents.`;
}

// Option 3: If user wants >12 agents (impossible)
if (userRequestedCount > 12) {
  maxAgents = 12;
  topology = 'gossip';
  reasoning = `User requested ${userRequestedCount} agents, but maximum supported by any topology is 12 (Gossip). Using 12 agents for optimal coordination.`;
}
```

**Output Example:**
```markdown
**Selected Configuration:**
- **Topology**: Gossip (switched from Hierarchical for higher capacity)
- **Max Agents**: 12 (capped from user-requested 15)
- **Strategy**: development
- **Mode**: gossip

**Reasoning**: User requested 15 agents for excellent UI implementation. Maximum supported by any topology is 12 agents (Gossip). Hierarchical would cap at 10, but task complexity (17 partners, 4+ components) justifies Gossip topology with 12 specialized agents.
```

---

## 📚 Reference Documentation Location

All reference files are in: `/docs/lyra-swarm-integration/`

1. `01-swarm-command-reference.md` - Command structure and options
2. `02-prompt-type-examples.md` - Examples for each prompt category
3. `03-topology-decision-tree.md` - Topology selection logic
4. `04-agent-selection-guide.md` - Agent type mapping

---

**Ready to transform Lyra prompts into swarm commands!** 🚀
