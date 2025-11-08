Directory structure:
└── ixartz-next-js-boilerplate/
    ├── README.md
    ├── checkly.config.ts
    ├── codecov.yml
    ├── commitlint.config.ts
    ├── crowdin.yml
    ├── drizzle.config.ts
    ├── eslint.config.mjs
    ├── knip.config.ts
    ├── lefthook.yml
    ├── LICENSE
    ├── next.config.ts
    ├── package.json
    ├── playwright.config.ts
    ├── postcss.config.mjs
    ├── tsconfig.json
    ├── vitest.config.mts
    ├── .coderabbit.yaml
    ├── .env.production
    ├── migrations/
    │   ├── 0000_init-db.sql
    │   └── meta/
    │       ├── 0000_snapshot.json
    │       └── _journal.json
    ├── src/
    │   ├── instrumentation-client.ts
    │   ├── instrumentation.ts
    │   ├── middleware.ts
    │   ├── app/
    │   │   ├── global-error.tsx
    │   │   ├── robots.ts
    │   │   ├── sitemap.ts
    │   │   └── [locale]/
    │   │       ├── layout.tsx
    │   │       ├── (auth)/
    │   │       │   ├── layout.tsx
    │   │       │   ├── (center)/
    │   │       │   │   ├── layout.tsx
    │   │       │   │   ├── sign-in/
    │   │       │   │   │   └── [[...sign-in]]/
    │   │       │   │   │       └── page.tsx
    │   │       │   │   └── sign-up/
    │   │       │   │       └── [[...sign-up]]/
    │   │       │   │           └── page.tsx
    │   │       │   └── dashboard/
    │   │       │       ├── layout.tsx
    │   │       │       ├── page.tsx
    │   │       │       └── user-profile/
    │   │       │           └── [[...user-profile]]/
    │   │       │               └── page.tsx
    │   │       ├── (marketing)/
    │   │       │   ├── layout.tsx
    │   │       │   ├── page.tsx
    │   │       │   ├── about/
    │   │       │   │   └── page.tsx
    │   │       │   ├── counter/
    │   │       │   │   └── page.tsx
    │   │       │   └── portfolio/
    │   │       │       ├── page.tsx
    │   │       │       └── [slug]/
    │   │       │           └── page.tsx
    │   │       └── api/
    │   │           └── counter/
    │   │               └── route.ts
    │   ├── components/
    │   │   ├── CounterForm.tsx
    │   │   ├── CurrentCount.tsx
    │   │   ├── DemoBadge.tsx
    │   │   ├── DemoBanner.tsx
    │   │   ├── Hello.tsx
    │   │   ├── LocaleSwitcher.tsx
    │   │   ├── Sponsors.tsx
    │   │   └── analytics/
    │   │       ├── PostHogPageView.tsx
    │   │       └── PostHogProvider.tsx
    │   ├── libs/
    │   │   ├── Arcjet.ts
    │   │   ├── DB.ts
    │   │   ├── Env.ts
    │   │   ├── I18n.ts
    │   │   ├── I18nNavigation.ts
    │   │   ├── I18nRouting.ts
    │   │   └── Logger.ts
    │   ├── locales/
    │   │   ├── en.json
    │   │   └── fr.json
    │   ├── models/
    │   │   └── Schema.ts
    │   ├── styles/
    │   │   └── global.css
    │   ├── templates/
    │   │   ├── BaseTemplate.stories.tsx
    │   │   ├── BaseTemplate.test.tsx
    │   │   └── BaseTemplate.tsx
    │   ├── types/
    │   │   └── I18n.ts
    │   ├── utils/
    │   │   ├── AppConfig.ts
    │   │   ├── DBConnection.ts
    │   │   ├── Helpers.test.ts
    │   │   └── Helpers.ts
    │   └── validations/
    │       └── CounterValidation.ts
    ├── tests/
    │   ├── e2e/
    │   │   ├── Counter.e2e.ts
    │   │   ├── I18n.e2e.ts
    │   │   ├── Sanity.check.e2e.ts
    │   │   └── Visual.e2e.ts
    │   └── integration/
    │       └── Counter.spec.ts
    ├── .github/
    │   ├── dependabot.yml
    │   ├── FUNDING.yml
    │   ├── actions/
    │   │   └── setup-project/
    │   │       └── action.yml
    │   └── workflows/
    │       ├── checkly.yml
    │       ├── CI.yml
    │       ├── crowdin.yml
    │       └── release.yml
    └── .storybook/
        ├── main.ts
        ├── preview.ts
        ├── vitest.config.mts
        └── vitest.setup.ts

================================================
FILE: README.md
================================================
# Boilerplate and Starter for Next.js 16+, Tailwind CSS 4, and TypeScript.

<p align="center">
  <a href="https://demo.nextjs-boilerplate.com">
    <img
      src="public/assets/images/nextjs-starter-banner.png?raw=true"
      alt="Next js starter banner"
      style="max-width: 100%; height: auto;"
    />
  </a>
</p>

