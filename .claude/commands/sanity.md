# /sanity Slash Command

Restart only the Sanity Studio CMS server on port 8888 with robust verification and background shell isolation.

## Command Syntax
```
/sanity
```

## Aliases
- `/san` - Ultra-short version

## Implementation Pattern

### Critical: Single Shell Execution

**KEY INSIGHT**: Prevent background shell race conditions by separating cleanup (synchronous) from server start (background).

```bash
# Phase 1: Cleanup (synchronous, no background)
PORT=8888

echo "🔍 Step 1: Port cleanup (synchronous)..."

# Check with ss for accurate LISTEN state
if ss -tulpn 2>/dev/null | grep -q ":$PORT "; then
  echo "📍 Port $PORT is in use"

  # Try graceful shutdown first
  PID=$(lsof -t -i:$PORT 2>/dev/null)
  if [ -n "$PID" ]; then
    echo "🛑 Graceful shutdown (SIGTERM)..."
    kill -15 $PID 2>/dev/null
    sleep 2
  fi

  # Verify and escalate if needed
  if ss -tulpn 2>/dev/null | grep -q ":$PORT "; then
    echo "⚠️  Escalating to nuclear cleanup..."
    pkill -9 -f "sanity dev" 2>/dev/null || true
    pkill -9 -f "sanity start" 2>/dev/null || true
    sleep 3
  fi
fi

# Final verification
if ss -tulpn 2>/dev/null | grep -q ":$PORT "; then
  echo "❌ ERROR: Port $PORT still occupied after cleanup"
  ss -tulpn | grep ":$PORT "
  exit 1
fi

echo "✅ Port $PORT verified free"
```

## Bash Tool Invocation

**Two separate Bash calls - cleanup then start:**

```javascript
// Step 1: Cleanup (synchronous, wait for completion)
Bash({
  command: `
    PORT=8888
    echo "🔍 Cleaning up port $PORT..."

    # Graceful attempt
    if ss -tulpn 2>/dev/null | grep -q ":$PORT "; then
      PID=$(lsof -t -i:$PORT 2>/dev/null)
      [ -n "$PID" ] && kill -15 $PID 2>/dev/null && sleep 2

      # Nuclear if graceful failed
      if ss -tulpn 2>/dev/null | grep -q ":$PORT "; then
        pkill -9 -f "sanity dev" 2>/dev/null || true
        pkill -9 -f "sanity start" 2>/dev/null || true
        sleep 3
      fi
    fi

    # Verify clean
    if ss -tulpn 2>/dev/null | grep -q ":$PORT "; then
      echo "ERROR: Port $PORT still in use"
      exit 1
    fi

    echo "✅ Port $PORT is free"
  `,
  description: 'Clean up port 8888 before restart',
  run_in_background: false, // CRITICAL: Wait for cleanup
  timeout: 15000
});

// Step 2: Start server (background, only after cleanup succeeds)
Bash({
  command: `cd /home/fivefingerdisco/Projects/RBK_002 && npm run studio`,
  description: 'Start Sanity Studio on port 8888',
  run_in_background: true, // Now safe - port is verified free
  timeout: 60000
});
```

## Expected Output
```
🔍 Checking port 8888 with ss (reliable)...
📍 Port 8888 is in use
🛑 Attempting graceful shutdown...
✅ Port 8888 freed gracefully
✅ Port 8888 verified free

🚀 Starting Sanity Studio...
Sanity: http://localhost:8888
```

## Why This Works

### Key Improvements from Basic Approach
1. **`ss -tulpn` Verification**: More reliable than `lsof` for socket state
2. **Process Pattern Matching**: `pkill -f "sanity dev"` finds Sanity processes
3. **Fast Escalation**: Nuclear option after 2 seconds if graceful fails
4. **Sanity-Specific Cleanup**: Targets Vite dev server processes

### Sanity-Specific Considerations
- Sanity Studio uses Vite dev server (fast startup ~300ms)
- Port 8888 typically less problematic than 7777 (fewer browser connections)
- Still benefits from robust verification to handle edge cases
- Vite cleanup is important for file watcher release

## Use Cases
- Sanity schema changes
- CMS configuration updates
- Plugin modifications
- Leave frontend running
- Faster than full restart

## Troubleshooting

### Port Still In Use After Restart
```bash
# Check what's on port 8888
ss -tulpn | grep 8888

# Check for Vite/Sanity processes
ps aux | grep -E "(sanity|vite)"

# Nuclear option for Sanity
pkill -9 -f "sanity dev"
```

### Studio Won't Start
```bash
# Clear Sanity cache
rm -rf studio/.sanity

# Reinstall dependencies
cd studio && npm install

# Try starting manually to see errors
cd studio && sanity dev --port 8888
```

### Schema Changes Not Reflecting
- Sanity caches compiled schemas
- Restart with `/sanity` usually sufficient
- For major schema changes, may need to clear cache:
  ```bash
  rm -rf studio/.sanity
  /sanity  # Restart
  ```

## Performance
- Graceful shutdown: ~2 seconds (Vite is fast)
- Nuclear cleanup: ~3 seconds
- Studio startup: ~300ms (Vite is very fast)
- Total: ~2-5 seconds

## Related Commands
- `/restart` (`/r`) - Restart both frontend and Sanity
- `/frontend` (`/fe`) - Restart frontend only

## References
- Detailed troubleshooting: `/home/fivefingerdisco/Projects/RBK_002/PROCESS/2025-10-01_22-03_localhost-troubles.md`
- Sanity dev server documentation
- Vite dev server best practices
- Why `ss` is more reliable than `lsof`
