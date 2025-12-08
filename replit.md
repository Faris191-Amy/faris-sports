# Faris Sport E-Commerce Platform

## Overview

Faris Sport is an Arabic-language e-commerce platform for sports equipment targeting the Egyptian market. The application provides a full shopping experience with product browsing, cart management, and checkout functionality. The platform features RTL (Right-to-Left) layout support for Arabic content, Egyptian Pound (EGP) currency display, and a modern sports-themed design inspired by Nike and Adidas.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: 
  - TanStack React Query for server state
  - React Context for client state (cart, theme)
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Build Tool**: Vite with React plugin

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful API with `/api` prefix
- **Development**: Hot module replacement via Vite middleware

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Validation**: Zod with drizzle-zod integration
- **Current Storage**: In-memory storage implementation (MemStorage class)
- **Database Ready**: Schema defined for PostgreSQL migration

### Key Design Patterns
- **Monorepo Structure**: Client, server, and shared code in single repository
- **Shared Types**: Schema types shared between frontend and backend via `@shared/*` path alias
- **Component-First**: UI built with reusable shadcn/ui components
- **Context Providers**: App wrapped with QueryClient, Theme, Cart, and Tooltip providers

### Directory Structure
```
client/           # React frontend application
  src/
    components/   # Reusable UI components
    pages/        # Route page components
    lib/          # Utilities, contexts, data
    hooks/        # Custom React hooks
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # Data access layer
shared/           # Shared TypeScript types and schemas
  schema.ts       # Drizzle schema definitions
```

### Localization
- Primary language: Arabic (RTL layout)
- HTML dir="rtl" and lang="ar" configured
- Cairo font family for Arabic typography
- Dual-language product data (name/nameAr, description/descriptionAr)

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via DATABASE_URL environment variable)
- **Drizzle Kit**: Database migrations and schema push

### UI Libraries
- **Radix UI**: Accessible component primitives (dialog, dropdown, tabs, etc.)
- **Lucide React**: Icon library
- **React Icons**: Additional icon sets (social media icons)
- **Embla Carousel**: Carousel/slider functionality

### Build & Development
- **Vite**: Frontend build tool and dev server
- **esbuild**: Server-side bundling for production
- **tsx**: TypeScript execution for development

### Session & Storage
- **connect-pg-simple**: PostgreSQL session store (available but not currently active)
- **express-session**: Session middleware support

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **tailwind-merge**: Intelligent class merging