🚀 Boilerplate and Starter for Next.js with App Router, Tailwind CSS, and TypeScript ⚡️ Prioritizing developer experience first: Next.js, TypeScript, ESLint, Prettier, Lefthook (replacing Husky), Lint-Staged, Vitest (replacing Jest), Testing Library, Playwright, Commitlint, VSCode, Tailwind CSS, Authentication with [Clerk](https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate), Database with DrizzleORM (PostgreSQL, SQLite, and MySQL), Local database with PGlite and production with [Prisma Postgres](https://www.prisma.io/?via=nextjs-boilerplate), Error Monitoring with [Sentry](https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo), Logging with LogTape (replacing Pino.js) and Log Management, Monitoring as Code, Storybook, Multi-language (i18n), AI-powered code reviews with CodeRabbit, Secure with [Arcjet](https://launch.arcjet.com/Q6eLbRE) (Bot detection, Rate limiting, Attack protection, etc.), and more.

Clone this project and use it to create your own Next.js project. You can check out the live demo at [Next.js Boilerplate](https://demo.nextjs-boilerplate.com), which includes a working authentication system.

## Sponsors

<table width="100%">
  <tr height="187px">
    <td align="center" width="33%">
      <a href="https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://github.com/ixartz/SaaS-Boilerplate/assets/1328388/6fb61971-3bf1-4580-98a0-10bd3f1040a2">
          <source media="(prefers-color-scheme: light)" srcset="https://github.com/ixartz/SaaS-Boilerplate/assets/1328388/f80a8bb5-66da-4772-ad36-5fabc5b02c60">
          <img alt="Clerk – Authentication & User Management for Next.js" src="https://github.com/ixartz/SaaS-Boilerplate/assets/1328388/f80a8bb5-66da-4772-ad36-5fabc5b02c60">
        </picture>
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/coderabbit-logo-dark.svg?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/coderabbit-logo-light.svg?raw=true">
          <img alt="CodeRabbit" src="public/assets/images/coderabbit-logo-light.svg?raw=true">
        </picture>
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/sentry-white.png?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/sentry-dark.png?raw=true">
          <img alt="Sentry" src="public/assets/images/sentry-dark.png?raw=true">
        </picture>
      </a>
      <a href="https://about.codecov.io/codecov-free-trial/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/codecov-white.svg?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/codecov-dark.svg?raw=true">
          <img alt="Codecov" src="public/assets/images/codecov-dark.svg?raw=true">
        </picture>
      </a>
    </td>
  </tr>
  <tr height="187px">
    <td align="center" width="33%">
      <a href="https://launch.arcjet.com/Q6eLbRE">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/arcjet-dark.svg?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/arcjet-light.svg?raw=true">
          <img alt="Arcjet" src="public/assets/images/arcjet-light.svg?raw=true">
        </picture>
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://sevalla.com/">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/sevalla-dark.png">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/sevalla-light.png">
          <img alt="Sevalla" src="public/assets/images/sevalla-light.png">
        </picture>
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://l.crowdin.com/next-js">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/crowdin-white.png?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/crowdin-dark.png?raw=true">
          <img alt="Crowdin" src="public/assets/images/crowdin-dark.png?raw=true">
        </picture>
      </a>
    </td>
  </tr>
  <tr height="187px">
    <td align="center" width="33%">
      <a href="https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/better-stack-white.png?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/better-stack-dark.png?raw=true">
          <img alt="Better Stack" src="public/assets/images/better-stack-dark.png?raw=true">
        </picture>
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://posthog.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://posthog.com/brand/posthog-logo-white.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://posthog.com/brand/posthog-logo.svg">
          <img alt="PostHog" src="https://posthog.com/brand/posthog-logo.svg">
        </picture>
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://www.checklyhq.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/checkly-logo-dark.png?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/checkly-logo-light.png?raw=true">
          <img alt="Checkly" src="public/assets/images/checkly-logo-light.png?raw=true">
        </picture>
      </a>
    </td>
  </tr>
  <tr height="187px">
    <td align="center" style=width="33%">
      <a href="https://nextjs-boilerplate.com/pro-saas-starter-kit">
        <img src="public/assets/images/nextjs-boilerplate-saas.png?raw=true" alt="Next.js SaaS Boilerplate with React" />
      </a>
    </td>
    <td align="center" width="33%">
      <a href="mailto:contact@creativedesignsguru.com">
        Add your logo here
      </a>
    </td>
  </tr>
</table>

### Demo

**Live demo: [Next.js Boilerplate](https://demo.nextjs-boilerplate.com)**

| Sign Up | Sign In |
| --- | --- |
| [![Next.js Boilerplate SaaS Sign Up](public/assets/images/nextjs-boilerplate-sign-in.png)](https://demo.nextjs-boilerplate.com/sign-up) | [![Next.js Boilerplate SaaS Sign In](public/assets/images/nextjs-boilerplate-sign-in.png)](https://demo.nextjs-boilerplate.com/sign-in) |

### Features

Developer experience first, extremely flexible code structure and only keep what you need:

- ⚡ [Next.js](https://nextjs.org) with App Router support
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- ✅ Strict Mode for TypeScript and React 19
- 🔒 Authentication with [Clerk](https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate): Sign up, Sign in, Sign out, Forgot password, Reset password, and more.
- 👤 Passwordless Authentication with Magic Links, Multi-Factor Auth (MFA), Social Auth (Google, Facebook, Twitter, GitHub, Apple, and more), Passwordless login with Passkeys, User Impersonation
- 📦 Type-safe ORM with DrizzleORM, compatible with PostgreSQL, SQLite, and MySQL
- 💽 Offline and local development database with PGlite
- ☁️ Remote and production database with [Prisma Postgres](https://www.prisma.io/?via=nextjs-boilerplate)
- 🌐 Multi-language (i18n) with next-intl and [Crowdin](https://l.crowdin.com/next-js)
- ♻️ Type-safe environment variables with T3 Env
- ⌨️ Form handling with React Hook Form
- 🔴 Validation library with Zod
- 📏 Linter with [ESLint](https://eslint.org) (default Next.js, Next.js Core Web Vitals, Tailwind CSS and Antfu configuration)
- 💖 Code Formatter with Prettier
- 🦊 Husky for Git Hooks (replaced by Lefthook)
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint
- 📓 Write standard compliant commit messages with Commitizen
- 🔍 Unused files and dependencies detection with Knip
- 🌍 I18n validation and missing translation detection with i18n-check
- 🦺 Unit Testing with Vitest and Browser mode (replacing React Testing Library)
- 🧪 Integration and E2E Testing with Playwright
- 👷 Run tests on pull request with GitHub Actions
- 🎉 Storybook for UI development
- 🐰 AI-powered code reviews with [CodeRabbit](https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025)
- 🚨 Error Monitoring with [Sentry](https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo)
- 🔍 Local development error monitoring with Sentry Spotlight
- ☂️ Code coverage with [Codecov](https://about.codecov.io/codecov-free-trial/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo)
- 📝 Logging with LogTape and Log Management with [Better Stack](https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate)
- 🖥️ Monitoring as Code with [Checkly](https://www.checklyhq.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate)
- 🔐 Security and bot protection ([Arcjet](https://launch.arcjet.com/Q6eLbRE))
- 📊 Analytics with PostHog
- 🎁 Automatic changelog generation with Semantic Release
- 🔍 Visual regression testing
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Debug, Settings, Tasks and Extensions
- 🤖 SEO metadata, JSON-LD and Open Graph tags
- 🗺️ Sitemap.xml and robots.txt
- 👷 Automatic dependency updates with Dependabot
- ⌘ Database exploration with Drizzle Studio and CLI migration tool with Drizzle Kit
- ⚙️ Bundler Analyzer
- 🌈 Include a FREE minimalist theme
- 💯 Maximize lighthouse score

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

Optional features (easy to add):

- 🔑 Multi-tenancy, Role-based access control (RBAC)
- 🔐 OAuth for Single Sign-On (SSO), Enterprise SSO, SAML, OpenID Connect (OIDC), EASIE
- 🔗 Web 3 (Base, MetaMask, Coinbase Wallet, OKX Wallet)

### Philosophy

- Nothing is hidden from you, allowing you to make any necessary adjustments to suit your requirements and preferences.
- Dependencies are regularly updated on a monthly basis
- Start for free without upfront costs
- Easy to customize
- Minimal code
- Unstyled template
- SEO-friendly
- 🚀 Production-ready

### Requirements

- Node.js 22+ and npm

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/ixartz/Next-js-Boilerplate.git my-project-name
cd my-project-name
npm install
```

For your information, all dependencies are updated every month.

Then, you can run the project locally in development mode with live reload by executing:

```shell
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project. For your information, the project is already pre-configured with a local database using PGlite. No extra setup is required to run the project locally.

Need advanced features? Multi-tenancy & Teams, Roles & Permissions, Shadcn UI, End-to-End Typesafety with oRPC, Stripe Payment, Light / Dark mode. Try [Next.js Boilerplate Pro](https://nextjs-boilerplate.com/pro-saas-starter-kit).

### Set up authentication

To get started, you will need to create a Clerk account at [Clerk.com](https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate) and create a new application in the Clerk Dashboard. Once you have done that, copy the `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` values and add them to the `.env.local` file (not tracked by Git):

```shell
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

Now you have a fully functional authentication system with Next.js, including features such as sign up, sign in, sign out, forgot password, reset password, update profile, update password, update email, delete account, and more.

### Set up remote database

The project uses DrizzleORM, a type-safe ORM that is compatible with PostgreSQL, SQLite, and MySQL databases. By default, the project is configured to seamlessly work with PostgreSQL, and you have the flexibility to choose any PostgreSQL database provider of your choice.

To set up a remote and production database, you need to create a PostgreSQL database and obtain the connection string. One recommended option is to use [Prisma PostgreSQL](https://www.prisma.io/?via=nextjs-boilerplate), which provides a free PostgreSQL database. This database is compatible and has been tested with Next.js Boilerplate.

After creating your Prisma account, you can get the connection string in the `Connect to your database` section and select the `Any client` tab. Then, you can generate the connection string by clicking the `Generate database credentials` button. Finally, you can copy the connection string and add the `DATABASE_URL` variable to the `.env.local` file.

### Translation (i18n) setup

For translation, the project uses `next-intl` combined with [Crowdin](https://l.crowdin.com/next-js). As a developer, you only need to take care of the English (or another default language) version. Translations for other languages are automatically generated and handled by Crowdin. You can use Crowdin to collaborate with your translation team or translate the messages yourself with the help of machine translation.

To set up translation (i18n), create an account at [Crowdin.com](https://l.crowdin.com/next-js) and create a new project. In the newly created project, you will be able to find the project ID. You will also need to create a new Personal Access Token by going to Account Settings > API. Then, in your GitHub Actions, you need to define the following environment variables: `CROWDIN_PROJECT_ID` and `CROWDIN_PERSONAL_TOKEN`.

After defining the environment variables in your GitHub Actions, your localization files will be synchronized with Crowdin every time you push a new commit to the `main` branch.

### Project structure

```shell
.
├── README.md                       # README file
├── .github                         # GitHub folder
│   ├── actions                     # Reusable actions
│   └── workflows                   # GitHub Actions workflows
├── .storybook                      # Storybook folder
├── .vscode                         # VSCode configuration
├── migrations                      # Database migrations
├── public                          # Public assets folder
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── components                  # React components
│   ├── libs                        # 3rd party libraries configuration
│   ├── locales                     # Locales folder (i18n messages)
│   ├── models                      # Database models
│   ├── styles                      # Styles folder
│   ├── templates                   # Templates folder
│   ├── types                       # Type definitions
│   ├── utils                       # Utilities folder
│   └── validations                 # Validation schemas
├── tests
│   ├── e2e                         # E2E tests, also includes Monitoring as Code
│   └── integration                 # Integration tests
├── next.config.ts                  # Next JS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Customization

You can easily configure Next js Boilerplate by searching the entire project for `FIXME:` to make quick customizations. Here are some of the most important files to customize:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon
- `src/utils/AppConfig.ts`: configuration file
- `src/templates/BaseTemplate.tsx`: default theme
- `next.config.ts`: Next.js configuration
- `.env`: default environment variables

You have full access to the source code for further customization. The provided code is just an example to help you start your project. The sky's the limit 🚀.

### Change database schema

To modify the database schema in the project, you can update the schema file located at `./src/models/Schema.ts`. This file defines the structure of your database tables using the Drizzle ORM library.

After making changes to the schema, generate a migration by running the following command:

```shell
npm run db:generate
```

This will create a migration file that reflects your schema changes.

After making sure your database is running, you can apply the generated migration using:

```shell
npm run db:migrate
```

There is no need to restart the Next.js server for the changes to take effect.

### Commit Message Format

The project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification, meaning all commit messages must be formatted accordingly. To help you write commit messages, the project provides an interactive CLI that guides you through the commit process. To use it, run the following command:

```shell
npm run commit
```

One of the benefits of using Conventional Commits is the ability to automatically generate GitHub releases. It also allows us to automatically determine the next version number based on the types of commits that are included in a release.

### CodeRabbit AI Code Reviews

The project uses [CodeRabbit](https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025), an AI-powered code reviewer. CodeRabbit monitors your repository and automatically provides intelligent code reviews on all new pull requests using its powerful AI engine.

Setting up CodeRabbit is simple, visit [coderabbit.ai](https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025), sign in with your GitHub account, and add your repository from the dashboard. That's it!

### Testing

All unit tests are located alongside the source code in the same directory, making them easier to find. The unit test files follow this format: `*.test.ts` or `*.test.tsx`. The project uses Vitest and React Testing Library for unit testing. You can run the tests with the following command:

```shell
npm run test
```

### Integration & E2E Testing

The project uses Playwright for integration and end-to-end (E2E) testing. Integration test files use the `*.spec.ts` extension, while E2E test files use the `*.e2e.ts` extension. You can run the tests with the following commands:

```shell
npx playwright install # Only for the first time in a new environment
npm run test:e2e
```

### Storybook

Storybook is configured for UI component development and testing. The project uses Storybook with Next.js and Vite integration, including accessibility testing and documentation features.

Stories are located alongside your components in the `src` directory and follow the pattern `*.stories.ts` or `*.stories.tsx`.

You can run Storybook in development mode with:

```shell
npm run storybook
```

This will start Storybook on http://localhost:6006 where you can view and interact with your UI components in isolation.

To run Storybook tests in headless mode, you can use the following command:

```shell
npm run storybook:test
```

### Local Production Build

Generate an optimized production build locally using a temporary in-memory Postgres database:

```shell
npm run build-local
```

This command:

- Starts a temporary in-memory Database server
- Runs database migrations with Drizzle Kit
- Builds the Next.js app for production
- Shuts down the temporary DB when the build finishes

Notes:

- By default, it uses a local database, but you can also use `npm run build` with a remote database.
- This only creates the build, it doesn't start the server. To run the build locally, use `npm run start`.

### Deploy to production

During the build process, database migrations are automatically executed, so there's no need to run them manually. However, you must define `DATABASE_URL` in your environment variables.

Then, you can generate a production build with:

```shell
$ npm run build
```

It generates an optimized production build of the boilerplate. To test the generated build, run:

```shell
$ npm run start
```

You also need to defined the environment variables `CLERK_SECRET_KEY` using your own key.

This command starts a local server using the production build. You can now open http://localhost:3000 in your preferred browser to see the result.

### Deploy to Sevalla

You can deploy a Next.js application along with its database on a single platform. First, create an account on [Sevalla](https://sevalla.com).

After registration, you will be redirected to the dashboard. From there, navigate to `Database > Create a database`. Select PostgreSQL and and use the default settings for a quick setup. For advanced users, you can customize the database location and resource size. Finally, click on `Create` to complete the process.

Once the database is created and ready, return to the dashboard and click `Application > Create an App`. After connecting your GitHub account, select the repository you want to deploy. Keep the default settings for the remaining options, then click `Create`.

Next, connect your database to your application by going to `Networking > Connected services > Add connection` and select the database you just created. You also need to enable the `Add environment variables to the application` option, and rename `DB_URL` to `DATABASE_URL`. Then, click `Add connection`.

Go to `Environment variables > Add environment variable`, and define the environment variables `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` from your Clerk account. Click `Save`.

Finally, initiate a new deployment by clicking `Overview > Latest deployments > Deploy now`. If everything is set up correctly, your application will be deployed successfully with a working database.

### Error Monitoring

The project uses [Sentry](https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo) to monitor errors. In the development environment, no additional setup is needed: SaaS Boilerplate is pre-configured to use Sentry and Spotlight (Sentry for Development). All errors will automatically be sent to your local Spotlight instance, allowing you to experience Sentry locally.

For production environment, you'll need to create a Sentry account and a new project. Then, in `.env.production`, you need to update the following environment variables:

```shell
NEXT_PUBLIC_SENTRY_DSN=
SENTRY_ORGANIZATION=
SENTRY_PROJECT=
```

You also need to create a environment variable `SENTRY_AUTH_TOKEN` in your hosting provider's dashboard.

### Code coverage

Next.js Boilerplate relies on [Codecov](https://about.codecov.io/codecov-free-trial/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo) for code coverage reporting solution. To enable Codecov, create a Codecov account and connect it to your GitHub account. Your repositories should appear on your Codecov dashboard. Select the desired repository and copy the token. In GitHub Actions, define the `CODECOV_TOKEN` environment variable and paste the token.

Make sure to create `CODECOV_TOKEN` as a GitHub Actions secret, do not paste it directly into your source code.

### Logging

The project uses LogTape for logging. In the development environment, logs are displayed in the console by default.

For production, the project is already integrated with [Better Stack](https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate) to manage and query your logs using SQL. To use Better Stack, you need to create a [Better Stack](https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate) account and create a new source: go to your Better Stack Logs Dashboard > Sources > Connect source. Then, you need to give a name to your source and select Node.js as the platform.

After creating the source, you will be able to view and copy your source token. In your environment variables, paste the token into the `NEXT_PUBLIC_BETTER_STACK_SOURCE_TOKEN` variable. You'll also need to define the `NEXT_PUBLIC_BETTER_STACK_INGESTING_HOST` variable, which can be found in the same place as the source token.

Now, all logs will automatically be sent to and ingested by Better Stack.

### Checkly monitoring

The project uses [Checkly](https://www.checklyhq.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate) to ensure that your production environment is always up and running. At regular intervals, Checkly runs the tests ending with `*.check.e2e.ts` extension and notifies you if any of the tests fail. Additionally, you have the flexibility to execute tests from multiple locations to ensure that your application is available worldwide.

To use Checkly, you must first create an account on [their website](https://www.checklyhq.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate). After creating an account, generate a new API key in the Checkly Dashboard and set the `CHECKLY_API_KEY` environment variable in GitHub Actions. Additionally, you will need to define the `CHECKLY_ACCOUNT_ID`, which can also be found in your Checkly Dashboard under User Settings > General.

To complete the setup, update the `checkly.config.ts` file with your own email address and production URL.

### Arcjet security and bot protection

The project uses [Arcjet](https://launch.arcjet.com/Q6eLbRE), a security as code product that includes several features that can be used individually or combined to provide defense in depth for your site.

To set up Arcjet, [create a free account](https://launch.arcjet.com/Q6eLbRE) and get your API key. Then add it to the `ARCJET_KEY` environment variable.

Arcjet is configured with two main features: bot detection and the Arcjet Shield WAF:

- [Bot detection](https://docs.arcjet.com/bot-protection/concepts) is configured to allow search engines, preview link generators e.g. Slack and Twitter previews, and to allow common uptime monitoring services. All other bots, such as scrapers and AI crawlers, will be blocked. You can [configure additional bot types](https://docs.arcjet.com/bot-protection/identifying-bots) to allow or block.
- [Arcjet Shield WAF](https://docs.arcjet.com/shield/concepts) will detect and block common attacks such as SQL injection, cross-site scripting, and other OWASP Top 10 vulnerabilities.

Arcjet is configured with a central client at `src/libs/Arcjet.ts` that includes the Shield WAF rules. Additional rules are applied when Arcjet is called in `middleware.ts`.

### Useful commands

### Code Quality and Validation

The project includes several commands to ensure code quality and consistency. You can run:

- `npm run lint` to check for linting errors
- `npm run lint:fix` to automatically fix fixable issues from the linter
- `npm run check:types` to verify type safety across the entire project
- `npm run check:deps` help identify unused dependencies and files
- `npm run check:i18n` ensures all translations are complete and properly formatted

#### Bundle Analyzer

Next.js Boilerplate includes a built-in bundle analyzer. It can be used to analyze the size of your JavaScript bundles. To begin, run the following command:

```shell
npm run build-stats
```

By running the command, it'll automatically open a new browser window with the results.

#### Database Studio

The project is already configured with Drizzle Studio to explore the database. You can run the following command to open the database studio:

```shell
npm run db:studio
```

Then, you can open https://local.drizzle.studio with your favorite browser to explore your database.

### VSCode information (optional)

If you are VSCode user, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed in your VSCode, ESLint and Prettier can automatically fix the code and display errors. The same applies to testing: you can install the VSCode Vitest extension to automatically run your tests, and it also shows the code coverage in context.

Pro tips: if you need a project wide-type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have any questions or find a bug. Totally open to suggestions and improvements.

### License

Licensed under the MIT License, Copyright © 2025

See [LICENSE](LICENSE) for more information.

## Sponsors

<table width="100%">
  <tr height="187px">
    <td align="center" width="33%">
      <a href="https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://github.com/ixartz/SaaS-Boilerplate/assets/1328388/6fb61971-3bf1-4580-98a0-10bd3f1040a2">
          <source media="(prefers-color-scheme: light)" srcset="https://github.com/ixartz/SaaS-Boilerplate/assets/1328388/f80a8bb5-66da-4772-ad36-5fabc5b02c60">
          <img alt="Clerk – Authentication & User Management for Next.js" src="https://github.com/ixartz/SaaS-Boilerplate/assets/1328388/f80a8bb5-66da-4772-ad36-5fabc5b02c60">
        </picture>
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/coderabbit-logo-dark.svg?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/coderabbit-logo-light.svg?raw=true">
          <img alt="CodeRabbit" src="public/assets/images/coderabbit-logo-light.svg?raw=true">
        </picture>
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/sentry-white.png?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/sentry-dark.png?raw=true">
          <img alt="Sentry" src="public/assets/images/sentry-dark.png?raw=true">
        </picture>
      </a>
      <a href="https://about.codecov.io/codecov-free-trial/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/codecov-white.svg?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/codecov-dark.svg?raw=true">
          <img alt="Codecov" src="public/assets/images/codecov-dark.svg?raw=true">
        </picture>
      </a>
    </td>
  </tr>
  <tr height="187px">
    <td align="center" width="33%">
      <a href="https://launch.arcjet.com/Q6eLbRE">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/arcjet-dark.svg?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/arcjet-light.svg?raw=true">
          <img alt="Arcjet" src="public/assets/images/arcjet-light.svg?raw=true">
        </picture>
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://sevalla.com/">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/sevalla-dark.png">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/sevalla-light.png">
          <img alt="Sevalla" src="public/assets/images/sevalla-light.png">
        </picture>
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://l.crowdin.com/next-js">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/crowdin-white.png?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/crowdin-dark.png?raw=true">
          <img alt="Crowdin" src="public/assets/images/crowdin-dark.png?raw=true">
        </picture>
      </a>
    </td>
  </tr>
  <tr height="187px">
    <td align="center" width="33%">
      <a href="https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/better-stack-white.png?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/better-stack-dark.png?raw=true">
          <img alt="Better Stack" src="public/assets/images/better-stack-dark.png?raw=true">
        </picture>
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://posthog.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://posthog.com/brand/posthog-logo-white.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://posthog.com/brand/posthog-logo.svg">
          <img alt="PostHog" src="https://posthog.com/brand/posthog-logo.svg">
        </picture>
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://www.checklyhq.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/checkly-logo-dark.png?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/checkly-logo-light.png?raw=true">
          <img alt="Checkly" src="public/assets/images/checkly-logo-light.png?raw=true">
        </picture>
      </a>
    </td>
  </tr>
  <tr height="187px">
    <td align="center" style=width="33%">
      <a href="https://nextjs-boilerplate.com/pro-saas-starter-kit">
        <img src="public/assets/images/nextjs-boilerplate-saas.png?raw=true" alt="Next.js SaaS Boilerplate with React" />
      </a>
    </td>
    <td align="center" width="33%">
      <a href="mailto:contact@creativedesignsguru.com">
        Add your logo here
      </a>
    </td>
  </tr>
</table>

---

Made with ♥ by [CreativeDesignsGuru](https://creativedesignsguru.com) [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40Ixartz)](https://twitter.com/ixartz)

Looking for a custom boilerplate to kick off your project? I'd be glad to discuss how I can help you build one. Feel free to reach out anytime at contact@creativedesignsguru.com!

[![Sponsor Next JS Boilerplate](https://cdn.buymeacoffee.com/buttons/default-red.png)](https://github.com/sponsors/ixartz)

================================================
FILE: checkly.config.ts
================================================
import { defineConfig } from 'checkly';
import { EmailAlertChannel, Frequency } from 'checkly/constructs';

const sendDefaults = {
  sendFailure: true,
  sendRecovery: true,
  sendDegraded: true,
};

const emailChannel = new EmailAlertChannel('email-channel-1', {
  address: process.env.CHECKLY_EMAIL_ADDRESS ?? '',
  ...sendDefaults,
});

export const config = defineConfig({
  projectName: process.env.CHECKLY_PROJECT_NAME ?? '',
  logicalId: process.env.CHECKLY_LOGICAL_ID ?? '',
  repoUrl: 'https://github.com/ixartz/Next-js-Boilerplate',
  checks: {
    locations: ['us-east-1', 'eu-west-1'],
    tags: ['website'],
    runtimeId: '2024.02',
    browserChecks: {
      frequency: Frequency.EVERY_24H,
      testMatch: '**/tests/e2e/**/*.check.e2e.ts',
      alertChannels: [emailChannel],
    },
    playwrightConfig: {
      use: {
        baseURL: process.env.ENVIRONMENT_URL || process.env.NEXT_PUBLIC_APP_URL,
        extraHTTPHeaders: {
          'x-vercel-protection-bypass': process.env.VERCEL_BYPASS_TOKEN,
        },
      },
    },
  },
  cli: {
    runLocation: 'us-east-1',
    reporters: ['list'],
  },
});

export default config;

================================================
FILE: codecov.yml
================================================
coverage:
  status:
    patch: off

================================================
FILE: commitlint.config.ts
================================================
import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  ignores: [message => message.startsWith('chore: bump')], // Ignore dependabot commits
};

export default Configuration;

================================================
FILE: crowdin.yml
================================================
#
# Your Crowdin credentials
#
# No need modify CROWDIN_PROJECT_ID and CROWDIN_PERSONAL_TOKEN, you can set them in GitHub Actions secrets
project_id_env: CROWDIN_PROJECT_ID
api_token_env: CROWDIN_PERSONAL_TOKEN
base_path: .
base_url: 'https://api.crowdin.com' # https://{organization-name}.crowdin.com for Crowdin Enterprise

#
# Choose file structure in Crowdin
# e.g. true or false
#
preserve_hierarchy: true

#
# Files configuration
#
files:
  - source: /src/locales/en.json

    #
    # Where translations will be placed
    # e.g. "/resources/%two_letters_code%/%original_file_name%"
    #
    translation: '/src/locales/%two_letters_code%.json'

    #
    # File type
    # e.g. "json"
    #
    type: json

================================================
FILE: drizzle.config.ts
================================================
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './migrations',
  schema: './src/models/Schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL ?? '',
  },
  verbose: true,
  strict: true,
});

================================================
FILE: eslint.config.mjs
================================================
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import antfu from '@antfu/eslint-config';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import playwright from 'eslint-plugin-playwright';
import storybook from 'eslint-plugin-storybook';
import tailwind from 'eslint-plugin-tailwindcss';

export default antfu(
  {
    react: true,
    nextjs: true,
    typescript: true,

    // Configuration preferences
    lessOpinionated: true,
    isInEditor: false,

    // Code style
    stylistic: {
      semi: true,
    },

    // Format settings
    formatters: {
      css: true,
    },

    // Ignored paths
    ignores: [
      'migrations/**/*',
    ],
  },
  // --- Accessibility Rules ---
  jsxA11y.flatConfigs.recommended,
  // --- Tailwind CSS Rules ---
  ...tailwind.configs['flat/recommended'],
  {
    settings: {
      tailwindcss: {
        config: `${dirname(fileURLToPath(import.meta.url))}/src/styles/global.css`,
      },
    },
  },
  // --- E2E Testing Rules ---
  {
    files: [
      '**/*.spec.ts',
      '**/*.e2e.ts',
    ],
    ...playwright.configs['flat/recommended'],
  },
  // --- Storybook Rules ---
  ...storybook.configs['flat/recommended'],
  // --- Custom Rule Overrides ---
  {
    rules: {
      'antfu/no-top-level-await': 'off', // Allow top-level await
      'style/brace-style': ['error', '1tbs'], // Use the default brace style
      'ts/consistent-type-definitions': ['error', 'type'], // Use `type` instead of `interface`
      'react/prefer-destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
      'node/prefer-global/process': 'off', // Allow using `process.env`
      'test/padding-around-all': 'error', // Add padding in test files
      'test/prefer-lowercase-title': 'off', // Allow using uppercase titles in test titles
    },
  },
);

================================================
FILE: knip.config.ts
================================================
import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  // Files to exclude from Knip analysis
  ignore: [
    'checkly.config.ts',
    'src/libs/I18n.ts',
    'src/types/I18n.ts',
    'src/utils/Helpers.ts',
    'tests/**/*.ts',
  ],
  // Dependencies to ignore during analysis
  ignoreDependencies: [
    '@commitlint/types',
    '@clerk/types',
    'conventional-changelog-conventionalcommits',
    'vite',
  ],
  // Binaries to ignore during analysis
  ignoreBinaries: [
    'production', // False positive raised with dotenv-cli
  ],
  compilers: {
    css: (text: string) => [...text.matchAll(/(?<=@)import[^;]+/g)].join('\n'),
  },
};

export default config;

================================================
FILE: lefthook.yml
================================================
# Validate commit messages
commit-msg:
  commands:
    commitlint:
      run: npx --no -- commitlint --edit {1}

# Validate content before committing
pre-commit:
  commands:
    lint:
      glob: '*'
      run: npx --no -- eslint --fix --no-warn-ignored {staged_files}
      stage_fixed: true
      priority: 1
    check-types:
      glob: '*.{ts,tsx}'
      run: npm run check:types
      priority: 2

================================================
FILE: LICENSE
================================================
MIT License

Copyright (c) 2025 Remi W.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

================================================
FILE: next.config.ts
================================================
import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';
import { withSentryConfig } from '@sentry/nextjs';
import createNextIntlPlugin from 'next-intl/plugin';
import './src/libs/Env';

// Define the base Next.js configuration
const baseConfig: NextConfig = {
  devIndicators: {
    position: 'bottom-right',
  },
  poweredByHeader: false,
  reactStrictMode: true,
  reactCompiler: true,
  outputFileTracingIncludes: {
    '/': ['./migrations/**/*'],
  },
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
};

// Initialize the Next-Intl plugin
let configWithPlugins = createNextIntlPlugin('./src/libs/I18n.ts')(baseConfig);

// Conditionally enable bundle analysis
if (process.env.ANALYZE === 'true') {
  configWithPlugins = withBundleAnalyzer()(configWithPlugins);
}

// Conditionally enable Sentry configuration
if (!process.env.NEXT_PUBLIC_SENTRY_DISABLED) {
  configWithPlugins = withSentryConfig(configWithPlugins, {
    // For all available options, see:
    // https://www.npmjs.com/package/@sentry/webpack-plugin#options
    org: process.env.SENTRY_ORGANIZATION,
    project: process.env.SENTRY_PROJECT,

    // Only print logs for uploading source maps in CI
    silent: !process.env.CI,

    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    reactComponentAnnotation: {
      enabled: true,
    },

    // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
    // This can increase your server load as well as your hosting bill.
    // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
    // side errors will fail.
    tunnelRoute: '/monitoring',

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Disable Sentry telemetry
    telemetry: false,
  });
}

const nextConfig = configWithPlugins;
export default nextConfig;

================================================
FILE: package.json
================================================
{
  "name": "next-js-boilerplate",
  "author": "Ixartz (https://github.com/ixartz)",
  "engines": {
    "node": ">=20"
  },
  "scripts": {
    "dev:spotlight": "npx @spotlightjs/spotlight",
    "dev:next": "next dev",
    "dev": "run-p db-server:file dev:*",
    "build:next": "next build --webpack",
    "build-local": "run-p db-server:memory build:next --race",
    "build": "run-s db:migrate build:next",
    "start": "next start",
    "build-stats": "cross-env ANALYZE=true npm run build",
    "clean": "rimraf .next out coverage",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "check:types": "tsc --noEmit --pretty",
    "check:deps": "knip",
    "check:i18n": "i18n-check -l src/locales -s en -u src -f next-intl",
    "commit": "commit",
    "test": "vitest run",
    "test:e2e": "playwright test",
    "db-server:file": "pglite-server --db=local.db --run 'npm run db:migrate'",
    "db-server:memory": "pglite-server --run 'npm run db:migrate'",
    "db:generate": "drizzle-kit generate",
    "db:migrate": "drizzle-kit migrate",
    "db:studio": "drizzle-kit studio",
    "storybook": "storybook dev -p 6006",
    "storybook:test": "vitest run --config .storybook/vitest.config.mts",
    "build-storybook": "storybook build"
  },
  "dependencies": {
    "@arcjet/next": "^1.0.0-beta.13",
    "@clerk/localizations": "^3.26.4",
    "@clerk/nextjs": "^6.34.1",
    "@hookform/resolvers": "^5.2.2",
    "@logtape/logtape": "^1.1.2",
    "@sentry/nextjs": "^10.22.0",
    "@t3-oss/env-nextjs": "^0.13.8",
    "drizzle-orm": "^0.44.7",
    "next": "^16.0.1",
    "next-intl": "^4.4.0",
    "pg": "^8.16.3",
    "posthog-js": "^1.284.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-hook-form": "^7.66.0",
    "zod": "^4.1.12"
  },
  "devDependencies": {
    "@antfu/eslint-config": "^6.2.0",
    "@chromatic-com/playwright": "^0.12.7",
    "@commitlint/cli": "^20.1.0",
    "@commitlint/config-conventional": "^20.0.0",
    "@commitlint/prompt-cli": "^20.1.0",
    "@electric-sql/pglite-socket": "^0.0.16",
    "@eslint-react/eslint-plugin": "^2.3.0",
    "@faker-js/faker": "^10.1.0",
    "@lingual/i18n-check": "^0.8.12",
    "@next/bundle-analyzer": "^16.0.1",
    "@next/eslint-plugin-next": "^16.0.1",
    "@playwright/test": "^1.56.1",
    "@spotlightjs/spotlight": "^4.4.0",
    "@storybook/addon-a11y": "^10.0.2",
    "@storybook/addon-docs": "^10.0.2",
    "@storybook/addon-vitest": "^10.0.2",
    "@storybook/nextjs-vite": "^10.0.2",
    "@tailwindcss/postcss": "^4.1.16",
    "@types/node": "^24.9.2",
    "@types/pg": "^8.15.6",
    "@types/react": "^19.2.2",
    "@vitejs/plugin-react": "^5.1.0",
    "@vitest/browser": "^4.0.6",
    "@vitest/browser-playwright": "^4.0.6",
    "@vitest/coverage-v8": "^4.0.6",
    "babel-plugin-react-compiler": "^1.0.0",
    "checkly": "^6.8.2",
    "conventional-changelog-conventionalcommits": "^9.1.0",
    "cross-env": "^10.1.0",
    "dotenv-cli": "^10.0.0",
    "drizzle-kit": "^0.31.6",
    "eslint": "^9.39.0",
    "eslint-plugin-format": "^1.0.2",
    "eslint-plugin-jsx-a11y": "^6.10.2",
    "eslint-plugin-playwright": "^2.3.0",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "eslint-plugin-storybook": "^10.0.2",
    "eslint-plugin-tailwindcss": "^4.0.0-beta.0",
    "knip": "^5.66.4",
    "lefthook": "^2.0.2",
    "npm-run-all": "^4.1.5",
    "postcss": "^8.5.6",
    "postcss-load-config": "^6.0.1",
    "rimraf": "^6.1.0",
    "semantic-release": "^25.0.1",
    "storybook": "^10.0.0",
    "tailwindcss": "^4.1.16",
    "typescript": "^5.9.3",
    "vite-tsconfig-paths": "^5.1.4",
    "vitest": "^4.0.4",
    "vitest-browser-react": "^2.0.2"
  },
  "release": {
    "branches": [
      "main"
    ],
    "plugins": [
      [
        "@semantic-release/commit-analyzer",
        {
          "preset": "conventionalcommits"
        }
      ],
      "@semantic-release/release-notes-generator",
      "@semantic-release/github"
    ]
  }
}

================================================
FILE: playwright.config.ts
================================================
import type { ChromaticConfig } from '@chromatic-com/playwright';
import { defineConfig, devices } from '@playwright/test';

// Use process.env.PORT by default and fallback to port 3000
const PORT = process.env.PORT || 3000;

// Set webServer.url and use.baseURL with the location of the WebServer respecting the correct set port
const baseURL = `http://localhost:${PORT}`;

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig<ChromaticConfig>({
  testDir: './tests',
  // Look for files with the .spec.js or .e2e.js extension
  testMatch: '*.@(spec|e2e).?(c|m)[jt]s?(x)',
  // Timeout per test, test running locally are slower due to database connections with PGLite
  timeout: process.env.CI ? 30 * 1000 : 60 * 1000,
  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,
  // Reporter to use. See https://playwright.dev/docs/test-reporters
  reporter: process.env.CI ? 'github' : 'list',

  expect: {
    // Set timeout for async expect matchers
    timeout: 20 * 1000,
  },

  // Run your local dev server before starting the tests:
  // https://playwright.dev/docs/test-advanced#launching-a-development-web-server-during-the-tests
  webServer: {
    command: process.env.CI ? 'npx run-p db-server:memory start' : 'npx run-p db-server:memory dev:next',
    url: baseURL,
    timeout: 2 * 60 * 1000,
    reuseExistingServer: !process.env.CI,
    env: {
      NEXT_PUBLIC_SENTRY_DISABLED: 'true',
    },
  },

  // Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions.
  use: {
    // Use baseURL so to make navigations relative.
    // More information: https://playwright.dev/docs/api/class-testoptions#test-options-base-url
    baseURL,

    // Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer
    trace: process.env.CI ? 'on' : 'retain-on-failure',

    // Record videos when retrying the failed test.
    video: process.env.CI ? 'retain-on-failure' : undefined,

    // Disable automatic screenshots at test completion when using Chromatic test fixture.
    disableAutoSnapshot: true,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    ...(process.env.CI
      ? [
          {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
          },
        ]
      : []),
  ],
});

================================================
FILE: postcss.config.mjs
================================================
/**
 * PostCSS Configuration
 * @type {import('postcss-load-config').Config}
 *
 * This file configures the PostCSS processor which transforms CSS with JavaScript plugins.
 * It's used in the build process to process CSS files before they're served to the browser.
 */
const config = {
  plugins: {
    // Add Tailwind CSS support
    '@tailwindcss/postcss': {},
  },
};

export default config;

================================================
FILE: tsconfig.json
================================================
/* eslint-disable jsonc/sort-keys */
{
  "compilerOptions": {
    // ======================================================================
    // Language & Environment
    // Defines JavaScript version and runtime environment
    // ======================================================================
    "target": "ES2017",
    "module": "esnext",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "moduleResolution": "bundler",
    "isolatedModules": true,
    // ======================================================================
    // Type Safety - Foundation
    // Core type checking settings for a robust codebase
    // ======================================================================
    "strict": true,
    "alwaysStrict": true,
    "strictNullChecks": true,
    "noImplicitAny": true,
    "noImplicitThis": true,
    // ======================================================================
    // Type Safety - Advanced
    // Additional checks for higher code quality
    // ======================================================================
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "allowUnreachableCode": false,
    "useUnknownInCatchVariables": true,
    "noImplicitOverride": true,
    // ======================================================================
    // Interoperability
    // Settings for working with different file types and modules
    // ======================================================================
    "allowJs": true,
    "checkJs": true,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    // ======================================================================
    // Build & Performance
    // Settings that affect compilation output and build performance
    // ======================================================================
    "skipLibCheck": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "forceConsistentCasingInFileNames": true,
    // ======================================================================
    // Project Structure
    // Configure import paths and module resolution
    // ======================================================================
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ],
      "@/public/*": [
        "./public/*"
      ]
    },
    // ======================================================================
    // Next.js Project Configuration
    // Controls settings specific to Next.js framework
    // ======================================================================
    "jsx": "react-jsx", // Uses the React automatic runtime
    "incremental": true, // Enable faster incremental builds
    "noEmit": true, // Skip emitting files (Next.js handles this)
    "plugins": [
      {
        "name": "next"
      }
    ] // Enable Next.js TypeScript plugin
  },
  // Files to include/exclude from the project
  "exclude": [
    "node_modules",
    "**/*.spec.ts",
    "**/*.e2e.ts"
  ],
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ]
}

================================================
FILE: vitest.config.mts
================================================
import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';
import { loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    coverage: {
      include: ['src/**/*'],
      exclude: ['src/**/*.stories.{js,jsx,ts,tsx}'],
    },
    projects: [
      {
        extends: true,
        test: {
          name: 'unit',
          include: ['src/**/*.test.{js,ts}'],
          exclude: ['src/hooks/**/*.test.ts'],
          environment: 'node',
        },
      },
      {
        extends: true,
        test: {
          name: 'ui',
          include: ['**/*.test.tsx', 'src/hooks/**/*.test.ts'],
          browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            screenshotDirectory: 'vitest-test-results',
            instances: [
              { browser: 'chromium' },
            ],
          },
        },
      },
    ],
    env: loadEnv('', process.cwd(), ''),
  },
});

================================================
FILE: .coderabbit.yaml
================================================
# yaml-language-server: $schema=https://coderabbit.ai/integrations/schema.v2.json

# CodeRabbit is an AI-powered code reviewer that cuts review time and bugs in half

language: en-US
early_access: false
reviews:
  profile: chill
  request_changes_workflow: false
  high_level_summary: true
  poem: true
  review_status: true
  collapse_walkthrough: false
  path_instructions:
    - path: '**/*.{ts,tsx}'
      instructions:
        'Review the Typescript and React code for conformity with best practices in React, and Typescript. Highlight any deviations.'
  auto_review:
    enabled: true
    ignore_title_keywords:
      - WIP
      - DO NOT MERGE
      - DRAFT
    drafts: false
chat:
  auto_reply: true

================================================
FILE: .env.production
================================================
# FIXME: Configure environment variables for production

# Need advanced features? Multi-tenancy & Teams, Roles & Permissions, Shadcn UI, End-to-End Typesafety with oRPC,
# Stripe Payment, Light / Dark mode. Try Next.js Boilerplate Pro: https://nextjs-boilerplate.com/pro-saas-starter-kit

# Hosting
# Replace by your domain name
NEXT_PUBLIC_APP_URL=https://demo.nextjs-boilerplate.com

# Sentry DSN
# NEXT_PUBLIC_SENTRY_DSN=

# SENTRY_ORGANIZATION=
# SENTRY_PROJECT=

# Checkly
CHECKLY_EMAIL_ADDRESS=contact@creativedesignsguru.com
CHECKLY_PROJECT_NAME=Next.js Boilerplate
CHECKLY_LOGICAL_ID=nextjs-boilerplate

######## [BEGIN] SENSITIVE DATA ######## For security reason, don't update the following variables (secret key) directly in this file.
######## Please create a new file named `.env.production.local`, all environment files ending with `.local` won't be tracked by Git.
######## After creating the file, you can add the following variables.
# Arcjet security
# Get your key from https://launch.arcjet.com/Q6eLbRE
# ARCJET_KEY=

# Database
# Using an incorrect DATABASE_URL value, Next.js build will timeout and you will get the following error: "because it took more than 60 seconds"
# Need a database for production? Check out https://www.prisma.io/?via=nextjsboilerplate
# Tested and compatible with Next.js Boilerplate
# DATABASE_URL=postgresql://postgres@localhost:5432/postgres

# Error monitoring
# SENTRY_AUTH_TOKEN=

# Logging ingestion
# NEXT_PUBLIC_BETTER_STACK_SOURCE_TOKEN=
# NEXT_PUBLIC_BETTER_STACK_INGESTING_HOST=
######## [END] SENSITIVE DATA

================================================
FILE: migrations/0000_init-db.sql
================================================
CREATE TABLE "counter" (
	"id" serial PRIMARY KEY NOT NULL,
	"count" integer DEFAULT 0,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);

================================================
FILE: migrations/meta/0000_snapshot.json
================================================
{
  "id": "0896e842-e142-406c-99b2-a602f7fa8731",
  "prevId": "00000000-0000-0000-0000-000000000000",
  "version": "7",
  "dialect": "postgresql",
  "tables": {
    "public.counter": {
      "name": "counter",
      "schema": "",
      "columns": {
        "id": {
          "name": "id",
          "type": "serial",
          "primaryKey": true,
          "notNull": true
        },
        "count": {
          "name": "count",
          "type": "integer",
          "primaryKey": false,
          "notNull": false,
          "default": 0
        },
        "updated_at": {
          "name": "updated_at",
          "type": "timestamp",
          "primaryKey": false,
          "notNull": true,
          "default": "now()"
        },
        "created_at": {
          "name": "created_at",
          "type": "timestamp",
          "primaryKey": false,
          "notNull": true,
          "default": "now()"
        }
      },
      "indexes": {},
      "foreignKeys": {},
      "compositePrimaryKeys": {},
      "uniqueConstraints": {},
      "policies": {},
      "checkConstraints": {},
      "isRLSEnabled": false
    }
  },
  "enums": {},
  "schemas": {},
  "sequences": {},
  "roles": {},
  "policies": {},
  "views": {},
  "_meta": {
    "columns": {},
    "schemas": {},
    "tables": {}
  }
}

================================================
FILE: migrations/meta/_journal.json
================================================
{
  "version": "7",
  "dialect": "postgresql",
  "entries": [
    {
      "idx": 0,
      "version": "7",
      "when": 1745518076143,
      "tag": "0000_init-db",
      "breakpoints": true
    }
  ]
}

================================================
FILE: src/instrumentation-client.ts
================================================
// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
import * as Sentry from '@sentry/nextjs';

if (!process.env.NEXT_PUBLIC_SENTRY_DISABLED) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

    // Add optional integrations for additional features
    integrations: [
      Sentry.replayIntegration(),
      Sentry.consoleLoggingIntegration(),
      Sentry.browserTracingIntegration(),

      ...(process.env.NODE_ENV === 'development'
        ? [Sentry.spotlightBrowserIntegration()]
        : []),
    ],

    // Adds request headers and IP for users, for more info visit
    sendDefaultPii: true,

    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate: 1,

    // Define how likely Replay events are sampled.
    // This sets the sample rate to be 10%. You may want this to be 100% while
    // in development and sample at a lower rate in production
    replaysSessionSampleRate: 0.1,

    // Define how likely Replay events are sampled when an error occurs.
    replaysOnErrorSampleRate: 1.0,

    // Enable logs to be sent to Sentry
    enableLogs: true,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,
  });
}

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;

================================================
FILE: src/instrumentation.ts
================================================
import * as Sentry from '@sentry/nextjs';

const sentryOptions: Sentry.NodeOptions | Sentry.EdgeOptions = {
  // Sentry DSN
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Enable Spotlight in development
  spotlight: process.env.NODE_ENV === 'development',

  integrations: [
    Sentry.consoleLoggingIntegration(),
  ],

  // Adds request headers and IP for users, for more info visit
  sendDefaultPii: true,

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Enable logs to be sent to Sentry
  enableLogs: true,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
};

export async function register() {
  if (!process.env.NEXT_PUBLIC_SENTRY_DISABLED) {
    if (process.env.NEXT_RUNTIME === 'nodejs') {
      // Node.js Sentry configuration
      Sentry.init(sentryOptions);
    }

    if (process.env.NEXT_RUNTIME === 'edge') {
      // Edge Sentry configuration
      Sentry.init(sentryOptions);
    }
  }
}

export const onRequestError = Sentry.captureRequestError;

================================================
FILE: src/middleware.ts
================================================
import type { NextFetchEvent, NextRequest } from 'next/server';
import { detectBot } from '@arcjet/next';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import arcjet from '@/libs/Arcjet';
import { routing } from './libs/I18nRouting';

const handleI18nRouting = createMiddleware(routing);

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/:locale/dashboard(.*)',
]);

const isAuthPage = createRouteMatcher([
  '/sign-in(.*)',
  '/:locale/sign-in(.*)',
  '/sign-up(.*)',
  '/:locale/sign-up(.*)',
]);

// Improve security with Arcjet
const aj = arcjet.withRule(
  detectBot({
    mode: 'LIVE',
    // Block all bots except the following
    allow: [
      // See https://docs.arcjet.com/bot-protection/identifying-bots
      'CATEGORY:SEARCH_ENGINE', // Allow search engines
      'CATEGORY:PREVIEW', // Allow preview links to show OG images
      'CATEGORY:MONITOR', // Allow uptime monitoring services
    ],
  }),
);

// Currently, with database connections, Webpack is faster than Turbopack in production environment at runtime.
// Then, unfortunately, Webpack doesn't support `proxy.ts` on Vercel yet, here is the error: "Error: ENOENT: no such file or directory, lstat '/vercel/path0/.next/server/proxy.js'"
export default async function middleware(
  request: NextRequest,
  event: NextFetchEvent,
) {
  // Verify the request with Arcjet
  // Use `process.env` instead of Env to reduce bundle size in middleware
  if (process.env.ARCJET_KEY) {
    const decision = await aj.protect(request);

    if (decision.isDenied()) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }
  }

  // Clerk keyless mode doesn't work with i18n, this is why we need to run the middleware conditionally
  if (
    isAuthPage(request) || isProtectedRoute(request)
  ) {
    return clerkMiddleware(async (auth, req) => {
      if (isProtectedRoute(req)) {
        const locale = req.nextUrl.pathname.match(/(\/.*)\/dashboard/)?.at(1) ?? '';

        const signInUrl = new URL(`${locale}/sign-in`, req.url);

        await auth.protect({
          unauthenticatedUrl: signInUrl.toString(),
        });
      }

      return handleI18nRouting(req);
    })(request, event);
  }

  return handleI18nRouting(request);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/_next`, `/_vercel` or `monitoring`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!_next|_vercel|monitoring|.*\\..*).*)',
  runtime: 'nodejs',
};

================================================
FILE: src/app/global-error.tsx
================================================
'use client';

import * as Sentry from '@sentry/nextjs';
import NextError from 'next/error';
import { useEffect } from 'react';
import { routing } from '@/libs/I18nRouting';

export default function GlobalError(props: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    Sentry.captureException(props.error);
  }, [props.error]);

  return (
    <html lang={routing.defaultLocale}>
      <body>
        {/* `NextError` is the default Next.js error page component. Its type
        definition requires a `statusCode` prop. However, since the App Router
        does not expose status codes for errors, we simply pass 0 to render a
        generic error message. */}
        <NextError statusCode={0} />
      </body>
    </html>
  );
}

================================================
FILE: src/app/robots.ts
================================================
import type { MetadataRoute } from 'next';
import { getBaseUrl } from '@/utils/Helpers';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/dashboard',
    },
    sitemap: `${getBaseUrl()}/sitemap.xml`,
  };
}

================================================
FILE: src/app/sitemap.ts
================================================
import type { MetadataRoute } from 'next';
import { getBaseUrl } from '@/utils/Helpers';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${getBaseUrl()}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    // Add more URLs here
  ];
}

================================================
FILE: src/app/[locale]/layout.tsx
================================================
import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { PostHogProvider } from '@/components/analytics/PostHogProvider';
import { DemoBadge } from '@/components/DemoBadge';
import { routing } from '@/libs/I18nRouting';
import '@/styles/global.css';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <PostHogProvider>
            {props.children}
          </PostHogProvider>

          <DemoBadge />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

================================================
FILE: src/app/[locale]/(auth)/layout.tsx
================================================
import { ClerkProvider } from '@clerk/nextjs';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/libs/I18nRouting';
import { ClerkLocalizations } from '@/utils/AppConfig';

export default async function AuthLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const clerkLocale = ClerkLocalizations.supportedLocales[locale] ?? ClerkLocalizations.defaultLocale;
  let signInUrl = '/sign-in';
  let signUpUrl = '/sign-up';
  let dashboardUrl = '/dashboard';
  let afterSignOutUrl = '/';

  if (locale !== routing.defaultLocale) {
    signInUrl = `/${locale}${signInUrl}`;
    signUpUrl = `/${locale}${signUpUrl}`;
    dashboardUrl = `/${locale}${dashboardUrl}`;
    afterSignOutUrl = `/${locale}${afterSignOutUrl}`;
  }

  return (
    <ClerkProvider
      appearance={{
        cssLayerName: 'clerk', // Ensure Clerk is compatible with Tailwind CSS v4
      }}
      localization={clerkLocale}
      signInUrl={signInUrl}
      signUpUrl={signUpUrl}
      signInFallbackRedirectUrl={dashboardUrl}
      signUpFallbackRedirectUrl={dashboardUrl}
      afterSignOutUrl={afterSignOutUrl}
    >
      {props.children}
    </ClerkProvider>
  );
}

================================================
FILE: src/app/[locale]/(auth)/(center)/layout.tsx
================================================
import { setRequestLocale } from 'next-intl/server';

export default async function CenteredLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="flex min-h-screen items-center justify-center">
      {props.children}
    </div>
  );
}

================================================
FILE: src/app/[locale]/(auth)/(center)/sign-in/[[...sign-in]]/page.tsx
================================================
import type { Metadata } from 'next';
import { SignIn } from '@clerk/nextjs';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getI18nPath } from '@/utils/Helpers';

type ISignInPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: ISignInPageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'SignIn',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function SignInPage(props: ISignInPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <SignIn path={getI18nPath('/sign-in', locale)} />
  );
};

================================================
FILE: src/app/[locale]/(auth)/(center)/sign-up/[[...sign-up]]/page.tsx
================================================
import type { Metadata } from 'next';
import { SignUp } from '@clerk/nextjs';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getI18nPath } from '@/utils/Helpers';

type ISignUpPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: ISignUpPageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'SignUp',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function SignUpPage(props: ISignUpPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <SignUp path={getI18nPath('/sign-up', locale)} />
  );
};

================================================
FILE: src/app/[locale]/(auth)/dashboard/layout.tsx
================================================
import { SignOutButton } from '@clerk/nextjs';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default async function DashboardLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'DashboardLayout',
  });

  return (
    <BaseTemplate
      leftNav={(
        <>
          <li>
            <Link
              href="/dashboard/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('dashboard_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/user-profile/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('user_profile_link')}
            </Link>
          </li>
        </>
      )}
      rightNav={(
        <>
          <li>
            <SignOutButton>
              <button className="border-none text-gray-700 hover:text-gray-900" type="button">
                {t('sign_out')}
              </button>
            </SignOutButton>
          </li>

          <li>
            <LocaleSwitcher />
          </li>
        </>
      )}
    >
      {props.children}
    </BaseTemplate>
  );
}

================================================
FILE: src/app/[locale]/(auth)/dashboard/page.tsx
================================================
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Hello } from '@/components/Hello';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Dashboard',
  });

  return {
    title: t('meta_title'),
  };
}

export default function Dashboard() {
  return (
    <div className="py-5 [&_p]:my-6">
      <Hello />
    </div>
  );
}

================================================
FILE: src/app/[locale]/(auth)/dashboard/user-profile/[[...user-profile]]/page.tsx
================================================
import type { Metadata } from 'next';
import { UserProfile } from '@clerk/nextjs';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getI18nPath } from '@/utils/Helpers';

type IUserProfilePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IUserProfilePageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'UserProfile',
  });

  return {
    title: t('meta_title'),
  };
}

export default async function UserProfilePage(props: IUserProfilePageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="my-6 -ml-16">
      <UserProfile
        path={getI18nPath('/dashboard/user-profile', locale)}
      />
    </div>
  );
};

================================================
FILE: src/app/[locale]/(marketing)/layout.tsx
================================================
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { DemoBanner } from '@/components/DemoBanner';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'RootLayout',
  });

  return (
    <>
      <DemoBanner />
      <BaseTemplate
        leftNav={(
          <>
            <li>
              <Link
                href="/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                {t('home_link')}
              </Link>
            </li>
            <li>
              <Link
                href="/about/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                {t('about_link')}
              </Link>
            </li>
            <li>
              <Link
                href="/counter/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                {t('counter_link')}
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                {t('portfolio_link')}
              </Link>
            </li>
            <li>
              <a
                className="border-none text-gray-700 hover:text-gray-900"
                href="https://github.com/ixartz/Next-js-Boilerplate"
              >
                GitHub
              </a>
            </li>
          </>
        )}
        rightNav={(
          <>
            <li>
              <Link
                href="/sign-in/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                {t('sign_in_link')}
              </Link>
            </li>

            <li>
              <Link
                href="/sign-up/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                {t('sign_up_link')}
              </Link>
            </li>

            <li>
              <LocaleSwitcher />
            </li>
          </>
        )}
      >
        <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
      </BaseTemplate>
    </>
  );
}

================================================
FILE: src/app/[locale]/(marketing)/page.tsx
================================================
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Sponsors } from '@/components/Sponsors';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return (
    <>
      <p>
        {`Follow `}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://twitter.com/ixartz"
          target="_blank"
          rel="noreferrer noopener"
        >
          @Ixartz on Twitter
        </a>
        {` for updates and more information about the boilerplate.`}
      </p>
      <h2 className="mt-5 text-2xl font-bold">
        Boilerplate Code for Your Next.js Project with Tailwind CSS
      </h2>
      <p className="text-base">
        Next.js Boilerplate is a developer-friendly starter code for Next.js projects, built with Tailwind CSS and TypeScript.
        {' '}
        <span role="img" aria-label="zap">
          ⚡️
        </span>
        {' '}
        Designed with developer experience in mind, it includes:
      </p>
      <ul className="mt-3 text-base">
        <li>🚀 Next.js with App Router support</li>
        <li>🔥 TypeScript for type checking</li>
        <li>💎 Tailwind CSS integration</li>
        <li>
          🔒 Authentication with
          {' '}
          <a
            className="font-bold text-blue-700 hover:border-b-2 hover:border-blue-700"
            href="https://clerk.com?utm_source=github&amp;utm_medium=sponsorship&amp;utm_campaign=nextjs-boilerplate"
          >
            Clerk
          </a>
          {' '}
          (includes passwordless, social, and multi-factor auth)
        </li>
        <li>📦 ORM with DrizzleORM (PostgreSQL, SQLite, MySQL support)</li>
        <li>
          💽 Dev database with PGlite and production with
          {' '}
          <a
            className="font-bold text-blue-700 hover:border-b-2 hover:border-blue-700"
            href="https://www.prisma.io/?via=nextjsindex"
          >
            Prisma PostgreSQL
          </a>
        </li>
        <li>
          🌐 Multi-language support (i18n) with next-intl and
          {' '}
          <a
            className="font-bold text-blue-700 hover:border-b-2 hover:border-blue-700"
            href="https://l.crowdin.com/next-js"
          >
            Crowdin
          </a>
        </li>
        <li>🔴 Form handling (React Hook Form) and validation (Zod)</li>
        <li>📏 Linting and formatting (ESLint, Prettier)</li>
        <li>🦊 Git hooks and commit linting (Husky, Commitlint)</li>
        <li>🦺 Testing suite (Vitest, React Testing Library, Playwright)</li>
        <li>🎉 Storybook for UI development</li>
        <li>
          🐰 AI-powered code reviews with
          {' '}
          <a
            className="font-bold text-blue-700 hover:border-b-2 hover:border-blue-700"
            href="https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025"
          >
            CodeRabbit
          </a>
        </li>
        <li>
          🚨 Error monitoring (
          <a
            className="font-bold text-blue-700 hover:border-b-2 hover:border-blue-700"
            href="https://sentry.io/for/nextjs/?utm_source=github&amp;utm_medium=paid-community&amp;utm_campaign=general-fy25q1-nextjs&amp;utm_content=github-banner-nextjsboilerplate-logo"
          >
            Sentry
          </a>
          ) and logging (LogTape, an alternative to Pino.js)
        </li>
        <li>🖥️ Monitoring as Code (Checkly)</li>
        <li>
          🔐 Security and bot protection (
          <a
            className="font-bold text-blue-700 hover:border-b-2 hover:border-blue-700"
            href="https://launch.arcjet.com/Q6eLbRE"
          >
            Arcjet
          </a>
          )
        </li>
        <li>🤖 SEO optimization (metadata, JSON-LD, Open Graph tags)</li>
        <li>⚙️ Development tools (VSCode config, bundler analyzer, changelog generation)</li>
      </ul>
      <p className="text-base">
        Our sponsors&apos; exceptional support has made this project possible.
        Their services integrate seamlessly with the boilerplate, and we
        recommend trying them out.
      </p>
      <h2 className="mt-5 text-2xl font-bold">{t('sponsors_title')}</h2>
      <Sponsors />
    </>
  );
};

================================================
FILE: src/app/[locale]/(marketing)/about/page.tsx
================================================
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

type IAboutProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IAboutProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'About',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function About(props: IAboutProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'About',
  });

  return (
    <>
      <p>{t('about_paragraph')}</p>

      <div className="mt-2 text-center text-sm">
        {`${t('translation_powered_by')} `}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://l.crowdin.com/next-js"
        >
          Crowdin
        </a>
      </div>

      <a href="https://l.crowdin.com/next-js">
        <Image
          className="mx-auto mt-2"
          src="/assets/images/crowdin-dark.png"
          alt="Crowdin Translation Management System"
          width={128}
          height={26}
        />
      </a>
    </>
  );
};

================================================
FILE: src/app/[locale]/(marketing)/counter/page.tsx
================================================
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { CounterForm } from '@/components/CounterForm';
import { CurrentCount } from '@/components/CurrentCount';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Counter',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Counter() {
  const t = useTranslations('Counter');

  return (
    <>
      <CounterForm />

      <div className="mt-3">
        <CurrentCount />
      </div>

      <div className="mt-5 text-center text-sm">
        {`${t('security_powered_by')} `}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://launch.arcjet.com/Q6eLbRE"
        >
          Arcjet
        </a>
      </div>

      <a
        href="https://launch.arcjet.com/Q6eLbRE"
      >
        <Image
          className="mx-auto mt-2"
          src="/assets/images/arcjet-light.svg"
          alt="Arcjet"
          width={128}
          height={38}
        />
      </a>
    </>
  );
};

================================================
FILE: src/app/[locale]/(marketing)/portfolio/page.tsx
================================================
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

type IPortfolioProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IPortfolioProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Portfolio',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Portfolio(props: IPortfolioProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'Portfolio',
  });

  return (
    <>
      <p>{t('presentation')}</p>

      <div className="grid grid-cols-1 justify-items-start gap-3 md:grid-cols-2 xl:grid-cols-3">
        {Array.from(Array.from({ length: 6 }).keys()).map(elt => (
          <Link
            className="hover:text-blue-700"
            key={elt}
            href={`/portfolio/${elt}`}
          >
            {t('portfolio_name', { name: elt })}
          </Link>
        ))}
      </div>

      <div className="mt-5 text-center text-sm">
        {`${t('error_reporting_powered_by')} `}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
        >
          Sentry
        </a>
        {` - ${t('coverage_powered_by')} `}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://about.codecov.io/codecov-free-trial/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
        >
          Codecov
        </a>
      </div>

      <a
        href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
      >
        <Image
          className="mx-auto mt-2"
          src="/assets/images/sentry-dark.png"
          alt="Sentry"
          width={128}
          height={38}
        />
      </a>
    </>
  );
};

================================================
FILE: src/app/[locale]/(marketing)/portfolio/[slug]/page.tsx
================================================
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { routing } from '@/libs/I18nRouting';

type IPortfolioDetailProps = {
  params: Promise<{ slug: string; locale: string }>;
};

export function generateStaticParams() {
  return routing.locales
    .map(locale =>
      Array.from(Array.from({ length: 6 }).keys()).map(elt => ({
        slug: `${elt}`,
        locale,
      })),
    )
    .flat(1);
}

export async function generateMetadata(props: IPortfolioDetailProps): Promise<Metadata> {
  const { locale, slug } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'PortfolioSlug',
  });

  return {
    title: t('meta_title', { slug }),
    description: t('meta_description', { slug }),
  };
}

export default async function PortfolioDetail(props: IPortfolioDetailProps) {
  const { locale, slug } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'PortfolioSlug',
  });

  return (
    <>
      <h1 className="capitalize">{t('header', { slug })}</h1>
      <p>{t('content')}</p>

      <div className="mt-5 text-center text-sm">
        {`${t('code_review_powered_by')} `}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025"
        >
          CodeRabbit
        </a>
      </div>

      <a
        href="https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025"
      >
        <Image
          className="mx-auto mt-2"
          src="/assets/images/coderabbit-logo-light.svg"
          alt="CodeRabbit"
          width={128}
          height={22}
        />
      </a>
    </>
  );
};

export const dynamicParams = false;

================================================
FILE: src/app/[locale]/api/counter/route.ts
================================================
import { sql } from 'drizzle-orm';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import * as z from 'zod';
import { db } from '@/libs/DB';
import { logger } from '@/libs/Logger';
import { counterSchema } from '@/models/Schema';
import { CounterValidation } from '@/validations/CounterValidation';

export const PUT = async (request: Request) => {
  const json = await request.json();
  const parse = CounterValidation.safeParse(json);

  if (!parse.success) {
    return NextResponse.json(z.treeifyError(parse.error), { status: 422 });
  }

  // `x-e2e-random-id` is used for end-to-end testing to make isolated requests
  // The default value is 0 when there is no `x-e2e-random-id` header
  const id = Number((await headers()).get('x-e2e-random-id')) || 0;

  const count = await db
    .insert(counterSchema)
    .values({ id, count: parse.data.increment })
    .onConflictDoUpdate({
      target: counterSchema.id,
      set: { count: sql`${counterSchema.count} + ${parse.data.increment}` },
    })
    .returning();

  logger.info('Counter has been incremented');

  return NextResponse.json({
    count: count[0]?.count,
  });
};

================================================
FILE: src/components/CounterForm.tsx
================================================
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { CounterValidation } from '@/validations/CounterValidation';

export const CounterForm = () => {
  const t = useTranslations('CounterForm');
  const form = useForm({
    resolver: zodResolver(CounterValidation),
    defaultValues: {
      increment: 1,
    },
  });
  const router = useRouter();

  const handleIncrement = form.handleSubmit(async (data) => {
    const response = await fetch(`/api/counter`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    await response.json();

    router.refresh();
  });

  return (
    <form onSubmit={handleIncrement}>
      <p>{t('presentation')}</p>
      <div>
        <label className="text-sm font-bold text-gray-700" htmlFor="increment">
          {t('label_increment')}
          <input
            id="increment"
            type="number"
            className="ml-2 w-32 appearance-none rounded-sm border border-gray-200 px-2 py-1 text-sm leading-tight text-gray-700 focus:ring-3 focus:ring-blue-300/50 focus:outline-hidden"
            {...form.register('increment', { valueAsNumber: true })}
          />
        </label>

        {form.formState.errors.increment && (
          <div className="my-2 text-xs text-red-500 italic">
            {t('error_increment_range')}
          </div>
        )}
      </div>

      <div className="mt-2">
        <button
          className="rounded-sm bg-blue-500 px-5 py-1 font-bold text-white hover:bg-blue-600 focus:ring-3 focus:ring-blue-300/50 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {t('button_increment')}
        </button>
      </div>
    </form>
  );
};

================================================
FILE: src/components/CurrentCount.tsx
================================================
import { eq } from 'drizzle-orm';
import { getTranslations } from 'next-intl/server';
import { headers } from 'next/headers';
import { db } from '@/libs/DB';
import { logger } from '@/libs/Logger';
import { counterSchema } from '@/models/Schema';

export const CurrentCount = async () => {
  const t = await getTranslations('CurrentCount');

  // `x-e2e-random-id` is used for end-to-end testing to make isolated requests
  // The default value is 0 when there is no `x-e2e-random-id` header
  const id = Number((await headers()).get('x-e2e-random-id')) || 0;
  const result = await db.query.counterSchema.findFirst({
    where: eq(counterSchema.id, id),
  });
  const count = result?.count ?? 0;

  logger.info('Counter fetched successfully');

  return (
    <div>
      {t('count', { count })}
    </div>
  );
};

================================================
FILE: src/components/DemoBadge.tsx
================================================
export const DemoBadge = () => (
  <div className="fixed right-20 bottom-0 z-10">
    <a
      href="https://github.com/ixartz/Next-js-Boilerplate"
    >
      <div className="rounded-md bg-gray-900 px-3 py-2 font-semibold text-gray-100">
        <span className="text-gray-500">Demo of</span>
        {` Next.js Boilerplate`}
      </div>
    </a>
  </div>
);

================================================
FILE: src/components/DemoBanner.tsx
================================================
import Link from 'next/link';

export const DemoBanner = () => (
  <div className="sticky top-0 z-50 bg-gray-900 p-4 text-center text-lg font-semibold text-gray-100 [&_a]:text-fuchsia-500 [&_a:hover]:text-indigo-500">
    Live Demo of Next.js Boilerplate -
    {' '}
    <Link href="/sign-up">Explore the Authentication</Link>
  </div>
);

================================================
FILE: src/components/Hello.tsx
================================================
import { currentUser } from '@clerk/nextjs/server';
import { getTranslations } from 'next-intl/server';
import { Sponsors } from './Sponsors';

export const Hello = async () => {
  const t = await getTranslations('Dashboard');
  const user = await currentUser();

  return (
    <>
      <p>
        {`👋 `}
        {t('hello_message', { email: user?.primaryEmailAddress?.emailAddress ?? '' })}
      </p>
      <p>
        {t.rich('alternative_message', {
          url: () => (
            <a
              className="text-blue-700 hover:border-b-2 hover:border-blue-700"
              href="https://nextjs-boilerplate.com/pro-saas-starter-kit"
            >
              Next.js Boilerplate Pro
            </a>
          ),
        })}
      </p>
      <Sponsors />
    </>
  );
};

================================================
FILE: src/components/LocaleSwitcher.tsx
================================================
'use client';

import type { ChangeEventHandler } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { usePathname } from '@/libs/I18nNavigation';
import { routing } from '@/libs/I18nRouting';

export const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    router.push(`/${event.target.value}${pathname}`);
    router.refresh(); // Ensure the page takes the new locale into account related to the issue #395
  };

  return (
    <select
      defaultValue={locale}
      onChange={handleChange}
      className="border border-gray-300 font-medium focus:outline-hidden focus-visible:ring-3"
      aria-label="lang-switcher"
    >
      {routing.locales.map(elt => (
        <option key={elt} value={elt}>
          {elt.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

================================================
FILE: src/components/Sponsors.tsx
================================================
/* eslint-disable react-dom/no-unsafe-target-blank */
import Image from 'next/image';

export const Sponsors = () => (
  <table className="border-collapse">
    <tbody>
      <tr className="h-56">
        <td className="border-2 border-gray-300 p-3">
          <a
            href="https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate"
            target="_blank"
            rel="noopener"
          >
            <Image
              src="/assets/images/clerk-logo-dark.png"
              alt="Clerk – Authentication & User Management for Next.js"
              width={260}
              height={224}
            />
          </a>
        </td>
        <td className="border-2 border-gray-300 p-3">
          <a href="https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025" target="_blank" rel="noopener">
            <Image
              src="/assets/images/coderabbit-logo-light.svg"
              alt="CodeRabbit"
              width={260}
              height={224}
            />
          </a>
        </td>
        <td className="border-2 border-gray-300 p-3">
          <a
            href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
            target="_blank"
            rel="noopener"
          >
            <Image
              src="/assets/images/sentry-dark.png"
              alt="Sentry"
              width={260}
              height={224}
            />
          </a>
        </td>
      </tr>
      <tr className="h-56">
        <td className="border-2 border-gray-300 p-3">
          <a href="https://launch.arcjet.com/Q6eLbRE">
            <Image
              src="/assets/images/arcjet-light.svg"
              alt="Arcjet"
              width={260}
              height={224}
            />
          </a>
        </td>
        <td className="border-2 border-gray-300 p-3">
          <a href="https://sevalla.com/">
            <Image
              src="/assets/images/sevalla-light.png"
              alt="Sevalla"
              width={260}
              height={224}
            />
          </a>
        </td>
        <td className="border-2 border-gray-300 p-3">
          <a href="https://l.crowdin.com/next-js" target="_blank" rel="noopener">
            <Image
              src="/assets/images/crowdin-dark.png"
              alt="Crowdin"
              width={260}
              height={224}
            />
          </a>
        </td>
      </tr>
      <tr className="h-56">
        <td className="border-2 border-gray-300 p-3">
          <a
            href="https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate"
            target="_blank"
            rel="noopener"
          >
            <Image
              src="/assets/images/better-stack-dark.png"
              alt="Better Stack"
              width={260}
              height={224}
            />
          </a>
        </td>
        <td className="border-2 border-gray-300 p-3">
          <a
            href="https://posthog.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate"
            target="_blank"
            rel="noopener"
          >
            <Image
              src="https://posthog.com/brand/posthog-logo.svg"
              alt="PostHog"
              width={260}
              height={224}
            />
          </a>
        </td>
        <td className="border-2 border-gray-300 p-3">
          <a
            href="https://www.checklyhq.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate"
            target="_blank"
            rel="noopener"
          >
            <Image
              src="/assets/images/checkly-logo-light.png"
              alt="Checkly"
              width={260}
              height={224}
            />
          </a>
        </td>
      </tr>
      <tr className="h-56">
        <td className="border-2 border-gray-300 p-3">
          <a href="https://nextjs-boilerplate.com/pro-saas-starter-kit">
            <Image
              src="/assets/images/nextjs-boilerplate-saas.png"
              alt="Next.js SaaS Boilerplate"
              width={260}
              height={224}
            />
          </a>
        </td>
      </tr>
    </tbody>
  </table>
);

================================================
FILE: src/components/analytics/PostHogPageView.tsx
================================================
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { usePostHog } from 'posthog-js/react';
import { Suspense, useEffect } from 'react';

const PostHogPageView = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();

  // Track pageviews
  useEffect(() => {
    if (pathname && posthog) {
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url = `${url}?${searchParams.toString()}`;
      }

      posthog.capture('$pageview', { $current_url: url });
    }
  }, [pathname, searchParams, posthog]);

  return null;
};

// Wrap this in Suspense to avoid the `useSearchParams` usage above
// from de-opting the whole app into client-side rendering
// See: https://nextjs.org/docs/messages/deopted-into-client-rendering
export const SuspendedPostHogPageView = () => {
  return (
    <Suspense fallback={null}>
      <PostHogPageView />
    </Suspense>
  );
};

================================================
FILE: src/components/analytics/PostHogProvider.tsx
================================================
'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect } from 'react';
import { Env } from '@/libs/Env';
import { SuspendedPostHogPageView } from './PostHogPageView';

export const PostHogProvider = (props: { children: React.ReactNode }) => {
  useEffect(() => {
    if (Env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(Env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: Env.NEXT_PUBLIC_POSTHOG_HOST,
        capture_pageview: false, // Disable automatic pageview capture, as we capture manually
        capture_pageleave: true, // Enable pageleave capture
      });
    }
  }, []);

  if (!Env.NEXT_PUBLIC_POSTHOG_KEY) {
    return props.children;
  }

  return (
    <PHProvider client={posthog}>
      <SuspendedPostHogPageView />
      {props.children}
    </PHProvider>
  );
};

================================================
FILE: src/libs/Arcjet.ts
================================================
import arcjet, { shield } from '@arcjet/next';

// Create a base Arcjet instance which can be imported and extended in each route.
export default arcjet({
  // Get your site key from https://launch.arcjet.com/Q6eLbRE
  // Use `process.env` instead of Env to reduce bundle size in middleware
  key: process.env.ARCJET_KEY ?? '',
  // Identify the user by their IP address
  characteristics: ['ip.src'],
  rules: [
    // Protect against common attacks with Arcjet Shield
    shield({
      mode: 'LIVE', // will block requests. Use "DRY_RUN" to log only
    }),
    // Other rules are added in different routes
  ],
});

================================================
FILE: src/libs/DB.ts
================================================
import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import type * as schema from '@/models/Schema';
import { createDbConnection } from '@/utils/DBConnection';
import { Env } from './Env';

// Stores the db connection in the global scope to prevent multiple instances due to hot reloading with Next.js
const globalForDb = globalThis as unknown as {
  drizzle: NodePgDatabase<typeof schema>;
};

const db = globalForDb.drizzle || createDbConnection();

// Only store in global during development to prevent hot reload issues
if (Env.NODE_ENV !== 'production') {
  globalForDb.drizzle = db;
}

export { db };

================================================
FILE: src/libs/Env.ts
================================================
import { createEnv } from '@t3-oss/env-nextjs';
import * as z from 'zod';

export const Env = createEnv({
  server: {
    ARCJET_KEY: z.string().startsWith('ajkey_').optional(),
    CLERK_SECRET_KEY: z.string().min(1),
    DATABASE_URL: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().optional(),
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    NEXT_PUBLIC_BETTER_STACK_SOURCE_TOKEN: z.string().optional(),
    NEXT_PUBLIC_BETTER_STACK_INGESTING_HOST: z.string().optional(),
    NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
    NEXT_PUBLIC_POSTHOG_HOST: z.string().optional(),
  },
  shared: {
    NODE_ENV: z.enum(['test', 'development', 'production']).optional(),
  },
  // You need to destructure all the keys manually
  runtimeEnv: {
    ARCJET_KEY: process.env.ARCJET_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NEXT_PUBLIC_BETTER_STACK_SOURCE_TOKEN: process.env.NEXT_PUBLIC_BETTER_STACK_SOURCE_TOKEN,
    NEXT_PUBLIC_BETTER_STACK_INGESTING_HOST: process.env.NEXT_PUBLIC_BETTER_STACK_INGESTING_HOST,
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    NODE_ENV: process.env.NODE_ENV,
  },
});

================================================
FILE: src/libs/I18n.ts
================================================
import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './I18nRouting';

// NextJS Boilerplate uses Crowdin as the localization software.
// As a developer, you only need to take care of the English (or another default language) version.
// Other languages are automatically generated and handled by Crowdin.

// The localisation files are synced with Crowdin using GitHub Actions.
// By default, there are 3 ways to sync the message files:
// 1. Automatically sync on push to the `main` branch
// 2. Run manually the workflow on GitHub Actions
// 3. Every 24 hours at 5am, the workflow will run automatically

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default,
  };
});

================================================
FILE: src/libs/I18nNavigation.ts
================================================
import { createNavigation } from 'next-intl/navigation';
import { routing } from './I18nRouting';

export const { usePathname } = createNavigation(routing);

================================================
FILE: src/libs/I18nRouting.ts
================================================
import { defineRouting } from 'next-intl/routing';
import { AppConfig } from '@/utils/AppConfig';

export const routing = defineRouting({
  locales: AppConfig.locales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale,
});

================================================
FILE: src/libs/Logger.ts
================================================
import type { AsyncSink } from '@logtape/logtape';
import { configure, fromAsyncSink, getConsoleSink, getJsonLinesFormatter, getLogger } from '@logtape/logtape';
import { Env } from './Env';

const betterStackSink: AsyncSink = async (record) => {
  await fetch(`https://${Env.NEXT_PUBLIC_BETTER_STACK_INGESTING_HOST}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Env.NEXT_PUBLIC_BETTER_STACK_SOURCE_TOKEN}`,
    },
    body: JSON.stringify(record),
  });
};

await configure({
  sinks: {
    console: getConsoleSink({ formatter: getJsonLinesFormatter() }),
    betterStack: fromAsyncSink(betterStackSink),
  },
  loggers: [
    { category: ['logtape', 'meta'], sinks: ['console'], lowestLevel: 'warning' },
    {
      category: ['app'],
      sinks: Env.NEXT_PUBLIC_BETTER_STACK_SOURCE_TOKEN && Env.NEXT_PUBLIC_BETTER_STACK_INGESTING_HOST
        ? ['console', 'betterStack']
        : ['console'],
      lowestLevel: 'debug',
    },
  ],
});

export const logger = getLogger(['app']);

================================================
FILE: src/locales/en.json
================================================
{
  "RootLayout": {
    "home_link": "Home",
    "about_link": "About",
    "counter_link": "Counter",
    "portfolio_link": "Portfolio",
    "sign_in_link": "Sign in",
    "sign_up_link": "Sign up"
  },
  "BaseTemplate": {
    "description": "Starter code for your Nextjs Boilerplate with Tailwind CSS",
    "made_with": "Made with <author></author>."
  },
  "Index": {
    "meta_title": "Next.js Boilerplate Presentation",
    "meta_description": "Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework.",
    "sponsors_title": "Sponsors"
  },
  "Counter": {
    "meta_title": "Counter",
    "meta_description": "An example of DB operation",
    "security_powered_by": "Security, bot detection and rate limiting powered by"
  },
  "CounterForm": {
    "presentation": "The counter is stored in the database and incremented by the value you provide.",
    "label_increment": "Increment by",
    "button_increment": "Increment",
    "error_increment_range": "Value must be between 1 and 3"
  },
  "CurrentCount": {
    "count": "Count: {count}"
  },
  "About": {
    "meta_title": "About",
    "meta_description": "About page description",
    "about_paragraph": "Welcome to our About page! We are a team of passionate individuals dedicated to creating amazing software.",
    "translation_powered_by": "Translation powered by"
  },
  "Portfolio": {
    "meta_title": "Portfolio",
    "meta_description": "Welcome to my portfolio page!",
    "presentation": "Welcome to my portfolio page! Here you will find a carefully curated collection of my work and accomplishments. Through this portfolio, I'm to showcase my expertise, creativity, and the value I can bring to your projects.",
    "portfolio_name": "Portfolio {name}",
    "error_reporting_powered_by": "Error reporting powered by",
    "coverage_powered_by": "Code coverage powered by"
  },
  "PortfolioSlug": {
    "meta_title": "Portfolio {slug}",
    "meta_description": "Portfolio {slug} description",
    "header": "Portfolio {slug}",
    "content": "Created a set of promotional materials and branding elements for a corporate event. Crafted a visually unified theme, encompassing a logo, posters, banners, and digital assets. Integrated the client's brand identity while infusing it with a contemporary and innovative approach.",
    "code_review_powered_by": "Code review powered by"
  },
  "SignIn": {
    "meta_title": "Sign in",
    "meta_description": "Seamlessly sign in to your account with our user-friendly login process."
  },
  "SignUp": {
    "meta_title": "Sign up",
    "meta_description": "Effortlessly create an account through our intuitive sign-up process."
  },
  "Dashboard": {
    "meta_title": "Dashboard",
    "hello_message": "Hello {email}!",
    "alternative_message": "Need advanced features? Multi-tenancy & Teams, Roles & Permissions, Shadcn UI, End-to-End Typesafety with oRPC, Stripe Payment, Light / Dark mode. Try <url></url>."
  },
  "UserProfile": {
    "meta_title": "User Profile"
  },
  "DashboardLayout": {
    "dashboard_link": "Dashboard",
    "user_profile_link": "Manage your account",
    "sign_out": "Sign out"
  }
}

================================================
FILE: src/locales/fr.json
================================================
{
  "RootLayout": {
    "home_link": "Accueil",
    "about_link": "A propos",
    "counter_link": "Compteur",
    "portfolio_link": "Portfolio",
    "sign_in_link": "Se connecter",
    "sign_up_link": "S'inscrire"
  },
  "BaseTemplate": {
    "description": "Code de démarrage pour Next.js avec Tailwind CSS",
    "made_with": "Fait avec <author></author>."
  },
  "Index": {
    "meta_title": "Présentation de Next.js Boilerplate",
    "meta_description": "Next js Boilerplate est le code de démarrage parfait pour votre projet. Construisez votre application React avec le framework Next.js.",
    "sponsors_title": "Partenaires"
  },
  "Counter": {
    "meta_title": "Compteur",
    "meta_description": "Un exemple d'opération DB",
    "security_powered_by": "Sécurité, détection de bot et rate limiting propulsés par"
  },
  "CounterForm": {
    "presentation": "Le compteur est stocké dans la base de données et incrémenté par la valeur que vous fournissez.",
    "label_increment": "Incrémenter de",
    "button_increment": "Incrémenter",
    "error_increment_range": "La valeur doit être entre 1 et 3"
  },
  "CurrentCount": {
    "count": "Nombre : {count}"
  },
  "About": {
    "meta_title": "A propos",
    "meta_description": "A propos description",
    "about_paragraph": "Bienvenue sur notre page À propos ! Nous sommes une équipe de passionnés et dévoués à la création de logiciels.",
    "translation_powered_by": "Traduction propulsée par"
  },
  "Portfolio": {
    "meta_title": "Portfolio",
    "meta_description": "Bienvenue sur la page de mon portfolio !",
    "presentation": "Bienvenue sur ma page portfolio ! Vous trouverez ici une collection soigneusement organisée de mon travail et de mes réalisations. À travers ce portfolio, je mets en valeur mon expertise, ma créativité et la valeur que je peux apporter à vos projets.",
    "portfolio_name": "Portfolio {name}",
    "error_reporting_powered_by": "Rapport d'erreur propulsé par",
    "coverage_powered_by": "Couverture de code propulsée par"
  },
  "PortfolioSlug": {
    "meta_title": "Portfolio {slug}",
    "meta_description": "Description du Portfolio {slug}",
    "header": "Portfolio {slug}",
    "content": "Créé un ensemble de matériel promotionnel et d'éléments de marquage pour un événement d'entreprise. Conçu un thème visuellement unifié, englobant un logo, des affiches, des bannières et des actifs numériques. Intégrer l'identité de marque du client tout en l'insufflant à une approche contemporaine et innovante.",
    "code_review_powered_by": "Code review propulsé par"
  },
  "SignIn": {
    "meta_title": "Se connecter",
    "meta_description": "Connectez-vous à votre compte avec facilité."
  },
  "SignUp": {
    "meta_title": "S'inscrire",
    "meta_description": "Créez un compte facilement grâce à notre processus d'inscription intuitif."
  },
  "Dashboard": {
    "meta_title": "Tableau de bord",
    "hello_message": "Bonjour {email}!",
    "alternative_message": "Besoin de fonctionnalités avancées ? Multi-tenant et équipes, rôles et permissions, Shadcn UI, typage de bout en bout avec oRPC, paiement Stripe, mode clair / sombre. Essayez <url></url>."
  },
  "UserProfile": {
    "meta_title": "Profil de l'utilisateur"
  },
  "DashboardLayout": {
    "dashboard_link": "Tableau de bord",
    "user_profile_link": "Gérer votre compte",
    "sign_out": "Se déconnecter"
  }
}

================================================
FILE: src/models/Schema.ts
================================================
import { integer, pgTable, serial, timestamp } from 'drizzle-orm/pg-core';

// This file defines the structure of your database tables using the Drizzle ORM.

// To modify the database schema:
// 1. Update this file with your desired changes.
// 2. Generate a new migration by running: `npm run db:generate`

// The generated migration file will reflect your schema changes.
// The migration is automatically applied during the Next.js initialization process through `instrumentation.ts`.
// Simply restart your Next.js server to apply the database changes.
// Alternatively, if your database is running, you can run `npm run db:migrate` and there is no need to restart the server.

// Need a database for production? Check out https://www.prisma.io/?via=nextjsboilerplate
// Tested and compatible with Next.js Boilerplate

export const counterSchema = pgTable('counter', {
  id: serial('id').primaryKey(),
  count: integer('count').default(0),
  updatedAt: timestamp('updated_at', { mode: 'date' })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
});

================================================
FILE: src/styles/global.css
================================================
@layer theme, base, clerk, components, utilities; /* Ensure Clerk is compatible with Tailwind CSS v4 */

@import 'tailwindcss';

================================================
FILE: src/templates/BaseTemplate.stories.tsx
================================================
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { NextIntlClientProvider } from 'next-intl';
import messages from '@/locales/en.json';
import { BaseTemplate } from './BaseTemplate';

const meta = {
  title: 'Example/BaseTemplate',
  component: BaseTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <NextIntlClientProvider locale="en" messages={messages}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
} satisfies Meta<typeof BaseTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseWithReactComponent: Story = {
  args: {
    children: <div>Children node</div>,
    leftNav: (
      <>
        <li>Link 1</li>
        <li>Link 2</li>
      </>
    ),
  },
};

export const BaseWithString: Story = {
  args: {
    ...BaseWithReactComponent.args,
    children: 'String',
  },
};

================================================
FILE: src/templates/BaseTemplate.test.tsx
================================================
import { NextIntlClientProvider } from 'next-intl';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';
import messages from '@/locales/en.json';
import { BaseTemplate } from './BaseTemplate';

describe('Base template', () => {
  describe('Render method', () => {
    it('should have 3 menu items', () => {
      render(
        <NextIntlClientProvider locale="en" messages={messages}>
          <BaseTemplate
            leftNav={(
              <>
                <li>link 1</li>
                <li>link 2</li>
                <li>link 3</li>
              </>
            )}
          >
            {null}
          </BaseTemplate>
        </NextIntlClientProvider>,
      );

      const menuItemList = page.getByRole('listitem');

      expect(menuItemList.elements()).toHaveLength(3);
    });

    it('should have a link to support nextjs-boilerplate.com', () => {
      render(
        <NextIntlClientProvider locale="en" messages={messages}>
          <BaseTemplate leftNav={<li>1</li>}>{null}</BaseTemplate>
        </NextIntlClientProvider>,
      );

      const copyrightSection = page.getByText(/© Copyright/);
      const copyrightLink = copyrightSection.getByRole('link');

      /*
       * PLEASE READ THIS SECTION
       * We'll really appreciate if you could have a link to our website
       * The link doesn't need to appear on every pages, one link on one page is enough.
       * Thank you for your support it'll mean a lot for us.
       */
      expect(copyrightLink).toHaveAttribute(
        'href',
        'https://nextjs-boilerplate.com',
      );
    });
  });
});

================================================
FILE: src/templates/BaseTemplate.tsx
================================================
import { useTranslations } from 'next-intl';
import { AppConfig } from '@/utils/AppConfig';

export const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="mx-auto max-w-screen-md">
        <header className="border-b border-gray-300">
          <div className="pt-16 pb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              {AppConfig.name}
            </h1>
            <h2 className="text-xl">{t('description')}</h2>
          </div>

          <div className="flex justify-between">
            <nav aria-label="Main navigation">
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.leftNav}
              </ul>
            </nav>

            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.rightNav}
              </ul>
            </nav>
          </div>
        </header>

        <main>{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          {`© Copyright ${new Date().getFullYear()} ${AppConfig.name}. `}
          {t.rich('made_with', {
            author: () => (
              <a
                href="https://nextjs-boilerplate.com"
                className="text-blue-700 hover:border-b-2 hover:border-blue-700"
              >
                Next.js Boilerplate
              </a>
            ),
          })}
          {/*
           * PLEASE READ THIS SECTION
           * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
           * The link doesn't need to appear on every pages, one link on one page is enough.
           * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
           */}
        </footer>
      </div>
    </div>
  );
};

================================================
FILE: src/types/I18n.ts
================================================
import type { routing } from '@/libs/I18nRouting';
import type messages from '@/locales/en.json';

declare module 'next-intl' {
  // eslint-disable-next-line ts/consistent-type-definitions
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}

================================================
FILE: src/utils/AppConfig.ts
================================================
import type { LocalizationResource } from '@clerk/types';
import type { LocalePrefixMode } from 'next-intl/routing';
import { enUS, frFR } from '@clerk/localizations';

const localePrefix: LocalePrefixMode = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'Nextjs Starter',
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix,
};

