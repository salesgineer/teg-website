# TEG Project Justfile
# Run development server

default:
    @just --list

# Start development server (runs database server + Next.js dev server)
dev:
    npm run dev

# Start only Next.js dev server (without database)
dev-next:
    npm run dev:next

# Start Spotlight debugging
dev-spotlight:
    npm run dev:spotlight

# Build for production
build:
    npm run build

# Build locally (with in-memory database)
build-local:
    npm run build-local

# Start production server
start:
    npm run start

# Run linting
lint:
    npm run lint

# Fix linting issues
lint-fix:
    npm run lint:fix

# Type checking
check-types:
    npm run check:types

# Check dependencies
check-deps:
    npm run check:deps

# Check i18n translations
check-i18n:
    npm run check:i18n

# Run tests
test:
    npm run test

# Run E2E tests
test-e2e:
    npm run test:e2e

# Database commands
db-generate:
    npm run db:generate

db-migrate:
    npm run db:migrate

db-studio:
    npm run db:studio

# Clean build artifacts
clean:
    npm run clean

# Kill any running dev servers and clean lock files
dev-cleanup:
    #!/usr/bin/env bash
    echo "Cleaning up dev server processes..."
    lsof -ti:3000,3001 2>/dev/null | xargs -r kill -9 2>/dev/null || true
    rm -f .next/dev/lock 2>/dev/null || true
    echo "Cleanup complete!"

# Build stats (bundle analyzer)
build-stats:
    npm run build-stats

# Storybook
storybook:
    npm run storybook

# Build Storybook
storybook-build:
    npm run build-storybook

