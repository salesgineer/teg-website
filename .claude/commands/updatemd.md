# /updatemd - Update Existing Session Summary with Intelligent Swarm

Update the existing Markdown log file in `docs/` directory (supports weekly/daily folder structure) with the latest summary of this terminal session.

**Do not create a new file.**

**IMPORTANT**: Use **Europe/Riga timezone** for timestamps, not UTC.

## Update Requirements

The update should capture:

1. **The overall approach** we're taking
2. **Steps completed since the last update**
3. **The current failure or challenge**

Keep the record **continuous and high-level**, focusing on approach, progress, and challenges — not every command or detail.

## Intelligent Execution (Adaptive Swarm)

The command automatically uses **parallel agent execution** for faster updates when there are significant changes to document.

### Minor Update (Single Agent)

For small incremental progress:

```javascript
// STEP 1: Find and read target file (searches weekly/daily folders)
Glob('$(pwd)/docs/Week_*/**/*.md'); // Recursive search for all .md files
// Select most recent or specified file

Read([target - file]);

// STEP 2: Single agent targeted update
Task(
  'Documentation Updater',
  `Update existing document with latest developments using centralized timestamp service:

  1. Get current timestamp: TIMESTAMP_DATA=$($(pwd)/scripts/get-riga-timestamp.sh full)
     DAILY_FOLDER=$(echo $TIMESTAMP_DATA | cut -d' ' -f1)
     FILE_PREFIX=$(echo $TIMESTAMP_DATA | cut -d' ' -f2)
     WEEK_NUM=$(echo $TIMESTAMP_DATA | cut -d' ' -f3)

  2. Analyze what's new since last update
  3. Identify appropriate section (Progress/Challenge)
  4. Append update with timestamp: "#### Update (\${FILE_PREFIX} Europe/Riga)"
  5. Use Edit tool to insert content
  6. Preserve all existing content
  7. Validate folder/file match current date: $(pwd)/scripts/validate-timestamp.sh [folder] [file]`,
  'technical-writer',
);
```

**Time**: 6-8 seconds

### Major Update (Parallel Swarm)

For significant developments or multiple topics:

```javascript
// STEP 1: Find and read target file (searches weekly/daily folders)
Glob("$(pwd)/docs/Week_*/**/*.md")  // Recursive search for all .md files
Read([target-file])

// STEP 2: Initialize star swarm for parallel updates
mcp__claude-flow__swarm_init {
  topology: "star",
  maxAgents: 5,
  hub: "update-coordinator"
}

// STEP 3: PARALLEL delta analysis (saves 5-8 seconds)
Task(
  "Progress Analyzer",
  "Extract new progress, completed steps, milestones",
  "researcher"
)

Task(
  "Challenge Analyzer",
  "Identify new challenges, resolutions, changes",
  "root-cause-analyst"
)

Task(
  "Decision Analyzer",
  "Extract new technical decisions and insights",
  "technical-writer"
)

// STEP 4: PARALLEL section updates
Task(
  "Progress Updater",
  "Update Steps Completed section with new items",
  "technical-writer"
)

Task(
  "Challenge Updater",
  "Update Current Challenge section",
  "technical-writer"
)

// STEP 5: Coordinator merges and applies
Task(
  "Update Coordinator",
  `Merge all updates and apply to file using centralized timestamp service:

  1. Get timestamp: TIMESTAMP_DATA=$($(pwd)/scripts/get-riga-timestamp.sh full)
     FILE_PREFIX=$(echo $TIMESTAMP_DATA | cut -d' ' -f2)
     WEEK_NUM=$(echo $TIMESTAMP_DATA | cut -d' ' -f3)

  2. Combine section updates
  3. Apply Edit operations with timestamp headers: "#### Update (\${FILE_PREFIX} Europe/Riga)"
  4. Verify no content loss
  5. Validate timestamps: $(pwd)/scripts/validate-timestamp.sh [folder] [file]`,
  "technical-writer"
)
```

**Time**: 10-12 seconds (vs 20-25 sequential) - 2x faster

## Automatic Selection Logic