const supportedLocales: Record<string, LocalizationResource> = {
  en: enUS,
  fr: frFR,
};

export const ClerkLocalizations = {
  defaultLocale: enUS,
  supportedLocales,
};

================================================
FILE: src/utils/DBConnection.ts
================================================
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { Env } from '@/libs/Env';
import * as schema from '@/models/Schema';

// Need a database for production? Check out https://www.prisma.io/?via=nextjsboilerplate
// Tested and compatible with Next.js Boilerplate
export const createDbConnection = () => {
  const pool = new Pool({
    connectionString: Env.DATABASE_URL,
    max: 1,
  });

  return drizzle({
    client: pool,
    schema,
  });
};

================================================
FILE: src/utils/Helpers.test.ts
================================================
import { describe, expect, it } from 'vitest';
import { routing } from '@/libs/I18nRouting';
import { getI18nPath } from './Helpers';

describe('Helpers', () => {
  describe('getI18nPath function', () => {
    it('should not change the path for default language', () => {
      const url = '/random-url';
      const locale = routing.defaultLocale;

      expect(getI18nPath(url, locale)).toBe(url);
    });

    it('should prepend the locale to the path for non-default language', () => {
      const url = '/random-url';
      const locale = 'fr';

      expect(getI18nPath(url, locale)).toMatch(/^\/fr/);
    });
  });
});

