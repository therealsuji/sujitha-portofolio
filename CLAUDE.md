# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
bun dev          # Start development server on port 3000
bun build        # Build for production
bun start        # Start production server
bun lint         # Run ESLint
```

### Database
```bash
bun studio       # Open Drizzle Studio GUI on port 42069
bun db:generate  # Generate database migrations from schema changes
bun db:migrate   # Apply database migrations
bun db:reset     # Reset database (drops all tables)
```

## Architecture Overview

This is a Next.js 15 portfolio website with an integrated blog CMS, using App Router and server-side authentication.

### Tech Stack
- **Next.js 15.0.0-rc.0** with App Router and experimental PPR
- **React 19.0.0-rc** with experimental React Compiler
- **TypeScript** with strict mode
- **Tailwind CSS** for styling with dark/light theme support
- **PostgreSQL** + **Drizzle ORM** for database
- **Lucia** for authentication
- **TipTap** for rich text editing

### Key Architectural Decisions

1. **Authentication Flow**: Server-side authentication using Lucia with session cookies. Protected routes are in `app/(authenticated)/` group.

2. **Database Schema**: Located in `lib/schema.ts`. Uses Drizzle ORM with PostgreSQL. Main tables:
   - `users` - User accounts with email/password auth
   - `sessions` - User sessions managed by Lucia
   - `posts` - Blog posts with rich content, slugs, and metadata

3. **Server Actions**: Type-safe server actions using `next-safe-action` library. Actions are in `/actions` directory and use `safe-action.ts` wrapper for authentication checks.

4. **Component Organization**:
   - `/app/components` - App-specific components (Navbar, AboutMe)
   - `/components/ui` - Reusable UI components built on Radix UI primitives
   - `/components/tiptap` - Rich text editor components

5. **Blog System**:
   - Public posts at `/posts/[slug]`
   - Admin management at `/blog` (authenticated)
   - Post creation/editing uses TipTap editor with extensions for code blocks, syntax highlighting, and rich formatting
   - Slug-based routing with automatic slug generation from titles

### Development Workflow

1. **Environment Variables**: Uses `@t3-oss/env-nextjs` for type-safe env vars. Required variables are defined in `env.ts`.

2. **Database Changes**:
   - Modify schema in `lib/schema.ts`
   - Run `bun db:generate` to create migration
   - Run `bun db:migrate` to apply changes

3. **Adding UI Components**: Use existing Radix-based components from `/components/ui`. Follow the established pattern of using `cn()` utility for className merging.

4. **Creating Server Actions**: Use the `authAction` wrapper from `lib/safe-action.ts` for authenticated actions.

5. **Theme Support**: Components should use CSS variables defined in `globals.css` for dark/light theme compatibility.

### Important Files

- `lib/auth.ts` - Authentication setup and session management
- `lib/db.ts` - Database connection
- `lib/schema.ts` - Database schema definitions
- `lib/safe-action.ts` - Server action wrappers
- `middleware.ts` - Authentication middleware
- `env.ts` - Environment variable validation