```javascript
const updateComplexity = {
  newMessages: (sessionMessages - lastUpdateMessages) / lastUpdateMessages,
  topicShift: currentTopic !== lastTopic,
  majorResolution: previousChallenge && nowResolved,
  significantProgress: newSteps > 3,
};

if (updateComplexity.majorResolution || updateComplexity.significantProgress) {
  // Use star swarm (5 agents, parallel sections)
  initializeSwarmUpdate();
} else {
  // Use single agent (simple append)
  singleAgentUpdate();
}
```

## File Selection

```bash
# Auto-select most recent file (searches all subdirectories)
/updatemd

# Specify file in weekly/daily folder structure
/updatemd docs/Week_40/25.10.04_Friday/session-log.md

# Full path also works
/updatemd /home/fivefingerdisco/Projects/RBK_002/docs/Week_40/25.10.04_Friday/session-log.md
```

## Update Patterns

### Minor Update (Append)

```markdown
## Steps Completed

1. ✅ Created graceful shutdown
2. ✅ Debugged port issues

#### Update (2025-10-01 23:35 Europe/Riga)

3. ✅ Implemented adaptive swarm commands
4. ✅ Added parallel execution for speed
```

### Major Update (New Section)

```markdown
## Command Optimization Implementation (2025-10-01 23:35 Europe/Riga)

Implemented intelligent swarm coordination for /newmd and /updatemd commands
to achieve 2-3x speedup on complex sessions through parallel agent execution.

### Approach

[Details of parallel execution strategy]

### Results

- Minor updates: 6-8s (single agent)
- Major updates: 10-12s vs 20-25s (2x faster with swarm)
```

## Content Preservation

**Always preserved**:

- ✅ All existing content
- ✅ YAML frontmatter
- ✅ Original timestamps
- ✅ Section hierarchy
- ✅ Code blocks
- ✅ Links

**Added**:

- ✅ New progress items
- ✅ New challenges/resolutions
- ✅ Timestamp subsections
- ✅ Updated status (if changed)

## Usage Examples

### Example 1: Minor Update (Single Agent)

```bash
/updatemd

# Automatic execution:
📝 Target: docs/Week_40/25.10.04_Friday/session-log.md
🔍 Update type: MINOR (incremental progress)
📝 Appending to "Steps Completed" section...

✅ Updated in 7 seconds
```

### Example 2: Major Update (Parallel Swarm)

```bash
/updatemd

# Automatic execution:
📝 Target: docs/Week_40/25.10.04_Friday/session-log.md
🔍 Update type: MAJOR (significant developments)
🐝 Initializing star swarm (5 agents)...

[Agent 1] Analyzing new progress...
[Agent 2] Analyzing challenges...
[Agent 3] Updating Steps section...
[Agent 4] Updating Challenge section...
[Coordinator] Merging updates...

✅ Updated in 11 seconds (vs ~22s sequential)
⚡ 2x faster with parallel execution
```

## Swarm Performance Benefits

**Parallel Advantages**:

- Multiple agents analyze different aspects simultaneously
- Section updates happen in parallel
- Quality verification concurrent with writing

**Activation Criteria**:

- 10+ new messages since last update
- Topic change or major breakthrough
- 3+ new completed steps
- Problem resolution

**Single Agent Preferred When**:

- Small incremental update
- Same topic continuation
- 1-2 new items

## Error Handling

**File not found**:

```
❌ File not found

💡 Recent files in docs/:
- Week_40/25.10.04_Friday/session-log.md (10 min ago)
- Week_40/25.10.03_Thursday/deployment-notes.md (1 day ago)
- Week_39/25.09.28_Sunday/project-review.md (1 week ago)

Use /newmd to create new summary
```

**No changes to update**:

```
ℹ️  No significant changes since last update
💡 Use /newmd if starting new topic
```

## Best Practices

1. **Update Frequently**: Call during long sessions for minor updates
2. **Preserve History**: Never delete existing content
3. **Timestamp Subsections**: New developments get Europe/Riga timestamps
4. **Maintain Flow**: Updates should read continuously

## Performance Comparison

| Update Type | Method | Agents | Time   | Speedup |
| ----------- | ------ | ------ | ------ | ------- |
| Minor       | Single | 1      | 6-8s   | 1.0x    |
| Moderate    | Star   | 3-4    | 8-10s  | 2.0x    |
| Major       | Star   | 5      | 10-12s | 2.2x    |

## Related Commands

- `/newmd` - Create new session summary (also uses intelligent swarm)