================================================
FILE: src/utils/Helpers.ts
================================================
import { routing } from '@/libs/I18nRouting';

export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  if (
    process.env.VERCEL_ENV === 'production'
    && process.env.VERCEL_PROJECT_PRODUCTION_URL
  ) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return 'http://localhost:3000';
};

export const getI18nPath = (url: string, locale: string) => {
  if (locale === routing.defaultLocale) {
    return url;
  }

  return `/${locale}${url}`;
};

export const isServer = () => {
  return typeof window === 'undefined';
};

================================================
FILE: src/validations/CounterValidation.ts
================================================
import * as z from 'zod';

export const CounterValidation = z.object({
  increment: z.number().min(1).max(3),
});

================================================
FILE: tests/e2e/Counter.e2e.ts
================================================
import assert from 'node:assert';
import { faker } from '@faker-js/faker';
import { expect, test } from '@playwright/test';

test.describe('Counter', () => {
  test.describe('Increment operation', () => {
    test('should display error message when incrementing with negative number', async ({
      page,
    }) => {
      await page.goto('/counter');

      const count = page.getByText('Count:');
      const countText = await count.textContent();

      assert(countText !== null, 'Count should not be null');

      await page.getByLabel('Increment by').fill('-1');
      await page.getByRole('button', { name: 'Increment' }).click();

      await expect(page.getByText('Value must be between 1 and 3')).toBeVisible();
      await expect(page.getByText('Count:')).toHaveText(countText);
    });

    test('should increment the counter and validate the count', async ({
      page,
    }) => {
      // `x-e2e-random-id` is used for end-to-end testing to make isolated requests
      // The default value is 0 when there is no `x-e2e-random-id` header
      const e2eRandomId = faker.number.int({ max: 1000000 });
      await page.setExtraHTTPHeaders({
        'x-e2e-random-id': e2eRandomId.toString(),
      });
      await page.goto('/counter');

      const count = page.getByText('Count:');
      const countText = await count.textContent();

      assert(countText !== null, 'Count should not be null');

      const countNumber = Number(countText.split(' ')[1]);

      await page.getByLabel('Increment by').fill('2');
      await page.getByRole('button', { name: 'Increment' }).isEnabled();
      await page.getByRole('button', { name: 'Increment' }).click();

      await expect(page.getByText('Count:')).toHaveText(`Count: ${countNumber + 2}`);

      await page.getByLabel('Increment by').fill('3');
      await page.getByRole('button', { name: 'Increment' }).isEnabled();
      await page.getByRole('button', { name: 'Increment' }).click();

      await expect(page.getByText('Count:')).toHaveText(`Count: ${countNumber + 5}`);
    });
  });
});

