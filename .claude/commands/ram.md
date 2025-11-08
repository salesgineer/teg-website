# /ram Slash Command

Comprehensive memory management and cleanup operations for development environment optimization and system stability.

## Command Syntax
```
/ram [operation]
```

## Available Operations

### 1. Process Cleanup
```
/ram processes          # Interactive process cleanup
/ram processes --force  # Force cleanup without prompts
/ram processes --dry    # Show what would be cleaned
```
Kills orphaned Node.js processes, stuck claude-code instances, and duplicate dev servers.

### 2. Cache Cleanup
```
/ram cache              # Safe cache cleanup
/ram cache --aggressive # Deep clean (includes node_modules)
/ram cache --dry        # Preview cache cleanup
```
Clears npm, .next, browser, and system caches to free up disk space.

### 3. Memory Optimization
```
/ram optimize           # System-level memory tuning
/ram optimize --verify  # Optimize and verify settings
```
Applies kernel parameters, zram swap configuration, and OOM killer priorities.

### 4. Guardian Mode
```
/ram guardian           # Start auto-recovery monitoring
/ram guardian status    # Check guardian status
/ram guardian stop      # Stop guardian monitoring
```
Continuous monitoring with automatic cleanup on process crashes.

### 5. All Operations
```
/ram all                # Run all cleanup operations
/ram all --force        # Run all without prompts
/ram all --dry          # Preview all operations
```
Comprehensive cleanup: processes + caches + optimization + guardian start.

## Aliases
- `/ram` - Show current memory status and quick menu
- `/ram clean` - Quick cleanup (processes + safe cache)
- `/ram status` - Detailed memory and process status

## Implementation Pattern

### Command Router Logic

```bash
#!/bin/bash
# RAM Command Router - Memory Management Hub

# Set working directory
cd /home/fivefingerdisco/Projects/RBK_002

# Parse command arguments
OPERATION=${1:-"status"}
FORCE_FLAG=""
DRY_FLAG=""

# Parse flags
for arg in "$@"; do
  case $arg in
    --force) FORCE_FLAG="--force" ;;
    --dry|--dry-run) DRY_FLAG="--dry-run" ;;
    --aggressive) FORCE_FLAG="--aggressive" ;;
  esac
done

# Route to appropriate operation
case $OPERATION in
  "processes"|"process")
    echo "🧹 Process Cleanup Operation"
    ./scripts/process-cleanup.sh $FORCE_FLAG $DRY_FLAG
    ;;

  "cache")
    echo "💾 Cache Cleanup Operation"
    ./scripts/cache-cleanup.sh $FORCE_FLAG $DRY_FLAG
    ;;

  "optimize"|"opt")
    echo "⚙️  Memory Optimization Operation"
    if command -v sudo >/dev/null; then
      ./scripts/optimize-memory.sh
      if [[ "$2" == "--verify" ]]; then
        echo "🔍 Verifying optimization..."
        free -h
        swapon --show
        echo "Swappiness: $(cat /proc/sys/vm/swappiness)"
      fi
    else
      echo "⚠️  Sudo access required for system optimization"
    fi
    ;;

  "guardian")
    echo "🛡️  Guardian Mode"
    if [[ "$2" == "status" ]]; then
      pgrep -f "claude-code-guardian" >/dev/null && echo "✅ Guardian running" || echo "❌ Guardian stopped"
    elif [[ "$2" == "stop" ]]; then
      pkill -f "claude-code-guardian" && echo "🛑 Guardian stopped"
    else
      echo "🚀 Starting guardian monitoring..."
      nohup ./scripts/claude-code-guardian.sh >/dev/null 2>&1 &
      echo "✅ Guardian started (monitoring every 30s)"
    fi
    ;;

  "all")
    echo "🚀 Comprehensive Memory Management"
    echo "Step 1: Process cleanup..."
    ./scripts/process-cleanup.sh $FORCE_FLAG $DRY_FLAG
    echo "Step 2: Cache cleanup..."
    ./scripts/cache-cleanup.sh $DRY_FLAG
    echo "Step 3: Memory optimization..."
    command -v sudo >/dev/null && ./scripts/optimize-memory.sh || echo "⚠️  Skip optimization (no sudo)"
    echo "Step 4: Starting guardian..."
    nohup ./scripts/claude-code-guardian.sh >/dev/null 2>&1 &
    echo "✅ All operations completed"
    ;;

  "clean")
    echo "🧹 Quick Cleanup"
    ./scripts/process-cleanup.sh $FORCE_FLAG
    ./scripts/cache-cleanup.sh $DRY_FLAG
    ;;

  "status"|"info"|"")
    echo "📊 Memory Status Report"
    echo "======================"
    free -h
    echo ""
    echo "Top memory consumers:"
    ps aux --sort=-%mem | head -6
    echo ""
    echo "Node.js processes: $(pgrep -f node | wc -l)"
    echo "Claude processes: $(pgrep -f claude | wc -l)"
    echo "Guardian status: $(pgrep -f claude-code-guardian >/dev/null && echo 'running' || echo 'stopped')"
    ;;

  *)
    echo "❌ Unknown operation: $OPERATION"
    echo "Available: processes, cache, optimize, guardian, all, clean, status"
    echo "Use --help for detailed usage"
    exit 1
    ;;
esac
```

