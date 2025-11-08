# TEG Website

Official website for TEG (Transporta Ekspertu Grupa) - Automotive inspection and services company in Latvia.

## Project Overview

**TEG** (Transport Experts Group) is an independent group of automotive professionals serving customers across Europe. This website provides information about our services, allows customers to book appointments, and request vehicle inspections.

**Website:** https://www.teg.lv

## Technology Stack

- **Framework:** Next.js 16+ with App Router
- **Language:** TypeScript 5.9+ (strict mode)
- **Styling:** TailwindCSS 4+
- **Internationalization:** next-intl (Latvian, English, Russian)
- **CMS:** Sanity CMS
- **Database:** Supabase (PostgreSQL)
- **Email:** SendGrid
- **Authentication:** Clerk
- **Error Monitoring:** Sentry
- **Analytics:** Google Analytics 4

## Core Services

1. **Pre-Purchase Car Inspection** (from €100)
   - Engine diagnostics, VIN history, body/paint inspection
   - Coverage: All of Europe
   - Detailed photo reports

2. **Car Search & Delivery** (from €350)
   - Vehicle sourcing, inspection, delivery
   - Documentation assistance

3. **Mobile Roadside Service** (from €30)
   - Error diagnostics, battery testing, jump starts
   - ECU programming, lock/window repair

## Getting Started

### Prerequisites

- Node.js 20+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url> teg-website
cd teg-website

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Next.js
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_read_token

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# SendGrid
SENDGRID_API_KEY=your_sendgrid_key
SENDGRID_FROM_EMAIL=noreply@teg.lv

# Sentry (optional for development)
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
SENTRY_ORGANIZATION=your_org
SENTRY_PROJECT=your_project
SENTRY_AUTH_TOKEN=your_auth_token
```

See `docs/architecture/07-environment-variables.md` for complete environment variable documentation.

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── [locale]/              # i18n routing (lv, en, ru)
│   │   ├── page.tsx           # Homepage
│   │   ├── services/          # Services pages
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   └── appointments/      # Booking system
│   └── api/                   # API routes
├── components/
│   ├── ui/                    # Reusable UI components
│   ├── forms/                 # Form components
│   └── features/              # Feature-specific components
├── lib/
│   ├── sanity/                # CMS integration
│   ├── supabase/              # Database client
│   └── validations/           # Form schemas (Zod)
└── middleware.ts              # i18n & auth
```

## Multi-Language Support

The website supports three languages:
- **Latvian (lv)** - Primary language
- **English (en)** - Secondary language
- **Russian (ru)** - Tertiary language

URL structure uses locale-based routing: `/lv/`, `/en/`, `/ru/`

## Documentation

- **Architecture:** See `docs/architecture/` for complete architecture documentation
- **Research:** See `obsidian_notes/Projects/TEG/research/` for research findings
- **Development Guidelines:** See `CLAUDE.md` for development directives

## Key Features

- Multi-language support (i18n)
- Responsive design
- SEO optimization
- Form handling with validation
- Appointment booking system
- Email notifications
- Google Calendar integration
- Error monitoring with Sentry
- Analytics integration

## Development Guidelines

- Follow TypeScript strict mode
- Use ESLint and Prettier for code formatting
- Write tests for critical functionality
- Follow accessibility best practices (WCAG 2.1 AA)
- Implement proper error handling
- Use Zod for form validation
- Follow Next.js App Router conventions

## License

Proprietary - All rights reserved by TEG (Transporta Ekspertu Grupa)

## Contact

**TEG (Transporta Ekspertu Grupa)**
- Phone: +371 25 201 710
- Hours: Mon-Sat, 9:00 AM - 8:00 PM
- Website: https://www.teg.lv
- Instagram: @teg.auto
- TikTok: @teg.auto
- Facebook: Transportaekspertugrupa