================================================
FILE: tests/e2e/I18n.e2e.ts
================================================
import { expect, test } from '@playwright/test';

test.describe('I18n', () => {
  test.describe('Language Switching', () => {
    test('should switch language from English to French using dropdown and verify text on the homepage', async ({ page }) => {
      await page.goto('/');

      await expect(
        page.getByRole('heading', { name: 'Boilerplate Code for Your Next.js Project with Tailwind CSS' }),
      ).toBeVisible();

      await page.getByLabel('lang-switcher').selectOption('fr');

      await expect(
        page.getByRole('heading', { name: 'Code de démarrage pour Next.js avec Tailwind CSS' }),
      ).toBeVisible();
    });

    test('should switch language from English to French using URL and verify text on the sign-in page', async ({ page }) => {
      await page.goto('/sign-in');

      await expect(page.getByText('Email address')).toBeVisible();

      await page.goto('/fr/sign-in');

      await expect(page.getByText('Adresse e-mail')).toBeVisible();
    });
  });
});

================================================
FILE: tests/e2e/Sanity.check.e2e.ts
================================================
import { expect, test } from '@playwright/test';

// Checkly is a tool used to monitor deployed environments, such as production or preview environments.
// It runs end-to-end tests with the `.check.e2e.ts` extension after each deployment to ensure that the environment is up and running.
// With Checkly, you can monitor your production environment and run `*.check.e2e.ts` tests regularly at a frequency of your choice.
// If the tests fail, Checkly will notify you via email, Slack, or other channels of your choice.
// On the other hand, E2E tests ending with `*.e2e.ts` are only run before deployment.
// You can run them locally or on CI to ensure that the application is ready for deployment.