## Bash Tool Invocation

**Single Bash call with command routing:**

```javascript
Bash({
  command: `
    cd /home/fivefingerdisco/Projects/RBK_002

    # Parse arguments
    OPERATION="${1:-"status"}"
    FORCE_FLAG=""
    DRY_FLAG=""

    # Parse flags from arguments
    for arg in "$@"; do
      case $arg in
        --force) FORCE_FLAG="--force" ;;
        --dry|--dry-run) DRY_FLAG="--dry-run" ;;
        --aggressive) FORCE_FLAG="--aggressive" ;;
      esac
    done

    # Route to appropriate operation
    case $OPERATION in
      "processes"|"process")
        echo "🧹 Process Cleanup Operation"
        ./scripts/process-cleanup.sh $FORCE_FLAG $DRY_FLAG
        ;;
      "cache")
        echo "💾 Cache Cleanup Operation"
        ./scripts/cache-cleanup.sh $FORCE_FLAG $DRY_FLAG
        ;;
      "optimize"|"opt")
        echo "⚙️  Memory Optimization Operation"
        if command -v sudo >/dev/null; then
          ./scripts/optimize-memory.sh
          [[ "$2" == "--verify" ]] && {
            echo "🔍 Verifying optimization..."
            free -h
            swapon --show
            echo "Swappiness: $(cat /proc/sys/vm/swappiness)"
          }
        else
          echo "⚠️  Sudo access required for system optimization"
        fi
        ;;
      "guardian")
        echo "🛡️  Guardian Mode"
        if [[ "$2" == "status" ]]; then
          pgrep -f "claude-code-guardian" >/dev/null && echo "✅ Guardian running" || echo "❌ Guardian stopped"
        elif [[ "$2" == "stop" ]]; then
          pkill -f "claude-code-guardian" && echo "🛑 Guardian stopped"
        else
          echo "🚀 Starting guardian monitoring..."
          nohup ./scripts/claude-code-guardian.sh >/dev/null 2>&1 &
          echo "✅ Guardian started (monitoring every 30s)"
        fi
        ;;
      "all")
        echo "🚀 Comprehensive Memory Management"
        echo "Step 1: Process cleanup..."
        ./scripts/process-cleanup.sh $FORCE_FLAG $DRY_FLAG
        echo "Step 2: Cache cleanup..."
        ./scripts/cache-cleanup.sh $DRY_FLAG
        echo "Step 3: Memory optimization..."
        command -v sudo >/dev/null && ./scripts/optimize-memory.sh || echo "⚠️  Skip optimization (no sudo)"
        echo "Step 4: Starting guardian..."
        nohup ./scripts/claude-code-guardian.sh >/dev/null 2>&1 &
        echo "✅ All operations completed"
        ;;
      "clean")
        echo "🧹 Quick Cleanup"
        ./scripts/process-cleanup.sh $FORCE_FLAG
        ./scripts/cache-cleanup.sh $DRY_FLAG
        ;;
      "status"|"info"|"")
        echo "📊 Memory Status Report"
        echo "======================"
        free -h
        echo ""
        echo "Top memory consumers:"
        ps aux --sort=-%mem | head -6
        echo ""
        echo "Node.js processes: $(pgrep -f node | wc -l)"
        echo "Claude processes: $(pgrep -f claude | wc -l)"
        echo "Guardian status: $(pgrep -f claude-code-guardian >/dev/null && echo 'running' || echo 'stopped')"
        ;;
      *)
        echo "❌ Unknown operation: $OPERATION"
        echo "Available: processes, cache, optimize, guardian, all, clean, status"
        echo "Use --help for detailed usage"
        exit 1
        ;;
    esac
  `,
  description: "RAM memory management operations",
  arguments: arguments,  // Pass through user arguments
  timeout: 120000  // 2 minutes for comprehensive operations
})
```

## Expected Output Examples

### Status Command
```
📊 Memory Status Report
======================
               total        used        free      shared  buff/cache   available
Mem:            64Gi       18Gi       42Gi       1.0Gi       4.1Gi       44Gi
Swap:          24Gi       0.0Gi       24Gi

Top memory consumers:
USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
fivefingerd 1234  2.1  8.5  1234567 876543 ?      Sl   10:00   5:12 node
fivefingerd 5678  1.8  6.2  987654 654321 ?      Sl   10:01   3:45 claude

Node.js processes: 3
Claude processes: 1
Guardian status: running
```

### Process Cleanup
```
🧹 Process Cleanup Operation
[2025-11-01 10:30:00] Starting process cleanup...
[2025-11-01 10:30:01] Found 2 orphaned node processes
[2025-11-01 10:30:02] Killed PID 1234 (orphaned node)
[2025-11-01 10:30:02] Killed PID 5678 (stuck claude-code)
[2025-11-01 10:30:03] Cleanup completed successfully
✅ Process cleanup completed
```

