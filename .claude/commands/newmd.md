# /newmd - Create New Session Summary with Intelligent Swarm

Summarize the current terminal session history into a new Markdown file in `docs/` with weekly and daily folder organization.

**Folder structure**: `docs/Week_##/YY.MM.DD_DayOfWeek/YY.MM.DD_HH:MM_description.md` (Europe/Riga timezone)
**Example**: `docs/Week_40/25.10.04_Saturday/25.10.04_12:46_session-summary.md`

## Summary Requirements

The summary should include:

1. **The overall approach** we're taking
2. **Steps completed** so far
3. **The current failure or challenge**

Keep it **concise, high-level, and continuous** — so another LLM can easily pick up and continue the workflow.

## Intelligent Execution (Adaptive Swarm)

The command automatically uses **parallel agent execution** for faster results when the session is complex enough to benefit from it.

### Simple Session (Quick Summary)

If session is straightforward (single topic, few changes):

```javascript
// Single agent - fast and efficient
Task(
  'Technical Writer',
  `Create session summary with weekly/daily folder organization using centralized timestamp service:

  1. Get timestamp from service:
     TIMESTAMP_DATA=$($(pwd)/scripts/get-riga-timestamp.sh full)
     DAILY_FOLDER=$(echo $TIMESTAMP_DATA | cut -d' ' -f1)
     FILE_PREFIX=$(echo $TIMESTAMP_DATA | cut -d' ' -f2)
     WEEK_NUM=$(echo $TIMESTAMP_DATA | cut -d' ' -f3)

  2. Create weekly and daily folders: mkdir -p "$(pwd)/docs/Week_$WEEK_NUM/$DAILY_FOLDER"

  3. Analyze recent conversation (last 30-50 messages)
  4. Extract: approach, steps completed, current challenge
  5. Generate filename: \${FILE_PREFIX}_topic-description.md
  6. Create structured Markdown
  7. Save to $(pwd)/docs/Week_$WEEK_NUM/$DAILY_FOLDER/[filename]
  8. Validate: $(pwd)/scripts/validate-timestamp.sh "$(pwd)/docs/Week_$WEEK_NUM/$DAILY_FOLDER" "$(pwd)/docs/Week_$WEEK_NUM/$DAILY_FOLDER/[filename]"

  Example: docs/Week_40/25.10.05_Sunday/25.10.05_21:30_session-summary.md`,
  'technical-writer',
);
```

### Complex Session (Parallel Swarm for Speed)

If session has multiple topics, code changes, or deep analysis:

```javascript
// STEP 1: Initialize hierarchical swarm for parallel execution
mcp__claude-flow__swarm_init {
  topology: "hierarchical",
  maxAgents: 6,
  coordinator: "documentation-lead"
}

// STEP 2: PARALLEL information gathering (saves 10-15 seconds)
Task(
  "Session Analyzer",
  "Extract main topics, approach, decisions from conversation history",
  "researcher"
)

Task(
  "Code Change Analyzer",
  "Identify modified files, code changes, technical decisions",
  "code-analyzer"
)

Task(
  "Challenge Extractor",
  "Extract errors, debugging steps, current blockers",
  "root-cause-analyst"
)

// STEP 3: SEQUENTIAL synthesis by lead
Task(
  "Documentation Lead",
  `Synthesize parallel findings into structured summary using centralized timestamp service:

  1. Get timestamp from service:
     TIMESTAMP_DATA=$($(pwd)/scripts/get-riga-timestamp.sh full)
     DAILY_FOLDER=$(echo $TIMESTAMP_DATA | cut -d' ' -f1)
     FILE_PREFIX=$(echo $TIMESTAMP_DATA | cut -d' ' -f2)
     WEEK_NUM=$(echo $TIMESTAMP_DATA | cut -d' ' -f3)

  2. Create weekly and daily folders: mkdir -p "$(pwd)/docs/Week_$WEEK_NUM/$DAILY_FOLDER"

  3. Generate filename: \${FILE_PREFIX}_description.md
  4. Create complete Markdown document
  5. Save to $(pwd)/docs/Week_$WEEK_NUM/$DAILY_FOLDER/[filename]
  6. Validate: $(pwd)/scripts/validate-timestamp.sh "$(pwd)/docs/Week_$WEEK_NUM/$DAILY_FOLDER" "$(pwd)/docs/Week_$WEEK_NUM/$DAILY_FOLDER/[filename]"

  Example: docs/Week_40/25.10.05_Sunday/25.10.05_21:30_detailed-analysis.md
  Structure: Overview, Approach, Steps Completed, Current Challenge, Decisions`,
  "technical-writer"
)

// STEP 4: PARALLEL quality check (optional for complex docs)
Task(
  "Quality Reviewer",
  "Verify technical accuracy and completeness",
  "reviewer"
)
```