// BaseURL needs to be explicitly defined in the test file.
// Otherwise, Checkly runtime will throw an exception: `CHECKLY_INVALID_URL: Only URL's that start with http(s)`
// You can't use `goto` function directly with a relative path like with other *.e2e.ts tests.
// Check the example at https://feedback.checklyhq.com/changelog/new-changelog-436

test.describe('Sanity', () => {
  test.describe('Static pages', () => {
    test('should display the homepage', async ({ page, baseURL }) => {
      await page.goto(`${baseURL}/`);

      await expect(
        page.getByRole('heading', { name: 'Boilerplate Code for Your Next.js Project with Tailwind CSS' }),
      ).toBeVisible();
    });

    test('should navigate to the about page', async ({ page, baseURL }) => {
      await page.goto(`${baseURL}/`);

      await page.getByRole('link', { name: 'About' }).click();

      await expect(page).toHaveURL(/about$/);

      await expect(
        page.getByText('Welcome to our About page', { exact: false }),
      ).toBeVisible();
    });

    test('should navigate to the portfolio page', async ({ page, baseURL }) => {
      await page.goto(`${baseURL}/`);

      await page.getByRole('link', { name: 'Portfolio' }).click();

      await expect(page).toHaveURL(/portfolio$/);

      await expect(
        page.locator('main').getByRole('link', { name: /^Portfolio/ }),
      ).toHaveCount(6);
    });
  });
});

