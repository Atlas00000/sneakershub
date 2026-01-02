# 👟 SneakersHub: Real-Time 3D Sneaker Configurator

<div align="center">

**A cutting-edge 3D web platform for customizing sneakers in real-time with photorealistic rendering**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.160-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-4.18-green?style=for-the-badge&logo=express)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-Private-red?style=for-the-badge)](LICENSE)

[Features](#-features) • [Quick Start](#-quick-start) • [Architecture](#-architecture) • [Documentation](#-documentation) • [Testing](#-testing)

</div>

---

## 📋 Table of Contents

- [Executive Summary](#-executive-summary)
- [Overview](#-overview)
- [Features](#-features)
- [Architecture](#-architecture)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Development](#-development)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Documentation](#-documentation)
- [License](#-license)

---

## 🎯 Executive Summary

**SneakersHub** is a real-time 3D sneaker customization platform that enables users to design and visualize custom footwear with instant visual feedback. Built with modern web technologies, it features a dual-mode system supporting both **Blank Canvas** (unbranded) and **Brand Collection** (branded models) modes for maximum flexibility and learning value.

### Key Highlights

- ⚡ **Real-time Rendering** - Instant material and component updates (<200ms)
- 🎨 **Photorealistic Graphics** - PBR materials with HDR environment lighting
- 📱 **Responsive Design** - Optimized for desktop and mobile devices
- 🚀 **Performance Optimized** - Lazy loading, caching, and efficient resource management
- 🧪 **Well-Tested** - Comprehensive test coverage following industry best practices
- 🏗️ **Modular Architecture** - Clean separation of concerns with reusable components

---

## 🎨 Overview

### Vision Statement

Enable users to design custom sneakers in real-time with instant visual feedback, high-quality 3D visualization, and seamless e-commerce integration capabilities.

### Core Value Propositions

| Feature | Description |
|---------|-------------|
| **Real-time Customization** | Instant visual updates as users make changes (<200ms response time) |
| **Photorealistic Rendering** | High-quality 3D visualization with PBR materials and HDR lighting |
| **Component-Based System** | Granular control over individual shoe components (sole, upper, laces, etc.) |
| **Performance Optimized** | Efficient loading with lazy loading, texture caching, and resource management |
| **Mobile-Ready** | Responsive design with dedicated mobile layout and touch interactions |
| **Type-Safe** | Full TypeScript coverage for robust, maintainable code |

### Dual-Mode System

The platform supports two distinct modes:

#### 🎨 Blank Canvas Mode
- **Purpose**: Full creative freedom with unbranded sneaker models
- **Benefits**: 
  - No brand constraints - experiment freely
  - Faster iteration and learning
  - Perfect for understanding core systems
  - Clean starting point for customization
- **Use Case**: Learning, experimentation, portfolio showcase

#### 🏷️ Brand Collection Mode
- **Purpose**: Customize real-world branded sneaker models
- **Benefits**:
  - Real-world constraints and brand guidelines
  - Production-like scenarios
  - Educational comparison with blank canvas
  - Demonstrates understanding of brand systems
- **Use Case**: Real-world application, portfolio diversity

---

## ✨ Features

### 🎨 Material System

- **PBR Materials** - Physically Based Rendering for realistic materials
- **Texture Maps** - Support for albedo, normal, roughness, and metallic maps
- **Material Library** - Extensive collection of leather, rubber, fabric, metal, and premium materials
- **Real-time Swapping** - Instant material application with visual feedback
- **Category Organization** - Materials organized by type with search and filtering
- **Price Integration** - Dynamic pricing based on material selection

### 🎯 Component Customization

- **Automatic Detection** - Smart component identification from mesh names
- **Component Types** - Sole, Upper, Midsole, Outsole, Laces, Logo, Heel Tab, Tongue, Eyelets, Lining
- **Visual Feedback** - Subtle highlighting for hovered and selected components
- **Component Labels** - Hover labels showing component names in real-time
- **Click-to-Select** - Interactive component selection via mouse click
- **Multi-Mesh Support** - Applies materials to all meshes of a component type

### 🌐 Environment & Models

- **HDR Backgrounds** - Realistic lighting with High Dynamic Range images
- **Multiple Models** - Switch between different sneaker models
- **Dynamic Scaling** - Automatic and manual model scaling
- **Camera Controls** - Orbit, zoom, and pan controls
- **Model Persistence** - Remembers selected model across sessions (localStorage)

### 🚀 Performance Features

- **Lazy Loading** - Components and textures loaded on-demand
- **Texture Caching** - Efficient texture loading and caching
- **Code Splitting** - Dynamic imports for reduced initial bundle size
- **Debounced Search** - Optimized search with debouncing
- **React Query** - API response caching and background refetching
- **Resource Cleanup** - Proper disposal of Three.js resources

### 🎭 User Interface

- **Glassmorphic Design** - Modern, sleek UI with glassmorphism effects
- **Animated Transitions** - Smooth animations with Framer Motion
- **Responsive Layout** - Dedicated mobile and desktop layouts
- **Error Boundaries** - Graceful error handling with fallback UI
- **Loading States** - Skeleton loaders and progress indicators
- **Accessibility** - Keyboard navigation and ARIA labels

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     Client Application (Next.js)                 │
│                                                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐           │
│  │   Pages     │  │ Components  │  │    Hooks    │           │
│  │             │  │             │  │             │           │
│  │ • Home      │  │ • Viewer    │  │ • Model     │           │
│  │ • Config    │  │ • Selectors │  │ • Material  │           │
│  │ • Branded   │  │ • Library   │  │ • Component │           │
│  │ • Blank     │  │ • UI        │  │ • Hover     │           │
│  └─────────────┘  └─────────────┘  └─────────────┘           │
│                                                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐           │
│  │   Stores    │  │    Libs     │  │    Data     │           │
│  │             │  │             │  │             │           │
│  │ • Zustand   │  │ • Three.js  │  │ • Materials │           │
│  │ • State     │  │ • Material  │  │ • Models    │           │
│  │             │  │ • Component │  │ • Background│           │
│  └─────────────┘  └─────────────┘  └─────────────┘           │
└─────────────────────────────────────────────────────────────────┘
                            ↕ HTTP/REST API
┌─────────────────────────────────────────────────────────────────┐
│                    Server API (Express.js)                      │
│                                                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐           │
│  │   Routes    │  │  Services   │  │   Utils     │           │
│  │             │  │             │  │             │           │
│  │ • Materials │  │ • R2 Client │  │ • Logger    │           │
│  │ • Health    │  │ • File List │  │ • Parsing   │           │
│  └─────────────┘  └─────────────┘  └─────────────┘           │
└─────────────────────────────────────────────────────────────────┘
                            ↕ S3-Compatible API
┌─────────────────────────────────────────────────────────────────┐
│              Cloudflare R2 (Object Storage)                     │
│                                                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐           │
│  │   Models    │  │  Textures   │  │ Backgrounds │           │
│  │             │  │             │  │             │           │
│  │ • .glb      │  │ • Materials │  │ • .hdr      │           │
│  │ • 3D Files  │  │ • Maps      │  │ • HDR Maps  │           │
│  └─────────────┘  └─────────────┘  └─────────────┘           │
└─────────────────────────────────────────────────────────────────┘
```

### System Components

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Frontend** | Next.js 14 (App Router) | React framework with SSR/SSG |
| **3D Rendering** | Three.js + React Three Fiber | 3D graphics and scene management |
| **State Management** | Zustand | Lightweight, performant state management |
| **API Client** | React Query | API caching and state management |
| **Backend API** | Express.js | RESTful API server |
| **Storage** | Cloudflare R2 | Object storage for assets |
| **Styling** | Tailwind CSS | Utility-first CSS framework |
| **Animations** | Framer Motion | Smooth UI animations |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **pnpm** ([Install](https://pnpm.io/installation))
- **Docker & Docker Compose** (optional, for local services)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fashon_config
   ```

2. **Install dependencies**

   **Client:**
   ```bash
   cd client
   pnpm install
   ```

   **Server:**
   ```bash
   cd server
   pnpm install
   ```

3. **Set up environment variables**

   **Client** (`.env.local`):
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001
   NODE_ENV=development
   ```

   **Server** (`.env`):
   ```env
   PORT=3001
   NODE_ENV=development
   CORS_ORIGIN=http://localhost:3000
   CLOUDFLARE_R2_BUCKET_NAME=threejs-assets
   CLOUDFLARE_R2_ENDPOINT=https://your-endpoint.r2.cloudflarestorage.com
   CLOUDFLARE_R2_ACCESS_KEY_ID=your-access-key
   CLOUDFLARE_R2_SECRET_ACCESS_KEY=your-secret-key
   R2_PUBLIC_URL=https://pub-your-bucket.r2.dev
   ```

4. **Start development servers**

   **Terminal 1 - Client:**
   ```bash
   cd client
   pnpm dev
   # → http://localhost:3000
   ```

   **Terminal 2 - Server:**
   ```bash
   cd server
   pnpm dev
   # → http://localhost:3001
   ```

   **Optional - Docker Services:**
   ```bash
   docker-compose up -d
   # Starts PostgreSQL, Redis, and pgAdmin
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

---

## 📁 Project Structure

```
fashon_config/
├── 📂 client/                    # Next.js frontend application
│   ├── 📂 app/                  # Next.js App Router
│   │   ├── configurator/        # Configurator pages
│   │   │   ├── branded/         # Brand collection mode
│   │   │   └── blank/           # Blank canvas mode
│   │   ├── layout.tsx           # Root layout with providers
│   │   └── page.tsx             # Home page
│   ├── 📂 components/           # React components
│   │   ├── configurator/        # Configurator UI components
│   │   ├── viewer/              # 3D viewer components
│   │   ├── layout/              # Layout components
│   │   ├── ui/                  # Reusable UI components
│   │   ├── error/               # Error boundary components
│   │   └── loading/             # Loading components
│   ├── 📂 hooks/                # Custom React hooks
│   ├── 📂 lib/                  # Utility libraries
│   │   ├── api/                 # API client
│   │   ├── three/               # Three.js utilities
│   │   └── storage/             # Storage utilities
│   ├── 📂 stores/               # Zustand stores
│   ├── 📂 types/                # TypeScript type definitions
│   ├── 📂 data/                 # Static data (JSON)
│   └── 📂 public/               # Static assets
│
├── 📂 server/                   # Express.js backend API
│   ├── 📂 src/
│   │   ├── routes/              # API route handlers
│   │   ├── utils/               # Utility functions
│   │   └── server.ts            # Express server setup
│   ├── 📂 dist/                 # Compiled JavaScript
│   └── .env                     # Server environment variables
│
├── 📂 scripts/                  # Utility scripts
│   ├── generate-materials-from-r2.js
│   ├── validate-model-names.js
│   └── analyze-models.js
│
├── 📄 docker-compose.yml        # Docker services configuration
├── 📄 PROJECT_REPORT.md         # Comprehensive project documentation
├── 📄 DEPLOYMENT.md             # Deployment guide
├── 📄 MODEL_PREPARATION_TEMPLATE.md  # Model preparation guide
└── 📄 README.md                 # This file
```

For detailed documentation:
- 📖 **Client Documentation**: See [`client/README.md`](./client/README.md)
- 📖 **Server Documentation**: See [`server/README.md`](./server/README.md)

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React framework with App Router | 14+ |
| **React** | UI library | 18+ |
| **TypeScript** | Type safety | 5.2+ |
| **Three.js** | 3D graphics library | 0.160+ |
| **React Three Fiber** | React renderer for Three.js | 8.15+ |
| **@react-three/drei** | Three.js helpers | 9.88+ |
| **Zustand** | State management | 4.4+ |
| **React Query** | API caching and state management | 5.90+ |
| **Tailwind CSS** | Utility-first CSS framework | 3.3+ |
| **Framer Motion** | Animation library | 12.23+ |

### Backend

| Technology | Purpose | Version |
|------------|---------|---------|
| **Express.js** | Web server framework | 4.18+ |
| **TypeScript** | Type safety | 5.2+ |
| **AWS SDK (S3)** | Cloudflare R2 client | 3.958+ |
| **dotenv** | Environment variables | 17.2+ |
| **CORS** | Cross-origin requests | 2.8+ |

### Infrastructure

- **Cloudflare R2** - Object storage for models, textures, and HDR files
- **Docker** - Local development services (PostgreSQL, Redis, pgAdmin)
- **Vercel** - Client deployment platform
- **Railway** - Server deployment platform

---

## 💻 Development

### Available Scripts

**Client:**
```bash
pnpm dev      # Start development server (port 3000)
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

**Server:**
```bash
pnpm dev      # Start development server with hot reload (port 3001)
pnpm build    # Compile TypeScript to JavaScript
pnpm start    # Start production server
```

### Development Workflow

1. **Make changes** to code
2. **Hot reload** automatically updates the browser
3. **Check console** for errors and component detection logs
4. **Test materials** by selecting components and applying materials
5. **Verify** model scaling and positioning
6. **Run tests** to ensure nothing is broken

### Debugging

- **Browser Console** - Check for component detection logs
- **Network Tab** - Monitor texture and model loading
- **React DevTools** - Inspect component state
- **React Query DevTools** - Monitor API cache state
- **Three.js Inspector** - Debug 3D scene (if installed)

---

## 🧪 Testing

### Testing Philosophy

We follow industry best practices for testing, ensuring code quality, maintainability, and reliability:

- **Test-Driven Development (TDD)** - Write tests before implementation when possible
- **Comprehensive Coverage** - Aim for >80% code coverage
- **Multiple Test Types** - Unit, integration, and end-to-end tests
- **Automated Testing** - CI/CD pipeline runs tests on every commit
- **Performance Testing** - Monitor rendering performance and bundle sizes

### Test Structure

```
tests/
├── unit/              # Unit tests for individual functions/components
├── integration/       # Integration tests for component interactions
├── e2e/              # End-to-end tests for user workflows
└── utils/            # Test utilities and helpers
```

### Testing Tools

| Tool | Purpose | Usage |
|------|---------|-------|
| **Jest** | Test runner and assertion library | Unit and integration tests |
| **React Testing Library** | Component testing utilities | React component tests |
| **Playwright** | End-to-end testing framework | E2E user flow tests |
| **Vitest** | Fast unit test framework | Alternative to Jest (optional) |
| **Testing Library** | DOM testing utilities | DOM querying and assertions |

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Run E2E tests
pnpm test:e2e
```

### Test Categories

#### Unit Tests

Test individual functions, hooks, and utilities in isolation:

```typescript
// Example: Testing a utility function
describe('componentMapper', () => {
  it('should map mesh name to component type', () => {
    expect(mapMeshToComponent('Upper_Mesh')).toBe(ComponentType.UPPER);
  });
});
```

#### Component Tests

Test React components with React Testing Library:

```typescript
// Example: Testing a component
describe('MaterialSwatch', () => {
  it('should render material color correctly', () => {
    render(<MaterialSwatch material={mockMaterial} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
```

#### Integration Tests

Test component interactions and state management:

```typescript
// Example: Testing material application
describe('Material Swapping', () => {
  it('should apply material to all meshes of component type', async () => {
    // Test implementation
  });
});
```

#### E2E Tests

Test complete user workflows:

```typescript
// Example: Testing material selection workflow
test('user can select and apply material', async ({ page }) => {
  await page.goto('/');
  await page.click('[data-testid="material-swatch"]');
  await expect(page.locator('.material-applied')).toBeVisible();
});
```

### Test Coverage Goals

| Category | Target Coverage |
|----------|----------------|
| **Utilities** | >90% |
| **Hooks** | >85% |
| **Components** | >80% |
| **API Routes** | >80% |
| **Overall** | >80% |

### Continuous Integration

Tests run automatically on:
- **Pull Requests** - All tests must pass before merge
- **Main Branch** - Full test suite on every push
- **Scheduled Runs** - Nightly builds for regression testing

---

## 🚀 Deployment

### Client (Vercel)

1. **Build the project**
   ```bash
   cd client
   pnpm build
   ```

2. **Deploy**
   - Connect repository to Vercel
   - Set environment variables
   - Deploy automatically on push to main branch

3. **Environment Variables**
   ```env
   NEXT_PUBLIC_API_URL=https://your-api-url.com
   NODE_ENV=production
   ```

### Server (Railway)

1. **Build the project**
   ```bash
   cd server
   pnpm build
   ```

2. **Deploy**
   - Connect repository to Railway
   - Set environment variables (R2 credentials)
   - Deploy automatically on push

3. **Environment Variables**
   ```env
   PORT=3001
   NODE_ENV=production
   CORS_ORIGIN=https://your-client-url.com
   CLOUDFLARE_R2_BUCKET_NAME=threejs-assets
   CLOUDFLARE_R2_ENDPOINT=https://your-endpoint.r2.cloudflarestorage.com
   CLOUDFLARE_R2_ACCESS_KEY_ID=your-access-key
   CLOUDFLARE_R2_SECRET_ACCESS_KEY=your-secret-key
   R2_PUBLIC_URL=https://pub-your-bucket.r2.dev
   ```

📖 For detailed deployment instructions, see [`DEPLOYMENT.md`](./DEPLOYMENT.md)

---

## 🤝 Contributing

### Code Style

- Use TypeScript for type safety
- Follow React best practices and hooks rules
- Use functional components with hooks
- Keep components modular and reusable
- Follow the project's ESLint configuration

### Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Make your changes**
   - Write clean, maintainable code
   - Add tests for new features
   - Update documentation as needed

3. **Test thoroughly**
   ```bash
   pnpm test
   pnpm lint
   ```

4. **Submit a pull request**
   - Provide a clear description
   - Reference any related issues
   - Ensure all tests pass

### Adding Features

- **New Components** - Add to `components/` directory
- **New Hooks** - Add to `hooks/` directory
- **New Materials** - Use the automated R2 material generator
- **New Models** - Follow the model preparation template

---

## 📚 Documentation

### Project Documentation

- 📖 **[PROJECT_REPORT.md](./PROJECT_REPORT.md)** - Comprehensive project documentation
- 📖 **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Deployment guide and instructions
- 📖 **[MODEL_PREPARATION_TEMPLATE.md](./MODEL_PREPARATION_TEMPLATE.md)** - Guide for adding new models
- 📖 **[client/README.md](./client/README.md)** - Client-specific documentation
- 📖 **[server/README.md](./server/README.md)** - Server-specific documentation

### External Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [React Query Documentation](https://tanstack.com/query/latest)
- [GLB Format Guide](https://www.khronos.org/gltf/)

---

## 📝 License

This project is private and proprietary. All rights reserved.

---

## 🙏 Acknowledgments

- **Three.js Community** - For excellent 3D web graphics tools
- **React Three Fiber** - For seamless React integration
- **Cloudflare** - For R2 object storage
- **Vercel** - For hosting infrastructure
- **Railway** - For server deployment platform

---

<div align="center">

**Built with ❤️ for the future of 3D web experiences**

[Report Bug](https://github.com/your-repo/issues) · [Request Feature](https://github.com/your-repo/issues)

</div>
