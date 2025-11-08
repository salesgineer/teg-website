# /frontend Slash Command

Restart only the Next.js frontend development server on port 7777 with robust verification and background shell isolation.

## Command Syntax
```
/frontend
```

## Aliases
- `/fe` - Ultra-short version

## ⚡ Faster Alternatives

This command restarts only the frontend (~12-18s cold start). But there are faster options for specific scenarios:

### Option A: Parallel Both Servers (Recommended - ~10s total)
```bash
Ctrl+Shift+B  # VS Code Command Palette → Select "dev:all"
# OR manually:
npm run dev:all
```
Starts frontend + Sanity simultaneously instead of sequentially.

### Option B: Offline Development (60% faster - ~3-6s)
```bash
NEXT_PUBLIC_DEV_STUB_DATA=true npm run dev
```
Uses mock data from `src/lib/sanity/__mocks__/fixtures.ts` instead of calling Sanity API. Perfect for rapid frontend iteration.

### Option C: Measure Bundle Impact
```bash
npm run analyze
```
Interactive bundle report validates lazy-loading effectiveness.

**When to use `/frontend`**: Frontend-only changes, leave Sanity running, fastest isolated restart.

## Implementation Pattern

### Critical: Single Shell Execution

**KEY INSIGHT**: Background shells compete for the same port. Solution: Use single non-background shell for cleanup, then ONE background shell for server.

```bash
# Phase 1: Cleanup (synchronous, no background)
PORT=7777

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
    pkill -9 -f "next dev" 2>/dev/null || true
    pkill -9 -f "next-server" 2>/dev/null || true
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
    PORT=7777
    echo "🔍 Cleaning up port $PORT..."

    # Graceful attempt
    if ss -tulpn 2>/dev/null | grep -q ":$PORT "; then
      PID=$(lsof -t -i:$PORT 2>/dev/null)
      [ -n "$PID" ] && kill -15 $PID 2>/dev/null && sleep 2

      # Nuclear if graceful failed
      if ss -tulpn 2>/dev/null | grep -q ":$PORT "; then
        pkill -9 -f "next dev" 2>/dev/null || true
        pkill -9 -f "next-server" 2>/dev/null || true
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
  description: 'Clean up port 7777 before restart',
  run_in_background: false, // CRITICAL: Wait for cleanup
  timeout: 15000
});

// Step 2: Start server (background, only after cleanup succeeds)
Bash({
  command: `cd /home/fivefingerdisco/Projects/RBK_002 && npm run dev`,
  description: 'Start Next.js frontend on port 7777',
  run_in_background: true, // Now safe - port is verified free
  timeout: 60000
});
```

## Expected Output
```
🔍 Checking port 7777 with ss (reliable)...
📍 Port 7777 is in use
🛑 Attempting graceful shutdown...
✅ Port 7777 freed gracefully
✅ Port 7777 verified free

🚀 Starting Next.js frontend...
Frontend: http://localhost:7777
```

## 🚀 Performance Tips

### Scenario 1: Making repeated component changes
Instead of `/frontend` each time:
- Make code changes → Turbopack HMR auto-updates (~500ms)
- No restart needed unless you change routes

### Scenario 2: Need to restart but Sanity is down
Use stub mode:
```bash
NEXT_PUBLIC_DEV_STUB_DATA=true npm run dev
```
Get 60% faster cycle without API calls.

### Scenario 3: Want fastest possible startup
Use Ctrl+Shift+B in VS Code (dev:all task) for parallel servers.
Slower than `/frontend` alone, but both servers ready faster overall.

### Performance Benchmarks
| Scenario | Time | Notes |
|----------|------|-------|
| `/frontend` (cold start) | ~12-18s | Fastest isolated restart |
| `/frontend` (HMR, file change) | ~1-3s | Turbopack incremental compile |
| `npm run dev:all` (Ctrl+Shift+B) | ~10s | Both servers parallel (often faster!) |
| Stub mode + dev | 3-6s | Offline iteration, 60% faster |
| HMR auto-refresh | ~500ms | Turbopack hot reload on file save |

## Why This Works

### Key Improvements from Basic Approach
1. **`ss -tulpn` Verification**: Catches hidden processes `lsof` misses
2. **Process Name Targeting**: `pkill next-server` finds processes by name
3. **Fast Escalation**: Nuclear option after 2 seconds (don't retry forever)
4. **Explicit LISTEN Check**: Only LISTEN sockets matter, not browser connections

### What Can Go Wrong with Basic Approach
- `lsof -i :7777` shows browser connections but misses server process
- Browser tabs create ESTABLISHED connections that mask LISTEN socket
- Graceful shutdown signals sent to wrong PIDs (browser, not server)
- Result: "EADDRINUSE" error even though port appears "free"

## Use Cases
- Frontend code changes only
- Leave Sanity Studio running
- Faster than full restart
- Frontend-specific debugging

## Troubleshooting

### Port Still In Use After Restart
```bash
# Check what's actually on the port
ss -tulpn | grep 7777

# Check for hidden Next.js processes
ps aux | grep next-server

# Nuclear option if all else fails
pkill -9 node
```

### Process Won't Die
- Already handled by nuclear escalation in command
- If still fails, check for zombie processes: `ps aux | grep Z`
- Last resort: `sudo lsof -i :7777` then `sudo kill -9 <PID>`

## Performance
- Graceful shutdown: ~2 seconds
- Nuclear cleanup: ~3 seconds
- Server startup: ~1-2 seconds
- **Turbopack compilation (cold)**: ~8-12 seconds
- **Total cold start**: ~12-18 seconds
- **HMR (file change)**: ~1-3 seconds (Turbopack incremental)

**Note**: Times assume Turbopack is enabled (default in `npm run dev --turbo`). First startup may be slower due to TypeScript compilation. Subsequent HMR updates are dramatically faster due to incremental compilation.

## 💡 Choosing the Right Restart Method

| Use Case | Command | Speed | Best For |
|----------|---------|-------|----------|
| Frontend only, quick restart | `/frontend` | ~12-18s | Fastest isolated changes, Sanity already running |
| Both servers + parallel startup | Ctrl+Shift+B "dev:all" | ~10s | ⭐ Often faster - starts both simultaneously |
| Frontend offline development | `NEXT_PUBLIC_DEV_STUB_DATA=true npm run dev` | 3-6s | No API access, rapid prototyping, 60% faster |
| Full restart (sequential) | `/restart` | 20-30s | Fallback when both need fresh start |
| Only Sanity updates | `/sanity` | 5-8s | CMS changes, leave frontend running |

## Related Commands
- `/restart` (`/r`) - Restart both frontend and Sanity
- `/sanity` (`/san`) - Restart Sanity only

**Pro Tip**: For fastest dev loop, use Turbopack HMR (file saves auto-update ~500ms). Only restart when routes change.

## Documentation & References

### Optimization Guides
- **[docs/dev-optimization/FAST_DEV_LOOP.md](../../docs/dev-optimization/FAST_DEV_LOOP.md)** - Complete optimization guide
- **[docs/dev-optimization/IMPLEMENTATION_COMPLETE.md](../../docs/dev-optimization/IMPLEMENTATION_COMPLETE.md)** - Performance metrics & features
- **[.vscode/tasks.json](.../../.vscode/tasks.json)** - VS Code parallel startup tasks (for Ctrl+Shift+B)

### Technical References
- Detailed troubleshooting: `/home/fivefingerdisco/Projects/RBK_002/PROCESS/2025-10-01_22-03_localhost-troubles.md`
- Why `ss` is better than `lsof` for port verification
- Linux process management best practices
