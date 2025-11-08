# Feature Specification: Next.js 15 Project Setup with TypeScript

## Feature Description

Initial project scaffolding for the TEG automotive inspection website. This includes:
- Next.js 15.5.4+ with App Router
- React 19
- TypeScript 5.9+ (strict mode)
- TailwindCSS 3.4+
- Initial project structure setup
- Dependencies configuration
- Development environment setup

## Project Context

**Client:** TEG (Transporta Ekspertu Grupa) - Automotive inspection services in Latvia

**Current Situation:**
- Migration from deprecated Frontity framework
- Security risk from unmaintained codebase
- Complete ground-up redesign required

**Requirements:**
- Multi-language support (Latvian, English, Russian)
- Professional automotive services website
- Modern, performant, secure foundation

## Tech Stack (Validated)

### Frontend
- Next.js 15.5.4+ (App Router)
- React 19
- TypeScript 5.9+ (strict mode)
- TailwindCSS 3.4+

### Backend/Services
- CMS: Sanity
- Database/Auth: Supabase
- Email: SendGrid

### Additional Libraries
- i18n: next-intl (multi-language routing)
- Forms: react-hook-form + Zod
- Monitoring: Highlight.io
- Calendar: Google Calendar API

### Deployment
- Platform: Vercel

## Feature Importance

This is the **foundational feature** for the entire project. All subsequent features depend on this setup being completed correctly:
- Proper TypeScript configuration for type safety
- TailwindCSS setup for consistent styling
- Project structure that supports multi-language routing
- Development environment that enables efficient iteration
- Dependency configuration that supports all planned features

## Success Criteria

- Project initializes and runs without errors
- TypeScript strict mode enabled and configured
- TailwindCSS properly integrated
- Development server starts successfully
- Project structure supports planned architecture
- All core dependencies installed and configured
- Ready for next feature development (i18n setup)