================================================
FILE: tests/e2e/Visual.e2e.ts
================================================
import { expect, takeSnapshot, test } from '@chromatic-com/playwright';

test.describe('Visual testing', () => {
  test.describe('Static pages', () => {
    test('should take screenshot of the homepage', async ({ page }, testInfo) => {
      await page.goto('/');

      await expect(
        page.getByRole('heading', { name: 'Boilerplate Code for Your Next.js Project with Tailwind CSS' }),
      ).toBeVisible();

      await takeSnapshot(page, testInfo);
    });

    test('should take screenshot of the portfolio page', async ({ page }, testInfo) => {
      await page.goto('/portfolio');

      await expect(
        page.getByText('Welcome to my portfolio page!'),
      ).toBeVisible();

      await takeSnapshot(page, testInfo);
    });

    test('should take screenshot of the about page', async ({ page }, testInfo) => {
      await page.goto('/about');

      await expect(
        page.getByText('Welcome to our About page!'),
      ).toBeVisible();

      await takeSnapshot(page, testInfo);
    });

    test('should take screenshot of the portfolio details page', async ({ page }, testInfo) => {
      await page.goto('/portfolio/2');

      await expect(
        page.getByText('Created a set of promotional'),
      ).toBeVisible();

      await takeSnapshot(page, testInfo);
    });

    test('should take screenshot of the French homepage', async ({ page }, testInfo) => {
      await page.goto('/fr');

      await expect(
        page.getByRole('heading', { name: 'Code de démarrage pour Next.js avec Tailwind CSS' }),
      ).toBeVisible();

      await takeSnapshot(page, testInfo);
    });
  });
});

================================================
FILE: tests/integration/Counter.spec.ts
================================================
import { faker } from '@faker-js/faker';
import { expect, test } from '@playwright/test';