### All Operations
```
🚀 Comprehensive Memory Management
Step 1: Process cleanup...
🧹 Process Cleanup Operation
[2025-11-01 10:30:00] Starting process cleanup...
✅ Process cleanup completed

Step 2: Cache cleanup...
💾 Cache Cleanup Operation
[2025-11-01 10:31:00] Clearing npm cache...
[2025-11-01 10:31:05] Clearing .next cache...
✅ Cache cleanup completed

Step 3: Memory optimization...
⚙️  Memory Optimization Operation
🔧 Optimizing 64GB system memory configuration...
📦 Setting up 16GB zram...
✅ Memory optimization complete!

Step 4: Starting guardian...
🛡️  Guardian Mode
🚀 Starting guardian monitoring...
✅ Guardian started (monitoring every 30s)
✅ All operations completed
```

## Safety Features

### 1. Interactive Confirmation
- All destructive operations ask for confirmation unless `--force` is used
- `--dry-run` shows what would be affected without making changes
- Detailed logging to `/tmp/ram-operation-*.log` files

### 2. Process Protection
- Never kills Cursor IDE or system-critical processes
- OOM killer priorities configured to protect development tools
- Guardian mode prevents cascade failures

### 3. Cache Safety
- Default cache cleanup preserves important development artifacts
- Aggressive mode clearly warns about `node_modules` removal
- Backup verification before major cache deletions

### 4. System Optimization
- Requires sudo access for system-level changes
- Non-destructive kernel parameter tuning
- zram swap with compression for efficient memory usage

## Performance Impact

| Operation | Memory Freed | Time Required | Risk Level |
|-----------|--------------|---------------|------------|
| Process cleanup | 2-8GB | 10-30s | Low |
| Cache cleanup | 1-15GB | 30s-2min | Low |
| Memory optimization | 0-4GB (swap) | 1-2min | Medium |
| Guardian mode | Continuous | negligible | Very Low |
| All operations | 3-27GB | 2-5min | Medium |

## Use Cases

### Development Environment Reset
```bash
/ram all --force  # Full environment reset
```

### Quick Memory Recovery
```bash
/ram clean  # Process + safe cache cleanup
```

### System Optimization
```bash
/ram optimize --verify  # Tune system + verify results
```

### Continuous Protection
```bash
/ram guardian  # Start auto-recovery monitoring
```

### Troubleshooting
```bash
/ram status     # Check current memory state
/ram processes --dry  # Preview process cleanup
/ram cache --dry     # Preview cache cleanup
```

## Integration with Existing Scripts

The `/ram` command leverages the existing memory management infrastructure:

- **process-cleanup.sh**: Orphaned process elimination
- **cache-cleanup.sh**: Development cache management
- **optimize-memory.sh**: System-level memory tuning
- **claude-code-guardian.sh**: Auto-recovery monitoring
- **memory-enforcement.js**: Build-time memory validation

## Monitoring and Logging

All operations generate detailed logs:
- Process cleanup: `/tmp/process-cleanup-*.log`
- Cache cleanup: `/tmp/cache-cleanup-*.log`
- Guardian mode: `/tmp/claude-code-guardian-*.log`
- Combined operations: `/tmp/ram-operation-*.log`

## Troubleshooting

### Sudo Access Required
```bash
# System optimization needs sudo
sudo ./scripts/optimize-memory.sh
```

### Processes Won't Die
```bash
# Force cleanup
/ram processes --force

# Or manually:
sudo pkill -9 -f "node|claude"
```

### Guardian Not Starting
```bash
# Check dependencies
ls -la scripts/claude-code-guardian.sh
chmod +x scripts/claude-code-guardian.sh

# Check logs
tail -f /tmp/claude-code-guardian-*.log
```

## Related Commands
- `/restart` (`/r`) - Restart development servers
- `/frontend` (`/fe`) - Frontend-specific restart
- `/sanity` (`/san`) - Sanity-specific restart

## Memory Management Best Practices

### Daily Routine
1. Start guardian: `/ram guardian`
2. Check status: `/ram status`
3. Quick cleanup if needed: `/ram clean`

### Weekly Maintenance
1. Full cleanup: `/ram all`
2. Verify optimization: `/ram optimize --verify`

### Troubleshooting Workflow
1. Diagnose: `/ram status`
2. Preview fixes: `/ram processes --dry` and `/ram cache --dry`
3. Apply fixes: `/ram clean` or `/ram all --force`
4. Enable protection: `/ram guardian`

## Architecture Notes

The memory management system follows a layered approach:

1. **Application Layer**: Process cleanup targets orphaned dev processes
2. **Cache Layer**: Development cache management for disk space recovery
3. **System Layer**: Kernel tuning and swap optimization
4. **Monitoring Layer**: Guardian mode for continuous protection

This ensures comprehensive memory coverage while maintaining development workflow stability.