**Performance**: 12-18 seconds with swarm vs 30-40 seconds sequential (2.5x faster)

## Automatic Selection Logic

The command decides automatically:

```javascript
const complexity = {
  conversationLength: messageCount > 30,
  hasCodeChanges: modifiedFiles.length > 3,
  hasDeepAnalysis: containsDebugging || containsArchitecture,
  multiTopic: distinctTopics > 2,
};

if (complexity.hasDeepAnalysis || complexity.multiTopic) {
  // Use hierarchical swarm (6 agents, parallel execution)
  initializeSwarm();
} else {
  // Use single agent (simple and fast)
  singleAgent();
}
```

## Document Structure

```markdown
---
title: [Descriptive Title]
date: YY.MM.DD HH:MM (Europe/Riga)
week: Week_##
daily_folder: YY.MM.DD_DayOfWeek
status: [resolved|in-progress|blocked]
tags: [tag1, tag2, tag3]
---

# [Title] - Session Summary

**File**: `docs/Week_40/25.10.04_Saturday/25.10.04_12:46_description.md`

## 🎯 Session Overview

[1-2 paragraph summary]

## Approach Taken

[High-level strategy]

## Steps Completed

1. [Step 1]
2. [Step 2]
3. [Step 3]

## Current Challenge

[Current blocker or next steps]

## Key Technical Decisions

- [Decision 1]
- [Decision 2]
```

## Usage

```bash
/newmd

# Automatic execution:
# - Creates weekly and daily folders: docs/Week_##/YY.MM.DD_DayOfWeek/
# - Analyzes session complexity
# - Chooses single agent OR parallel swarm
# - Creates summary
# - Saves to docs/Week_##/YY.MM.DD_DayOfWeek/YY.MM.DD_HH:MM_topic.md

# Result (simple session)
✅ Created weekly/daily folder: docs/Week_40/25.10.04_Saturday/
✅ Created: docs/Week_40/25.10.04_Saturday/25.10.04_12:46_topic-name.md
⏱️  Time: 10 seconds (single agent)

# Result (complex session)
🐝 Using hierarchical swarm (6 agents)
✅ Created weekly/daily folder: docs/Week_40/25.10.04_Saturday/
✅ Created: docs/Week_40/25.10.04_Saturday/25.10.04_15:30_detailed-analysis.md
⏱️  Time: 15 seconds (vs 35s sequential) - 2.3x faster
```

## Swarm Performance Benefits

**Why Swarm is Faster**:

- **Parallel Research**: 3 agents gather info simultaneously (conversation + code + errors)
- **Concurrent Analysis**: While one agent writes Overview, another handles Approach
- **Quality Gates**: Final review happens in parallel with other work

**When Swarm Activates**:

- Session has 30+ messages
- 3+ files modified
- Deep technical debugging or architecture discussion
- Multiple distinct topics

**When Single Agent**:

- Quick updates
- Single topic
- Few changes
- Straightforward summary

## Related Commands

- `/updatemd [file]` - Update existing summary (also uses intelligent swarm)