test.describe('Counter', () => {
  test.describe('Basic database operations', () => {
    test('shouldn\'t increment the counter with an invalid input', async ({ page }) => {
      const counter = await page.request.put('/api/counter', {
        data: {
          increment: 'incorrect',
        },
      });

      expect(counter.status()).toBe(422);
    });

    test('shouldn\'t increment the counter with a negative number', async ({ page }) => {
      const counter = await page.request.put('/api/counter', {
        data: {
          increment: -1,
        },
      });

      expect(counter.status()).toBe(422);
    });

    test('shouldn\'t increment the counter with a number greater than 3', async ({ page }) => {
      const counter = await page.request.put('/api/counter', {
        data: {
          increment: 5,
        },
      });

      expect(counter.status()).toBe(422);
    });

    test('should increment the counter and update the counter correctly', async ({ page }) => {
      // `x-e2e-random-id` is used for end-to-end testing to make isolated requests
      // The default value is 0 when there is no `x-e2e-random-id` header
      const e2eRandomId = faker.number.int({ max: 1000000 });

      let counter = await page.request.put('/api/counter', {
        data: {
          increment: 1,
        },
        headers: {
          'x-e2e-random-id': e2eRandomId.toString(),
        },
      });
      let counterJson = await counter.json();

      expect(counter.status()).toBe(200);

      // Save the current count
      const count = counterJson.count;

      counter = await page.request.put('/api/counter', {
        data: {
          increment: 2,
        },
        headers: {
          'x-e2e-random-id': e2eRandomId.toString(),
        },
      });
      counterJson = await counter.json();

      expect(counter.status()).toBe(200);
      expect(counterJson.count).toEqual(count + 2);

      counter = await page.request.put('/api/counter', {
        data: {
          increment: 1,
        },
        headers: {
          'x-e2e-random-id': e2eRandomId.toString(),
        },
      });
      counterJson = await counter.json();

      expect(counter.status()).toBe(200);
      expect(counterJson.count).toEqual(count + 3);
    });
  });
});

================================================
FILE: .github/dependabot.yml
================================================
version: 2
updates:
  # Enable version updates for npm
  - package-ecosystem: npm
    # Look for `package.json` and `lock` files in the root directory
    directory: /
    # Check the npm registry for updates every month
    schedule:
      interval: monthly
      time: '06:00'
    # Limit the number of open pull requests for version updates to 1
    open-pull-requests-limit: 1
    # Commit message format
    commit-message:
      # Prefix all commit messages and pull request titles with "chore"
      prefix: chore
    # Group updates into a single pull request
    groups:
      # The name of the group (identifier)
      npm-deps:
        update-types: [minor, patch]
    # Only allow minor and patch updates
    ignore:
      - dependency-name: '*'
        update-types: ['version-update:semver-major']

  # Enable version updates for GitHub Actions
  - package-ecosystem: github-actions
    # Look for `.github/workflows` in the root directory
    directory: /
    # Check GitHub Actions for updates every month
    schedule:
      interval: monthly
      time: '06:05'
    # Limit the number of open pull requests for version updates to 1
    open-pull-requests-limit: 1
    # Commit message format
    commit-message:
      # Prefix all commit messages and pull request titles with "chore"
      prefix: chore

================================================
FILE: .github/FUNDING.yml
================================================
github: ixartz
custom:
  - 'https://nextjs-boilerplate.com/pro-saas-starter-kit'
  - 'https://nextlessjs.com'

================================================
FILE: .github/actions/setup-project/action.yml
================================================
name: Setup Node.js and dependencies
description: Setup Node.js environment with npm dependencies

inputs:
  node-version:
    description: Node.js version
    required: true
  restore-nextjs-cache:
    description: Whether to restore Next.js build cache
    required: false
    default: 'false'

runs:
  using: composite
  steps:
    - name: Use Node.js ${{ inputs.node-version }}
      uses: actions/setup-node@v6
      with:
        node-version: ${{ inputs.node-version }}
        cache: npm

    - name: Restore or cache node_modules
      id: cache-node-modules
      uses: actions/cache@v4
      with:
        path: node_modules
        key: node-modules-${{ inputs.node-version }}-${{ hashFiles('package-lock.json') }}

    - name: Install dependencies
      if: steps.cache-node-modules.outputs.cache-hit != 'true'
      shell: bash
      run: npm ci

    - name: Restore Next.js build output
      if: inputs.restore-nextjs-cache == 'true'
      uses: actions/cache/restore@v4
      with:
        path: |
          .next
        key: nextjs-build-${{ inputs.node-version }}-${{ github.sha }}
        fail-on-cache-miss: true

================================================
FILE: .github/workflows/checkly.yml
================================================
name: Checkly

on: [deployment_status]

env:
  CHECKLY_API_KEY: ${{ secrets.CHECKLY_API_KEY }}
  CHECKLY_ACCOUNT_ID: ${{ secrets.CHECKLY_ACCOUNT_ID }}
  CHECKLY_TEST_ENVIRONMENT: ${{ github.event.deployment_status.environment }}

jobs:
  test-e2e:
    strategy:
      matrix:
        node-version: [22.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    # Only run when the deployment was successful
    if: github.event.deployment_status.state == 'success'

    name: Test E2E on Checkly
    runs-on: ubuntu-latest
    timeout-minutes: 10

    steps:
      - uses: actions/checkout@v5
        with:
          ref: '${{ github.event.deployment_status.deployment.ref }}'
          fetch-depth: 0

      - name: Set branch name # workaround to detect branch name in "deployment_status" actions
        run: echo "CHECKLY_TEST_REPO_BRANCH=$(git show -s --pretty=%D HEAD | tr -s ',' '\n' | sed 's/^ //' | grep -e 'origin/' | head -1 | sed 's/\origin\///g')" >> $GITHUB_ENV

      - name: Set up Node.js environment
        uses: ./.github/actions/setup-project
        with:
          node-version: ${{ matrix.node-version }}

      - name: Run checks # run the checks passing in the ENVIRONMENT_URL and recording a test session.
        id: run-checks
        run: npx dotenv -c production -- npx checkly test --reporter=github --record
        env:
          VERCEL_BYPASS_TOKEN: ${{ secrets.VERCEL_BYPASS_TOKEN }}
          ENVIRONMENT_URL: ${{ github.event.deployment_status.environment_url }}

      - name: Create summary # export the markdown report to the job summary.
        id: create-summary
        run: cat checkly-github-report.md > $GITHUB_STEP_SUMMARY

      - name: Deploy checks # if the test run was successful and we are on Production, deploy the checks
        id: deploy-checks
        if: steps.run-checks.outcome == 'success' && github.event.deployment_status.environment == 'Production'
        run: npx dotenv -c production -- npx checkly deploy --force

================================================
FILE: .github/workflows/CI.yml
================================================
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    strategy:
      matrix:
        node-version: [22.x, 24.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    name: Build with ${{ matrix.node-version }}
    runs-on: ubuntu-latest
    timeout-minutes: 10

    steps:
      - uses: actions/checkout@v5

      - name: Set up Node.js environment
        uses: ./.github/actions/setup-project
        with:
          node-version: ${{ matrix.node-version }}

      - name: Restore or cache Next.js build
        uses: actions/cache@v4
        with:
          path: |
            .next/cache
          # Generate a new cache whenever packages or source files change.
          key: nextjs-${{ matrix.node-version }}-${{ hashFiles('**/package-lock.json') }}-${{ hashFiles('src/**') }}

      - name: Build Next.js
        run: npm run build-local
        env:
          NEXT_PUBLIC_SENTRY_DISABLED: 'true' # Only upload Sentry source maps in deployment

      - if: matrix.node-version == '22.x' && success()
        name: Cache Next.js build output
        uses: actions/cache/save@v4
        with:
          path: |
            .next
          key: nextjs-build-${{ matrix.node-version }}-${{ github.sha }}

  static:
    strategy:
      matrix:
        node-version: [22.x]

    name: Run static checks
    runs-on: ubuntu-latest
    timeout-minutes: 10

    steps:
      - uses: actions/checkout@v5
        with:
          fetch-depth: 0 # Retrieve Git history, needed to verify commits

      - name: Set up Node.js environment
        uses: ./.github/actions/setup-project
        with:
          node-version: ${{ matrix.node-version }}

      - if: github.event_name == 'pull_request'
        name: Validate all commits from PR
        run: npx commitlint --from ${{ github.event.pull_request.base.sha }} --to ${{ github.event.pull_request.head.sha }} --verbose

      - name: Linter
        run: npm run lint

      - name: Type checking
        run: npm run check:types

      - name: Check dependencies
        run: npm run check:deps

      - name: I18n check
        run: npm run check:i18n

  unit:
    strategy:
      matrix:
        node-version: [22.x]

    name: Run unit tests
    runs-on: ubuntu-latest
    timeout-minutes: 10
    needs: [build]

    steps:
      - uses: actions/checkout@v5

      - name: Set up Node.js environment
        uses: ./.github/actions/setup-project
        with:
          node-version: ${{ matrix.node-version }}

      - name: Run unit tests
        uses: docker://mcr.microsoft.com/playwright:v1.56.1
        with:
          args: npm run test -- --coverage

      - name: Upload coverage reports to Codecov
        uses: codecov/codecov-action@v5
        env:
          CODECOV_TOKEN: ${{ secrets.CODECOV_TOKEN }}

  storybook:
    strategy:
      matrix:
        node-version: [22.x]

    name: Run Storybook
    runs-on: ubuntu-latest
    timeout-minutes: 10
    needs: [build]

    steps:
      - uses: actions/checkout@v5

      - name: Set up Node.js environment
        uses: ./.github/actions/setup-project
        with:
          node-version: ${{ matrix.node-version }}

      - name: Run storybook tests
        uses: docker://mcr.microsoft.com/playwright:v1.56.1
        with:
          args: npm run storybook:test

  e2e:
    strategy:
      matrix:
        node-version: [22.x]

    name: Run E2E tests
    runs-on: ubuntu-latest
    timeout-minutes: 10
    needs: [build]

    steps:
      - uses: actions/checkout@v5
        with:
          fetch-depth: 0 # For chromatic

      - name: Set up Node.js environment
        uses: ./.github/actions/setup-project
        with:
          node-version: ${{ matrix.node-version }}
          restore-nextjs-cache: true

      - name: Run E2E tests
        uses: docker://mcr.microsoft.com/playwright:v1.56.1
        with:
          args: sh -c "HOME=/root npm run test:e2e" # Set HOME to /root to avoid Playwright error with Firebox
        env:
          CLERK_SECRET_KEY: ${{ secrets.CLERK_SECRET_KEY }}

      - name: Fix test results permission # Give permissions to test results needed by Chromatic
        run: |
          sudo chmod -R 777 test-results

      - name: Run visual regression tests
        uses: chromaui/action@v13
        with:
          playwright: true
          exitOnceUploaded: true # Speed up by skipping the build results
          outputDir: storybook-static
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}

      - name: Upload test results
        uses: actions/upload-artifact@v5
        if: always()
        with:
          name: test-results
          path: test-results/
          retention-days: 7

  synchronize-with-crowdin:
    name: GitHub PR synchronize with Crowdin
    runs-on: ubuntu-latest
    timeout-minutes: 10

    needs: [build, static]
    if: github.event_name == 'pull_request'

    steps:
      - uses: actions/checkout@v5
        with:
          ref: ${{ github.event.pull_request.head.sha }} # Crowdin Actions needs to push commits to the PR branch, checkout HEAD commit instead of merge commit
          fetch-depth: 0

      - name: Crowdin action
        uses: crowdin/github-action@v2
        with:
          upload_sources: true
          upload_translations: true
          download_translations: true
          create_pull_request: false
          localization_branch_name: ${{ github.head_ref || github.ref_name }} # explanation here: https://stackoverflow.com/a/71158878
          commit_message: 'chore: new Crowdin translations by GitHub Action'
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          CROWDIN_PROJECT_ID: ${{ secrets.CROWDIN_PROJECT_ID }}
          CROWDIN_PERSONAL_TOKEN: ${{ secrets.CROWDIN_PERSONAL_TOKEN }}

================================================
FILE: .github/workflows/crowdin.yml
================================================
name: Crowdin Action

on:
  push:
    branches: [main] # Run on push to the main branch
  schedule:
    - cron: '0 5 * * *' # Run every day at 5am
  workflow_dispatch: # Run manually

jobs:
  synchronize-with-crowdin:
    name: Synchronize with Crowdin
    runs-on: ubuntu-latest
    timeout-minutes: 10

    steps:
      - uses: actions/checkout@v5

      - name: Crowdin action
        uses: crowdin/github-action@v2
        with:
          upload_sources: true
          upload_translations: true
          download_translations: true
          localization_branch_name: l10n_crowdin_translations
          create_pull_request: true
          pull_request_title: New Crowdin Translations
          pull_request_body: 'New Crowdin translations by [Crowdin GH Action](https://github.com/crowdin/github-action)'
          pull_request_base_branch_name: main
          commit_message: 'chore: new Crowdin translations by GitHub Action'
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          CROWDIN_PROJECT_ID: ${{ secrets.CROWDIN_PROJECT_ID }}
          CROWDIN_PERSONAL_TOKEN: ${{ secrets.CROWDIN_PERSONAL_TOKEN }}

================================================
FILE: .github/workflows/release.yml
================================================
name: Release

on:
  workflow_run:
    workflows: [CI]
    types:
      - completed
    branches:
      - main

jobs:
  release:
    strategy:
      matrix:
        node-version: [22.x]

    name: Create a new release
    runs-on: ubuntu-latest
    timeout-minutes: 10

    permissions:
      contents: write # to be able to publish a GitHub release
      issues: write # to be able to comment on released issues
      pull-requests: write # to be able to comment on released pull requests

    steps:
      - uses: actions/checkout@v5
        with:
          fetch-depth: 0

      - name: Set up Node.js environment
        uses: ./.github/actions/setup-project
        with:
          node-version: ${{ matrix.node-version }}

      - name: Verify the integrity of provenance attestations and registry signatures for installed dependencies
        run: npm audit signatures

      - name: Release
        run: npx semantic-release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

================================================
FILE: .storybook/main.ts
================================================
import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
  staticDirs: [
    '../public',
  ],
  features: {
    experimentalRSC: true,
  },
  core: {
    disableTelemetry: true,
  },
};
export default config;

================================================
FILE: .storybook/preview.ts
================================================
import type { Preview } from '@storybook/nextjs-vite';
import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true, // Enable App Router support
    },
    docs: {
      toc: true, // Enable table of contents
    },
    a11y: {
      test: 'todo', // Make a11y tests optional
    },
  },
  tags: ['autodocs'],
};

export default preview;

================================================
FILE: .storybook/vitest.config.mts
================================================
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    // The plugin will run tests for the stories defined in your Storybook config
    // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
    storybookTest(),
  ],
  test: {
    projects: [
      {
        extends: true,
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            instances: [{ browser: 'chromium' }],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
});

================================================
FILE: .storybook/vitest.setup.ts
================================================
import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview';
import { setProjectAnnotations } from '@storybook/nextjs-vite';
import * as projectAnnotations from './preview';

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
setProjectAnnotations([a11yAddonAnnotations, projectAnnotations]);
