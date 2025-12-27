# 👟 Fashion Configurator: Comprehensive Project Report

## 📋 Executive Summary

A real-time 3D sneaker/custom shoe builder featuring a **dual-mode system**: **Blank Canvas** (unbranded black sneaker for full creative freedom) and **Brand Collection** (branded models like Nike, Adidas, Vans for real-world customization). Enables users to customize materials, colors, patterns, and components with instant visual feedback, AR try-on capabilities, and seamless e-commerce integration. Perfect for learning and portfolio development.

---

## 🎯 Project Overview

### Vision Statement
Enable users to design custom sneakers in real-time with instant visual feedback, AR preview capabilities, and seamless e-commerce integration.

### Core Value Propositions
- **Real-time Customization**: Instant visual updates as users make changes
- **Photorealistic Rendering**: High-quality 3D visualization with PBR materials
- **Mobile-Optimized AR**: Try-on experience on mobile devices
- **Social Sharing**: Share custom designs via URL or social media
- **Direct Purchase**: Seamless integration with e-commerce platforms
- **Design Persistence**: Save and manage multiple custom designs

### Target Users
- **Primary**: Fashion-forward consumers (18-35), tech-savvy individuals
- **Secondary**: Sneaker collectors, custom shoe enthusiasts
- **Business**: E-commerce brands, fashion retailers

### Dual-Mode System

The project features two distinct modes for maximum learning and portfolio value:

#### 🎨 Blank Canvas Mode
- **Purpose**: Full creative freedom with unbranded black sneaker
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
- **Brands**: Nike, Adidas, Vans, New Balance (educational/non-commercial use)
- **Use Case**: Real-world application, portfolio diversity

**Technical Implementation**: Unified component system works across both modes, with mode-specific constraints and features.

---

## 📝 Detailed Requirements

### Functional Requirements

#### 0. Mode Selection System
- Mode selector (Blank Canvas vs Brand Collection)
- Blank Canvas: Direct access to unbranded sneaker
- Brand Collection: Brand selector → Model selector → Customization
- Mode switching with state preservation
- Unified component system across both modes
- Brand-specific constraints (optional, for branded models)

#### 1. Real-Time Customization Engine
- Material swapping (leather, mesh, suede, canvas, knit)
- Per-component color control (sole, upper, midsole, laces, logo, heel tab, tongue)
- Pattern application (stripes, gradients, textures, camo, geometric)
- Texture mapping with UV accuracy
- Instant preview (<200ms update time)
- Undo/redo functionality (10-step history)

#### 2. 3D Visualization System
- 360° rotation (auto/manual)
- Zoom functionality (0.5x - 5x)
- Preset camera angles (side, top, front, back, detail)
- Lighting scenarios (studio, outdoor, night, showroom)
- Real-time shadows and reflections
- High-quality PBR materials

#### 3. Component System
- Modular parts: sole, upper, midsole, outsole, laces, logo, heel tab, tongue, eyelets
- Independent customization per component
- Component visibility toggle
- Size visualization with measurements
- Material compatibility validation

#### 4. Comparison & Preview
- Side-by-side before/after view
- Split-screen comparison mode
- Fullscreen mode
- Screenshot capture (HD export)
- Video recording (optional)

#### 5. Social & Sharing Features
- Share via URL (encoded design state)
- Social media export (Instagram, Twitter, Facebook)
- Embeddable widget
- Design gallery (public/private)
- Favorite designs

#### 6. Account & Persistence
- User authentication (email, social login)
- Save designs to account
- Design library management
- Edit saved designs
- Design naming and tagging
- Export design specs (JSON)

#### 7. E-Commerce Integration
- Real-time pricing calculator
- Add to cart functionality
- Save for later
- Size selection
- Stock availability
- Estimated delivery
- Related products

#### 8. AR Try-On (Mobile)
- Face/feet detection
- Real-time product placement
- Lighting adaptation
- Multiple angle views
- Screenshot/video capture
- Fallback to static preview

#### 9. Limited Edition System
- Unlockable materials/colors
- Seasonal collections
- Collaboration drops
- Achievement badges
- Exclusive access tiers

---

## 🎨 UI/UX Design Specifications

### Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│  Header: Logo | Navigation | Account | Cart ($0)      │
├─────────────────────────────────────────────────────────┤
│  Mode Selector: [Blank Canvas] [Brand Collection]     │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────────┐         ┌──────────────────────────┐ │
│  │              │         │  3D Canvas Viewport       │ │
│  │              │         │  (60% width)              │ │
│  │  3D Viewer   │         │                          │ │
│  │              │         │  [Camera Controls]       │ │
│  │              │         │  [Lighting Presets]       │ │
│  └──────────────┘         └──────────────────────────┘ │
│                                                          │
│  ┌────────────────────────────────────────────────────┐ │
│  │  Customization Panel (40% width)                   │ │
│  │  ┌──────────────────────────────────────────────┐ │ │
│  │  │ Component Selector (Tabs)                    │ │ │
│  │  │ [Sole] [Upper] [Laces] [Logo] [Details]      │ │ │
│  │  └──────────────────────────────────────────────┘ │ │
│  │                                                    │ │
│  │  ┌──────────────────────────────────────────────┐ │ │
│  │  │ Material Library                              │ │ │
│  │  │ [Grid of material swatches]                   │ │ │
│  │  └──────────────────────────────────────────────┘ │ │
│  │                                                    │ │
│  │  ┌──────────────────────────────────────────────┐ │ │
│  │  │ Color Picker                                  │ │ │
│  │  │ [HSV/RGB sliders + hex input]                │ │ │
│  │  └──────────────────────────────────────────────┘ │ │
│  │                                                    │ │
│  │  ┌──────────────────────────────────────────────┐ │ │
│  │  │ Pattern Selector                              │ │ │
│  │  │ [Stripes] [Gradient] [Texture] [Custom]       │ │ │
│  │  └──────────────────────────────────────────────┘ │ │
│  │                                                    │ │
│  │  ┌──────────────────────────────────────────────┐ │ │
│  │  │ Design Actions                                │ │ │
│  │  │ [Save] [Share] [Compare] [Reset] [Undo]       │ │ │
│  │  └──────────────────────────────────────────────┘ │ │
│  │                                                    │ │
│  │  ┌──────────────────────────────────────────────┐ │ │
│  │  │ Pricing & Cart                                │ │ │
│  │  │ Base: $120 | Customization: +$45 | Total: $165│ │ │
│  │  │ [Select Size] [Add to Cart] [Buy Now]         │ │ │
│  │  └──────────────────────────────────────────────┘ │ │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
│  Footer: Social Links | Support | Terms                 │
└─────────────────────────────────────────────────────────┘
```

### Mobile Layout (Responsive)

```
┌─────────────────────┐
│  [Menu] Logo [Cart] │
├─────────────────────┤
│                     │
│   3D Viewer         │
│   (Full width)      │
│   [AR Try-On]       │
│                     │
├─────────────────────┤
│  Component Tabs     │
│  [Swipeable]        │
├─────────────────────┤
│  Material Swatches  │
│  [Horizontal scroll]│
├─────────────────────┤
│  Color Picker       │
│  [Compact]          │
├─────────────────────┤
│  [Save] [Share]     │
│  [Add to Cart]      │
└─────────────────────┘
```

### UI Components

#### 0. Mode Selector
- Tab-based navigation (Blank Canvas / Brand Collection)
- Visual indicators for active mode
- Brand Collection: Brand grid selector (Nike, Adidas, Vans, etc.)
- Model selector within brand (if multiple models per brand)
- Quick switch between modes
- Mode-specific UI adaptations

#### 1. 3D Viewer Controls
- Orbit controls (drag to rotate, scroll to zoom)
- Preset buttons: Front, Side, Top, Detail
- Auto-rotate toggle
- Fullscreen toggle
- AR button (mobile)
- Screenshot button
- Loading spinner with progress

#### 2. Component Selector
- Tab-based navigation
- Visual thumbnails
- Active state indicator
- Component count badge

#### 3. Material Library
- Grid layout (4 columns desktop, 2 mobile)
- Material swatch cards with:
  - Preview thumbnail
  - Name
  - Price modifier (+$5, +$10, etc.)
  - Premium badge (if applicable)
- Search/filter functionality
- Category filters (Leather, Fabric, Synthetic)

#### 4. Color Picker
- HSV color wheel
- RGB sliders
- Hex input
- Preset color palette
- Recent colors
- Material-aware color suggestions

#### 5. Pattern Selector
- Pattern thumbnails
- Intensity slider
- Rotation control
- Scale control
- Pattern library (stripes, dots, camo, etc.)

#### 6. Design Actions Toolbar
- Save (with name input modal)
- Share (modal with social options + URL copy)
- Compare (split-screen toggle)
- Reset (confirmation dialog)
- Undo/Redo (with history indicator)

#### 7. Pricing Display
- Base price
- Customization breakdown
- Total price (highlighted)
- Size selector dropdown
- Stock indicator
- Estimated delivery

---

## 🎨 Assets Requirements

### 3D Models

#### Blank Canvas Model
- **Format**: GLB with Draco compression
- **Type**: Unbranded black sneaker (starting point)
- **Poly Count**: 50k-80k triangles (high detail)
- **LOD Variants**:
  - LOD0: 80k (close-up)
  - LOD1: 40k (normal)
  - LOD2: 20k (distant)
- **UV Mapping**: Optimized, non-overlapping
- **Rigging**: Not required (static model)
- **File Size Target**: <5MB compressed
- **Components**: Fully modular (sole, upper, midsole, outsole, laces, heel tab, tongue, eyelets)
- **Source**: Create in Blender or use free models (Sketchfab, TurboSquid)

#### Branded Models (Brand Collection)
- **Format**: GLB with Draco compression
- **Brands**: Nike, Adidas, Vans, New Balance (educational use)
- **Poly Count**: 50k-80k triangles per model
- **LOD Variants**: Same as blank canvas
- **File Size Target**: <5MB compressed per model
- **Source**: 
  - Educational/fan-made models (Sketchfab, TurboSquid)
  - Free resources (Poly Haven, Free3D)
  - Note: Clearly label as educational/non-commercial in portfolio
- **Organization**:
  ```
  /models/
    /blank/
      blank-sneaker.glb
      blank-sneaker-lod1.glb
      blank-sneaker-lod2.glb
    /branded/
      /nike/
        air-max-90.glb
        air-force-1.glb
      /adidas/
        stan-smith.glb
        ultraboost.glb
      /vans/
        old-skool.glb
  ```

#### Component Models (Modular - Both Modes)
- Sole (separate mesh)
- Upper (left/right)
- Midsole
- Outsole
- Laces (separate)
- Logo badge (branded models only)
- Heel tab
- Tongue
- Eyelets

#### Model Variants
- Different shoe sizes (optional, or scale in code)
- Different shoe types (sneaker, boot, casual)

### Textures

#### Material Textures (PBR Workflow)
- Albedo/Diffuse (2048x2048, WebP/AVIF)
- Normal map (2048x2048)
- Roughness map (2048x2048)
- Metallic map (2048x2048, if needed)
- AO map (2048x2048, optional)

#### Material Library (20+ Materials)
1. Leather (black, brown, white, red)
2. Suede (various colors)
3. Mesh/Fabric (knit, canvas)
4. Synthetic (TPU, rubber)
5. Premium (exotic leathers, limited editions)

#### Pattern Textures
- Stripes (horizontal, vertical, diagonal)
- Dots/Polka
- Camo patterns
- Geometric shapes
- Gradient overlays
- Custom upload (optional)

#### Environment Maps
- Studio lighting (HDR)
- Outdoor lighting (HDR)
- Night lighting (HDR)
- Showroom (HDR)

### UI Assets
- Material swatch thumbnails (256x256)
- Component icons
- Loading animations
- Button states (hover, active, disabled)
- Social media icons
- Brand logos

### Audio (Optional)
- Hover sounds
- Click sounds
- Material change sound
- Success sound (save/share)

---

## 🛠️ Technical Stack

### Frontend Core
```javascript
// Core 3D Engine
Three.js (r150+)              // WebGL rendering
React Three Fiber (v8+)       // React integration
@react-three/drei             // Helpers (OrbitControls, etc.)
@react-three/postprocessing    // Post-processing effects

// State Management
Zustand                        // Lightweight, performant
Immer                          // Immutable updates

// UI Framework
Next.js 14+ (App Router)        // React framework with SSR/SSG
React 18+                      // Component framework
TypeScript                     // Type safety
Tailwind CSS                   // Utility-first styling
Radix UI                        // Accessible components
Framer Motion                  // Animations
```

### 3D-Specific Libraries
```javascript
// Model Loading
GLTFLoader                     // Three.js built-in
DracoLoader                    // Compression support

// Materials & Textures
Basis Universal Loader        // Texture compression
KTX2Loader                     // Modern texture format

// Controls
OrbitControls                  // Camera controls
TransformControls              // Object manipulation (dev)

// Post-Processing
EffectComposer                 // Post-processing pipeline
BloomPass                      // Glow effects
SSAOPass                       // Ambient occlusion
ToneMappingPass                // Color correction
```

### Model Management System
```typescript
// Unified model interface
interface ShoeModel {
  id: string;
  name: string;
  type: 'blank' | 'branded';
  brand?: string;              // null for blank canvas
  modelUrl: string;
  thumbnailUrl: string;
  components: ComponentMap;
  constraints?: BrandConstraints; // Only for branded
  lodUrls?: {
    lod0: string;
    lod1: string;
    lod2: string;
  };
}

// Model library structure
const models = [
  {
    id: 'blank-canvas-001',
    name: 'Blank Canvas Sneaker',
    type: 'blank',
    modelUrl: '/models/blank/blank-sneaker.glb',
    components: { sole, upper, laces, ... }
  },
  {
    id: 'nike-air-max',
    name: 'Nike Air Max',
    type: 'branded',
    brand: 'Nike',
    modelUrl: '/models/branded/nike/air-max-90.glb',
    components: { ... },
    constraints: {
      logoPlacement: 'fixed',
      availableColors: [...], // Optional
      materialRestrictions: [] // Optional
    }
  }
];
```

### AR & Mobile
```javascript
// AR Integration
WebXR API                      // VR/AR support
Model Viewer                   // Fallback AR component
MediaPipe Face Mesh            // Face tracking (optional)

// Mobile Optimization
Intersection Observer          // Lazy loading
ResizeObserver                 // Responsive handling
```

### Backend & Services
```javascript
// Backend Framework
Node.js + Express              // API server
TypeScript                     // Type safety

// Hosting
Railways                       // Backend deployment (server/)
// - Automatic deployments
// - Environment variable management
// - Database provisioning

// Database
PostgreSQL + Prisma/TypeORM    // Primary database (Docker for local)
// - Docker container for local development
// - Provisioned via Railways for production
MongoDB + Mongoose             // Alternative (if preferred)

// Caching & Sessions
Redis                          // Caching & sessions (Docker for local)
// - Docker container for local development
// - Provisioned via Railways or Redis Cloud for production

// File Storage & Media
Cloudflare R2                  // Primary: models, textures, user designs
Cloudflare Images/Stream       // Optimized delivery for images/video
// - All 3D assets stored here
// - Public URLs for client access
// - Server handles authenticated uploads

// Authentication
JWT                            // Token-based authentication
bcrypt                         // Password hashing

// Development
Docker                         // Local services (PostgreSQL, Redis)
Docker Compose                 // Local development orchestration
pnpm                           // Package manager (client & server)
```

### E-Commerce Integration
```javascript
// E-commerce Platform
Shopify API                    // Product catalog, cart, checkout
WooCommerce API                // Alternative
Stripe                         // Payment processing

// Cart Management
LocalStorage                   // Guest cart
Backend API                    // Authenticated cart
```

### Analytics & Monitoring
```javascript
// Analytics
Amplitude / Mixpanel           // User behavior tracking
Google Analytics 4             // Web analytics

// Performance Monitoring
Sentry                         // Error tracking
Web Vitals                     // Performance metrics
Stats.js                       // FPS monitoring (dev)
```

### Development Tools
```javascript
// Debugging
Leva                           // Real-time tweaking
React DevTools                 // Component debugging
Three.js Inspector             // Scene debugging

// Testing
Vitest                         // Unit tests
React Testing Library          // Component tests
Playwright                     // E2E tests

// Code Quality
ESLint                         // Linting
Prettier                       // Formatting
Husky                          // Git hooks
```

### CDN & Hosting
```javascript
// Client Hosting
Vercel                         // Frontend deployment (client/)

// Server & Database Hosting
Railways                       // Backend API + Database (server/)

// CDN for 3D Assets & Media
Cloudflare (R2 + CDN + Images + Stream) // Primary
// All 3D models, textures, user designs stored here

// Edge Functions
Vercel Edge Functions          // Client-side API routes (if needed)
```

---

## 📁 Project Structure

### Architecture Overview
The project is split into **two separate repositories/applications** to ensure clean separation and avoid refactoring issues:

```
fashion-configurator/
├── client/                    # Frontend (Vercel deployment)
│   ├── app/                   # Next.js App Router
│   │   ├── (routes)/          # Route groups
│   │   ├── api/               # API routes (if needed)
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   ├── features/              # Feature-based modules
│   ├── hooks/                 # Custom React hooks
│   ├── stores/                # Zustand stores
│   ├── lib/                   # Utility functions
│   ├── types/                 # TypeScript types
│   ├── public/                # Public assets
│   ├── Dockerfile             # Docker config for client
│   ├── .dockerignore
│   ├── package.json
│   ├── next.config.js         # Next.js configuration
│   └── tsconfig.json
│
├── server/                    # Backend (Railways deployment)
│   ├── src/
│   │   ├── routes/            # API routes
│   │   ├── controllers/       # Route controllers
│   │   ├── models/            # Database models
│   │   ├── services/          # Business logic
│   │   ├── middleware/        # Express middleware
│   │   ├── utils/             # Utility functions
│   │   └── config/            # Configuration files
│   ├── Dockerfile             # Docker config for server
│   ├── .dockerignore
│   ├── package.json
│   └── server.ts
│
└── docker-compose.yml         # Local services (PostgreSQL, Redis)
```

### Client Structure (Next.js - Vercel)
```
client/
├── app/                       # Next.js App Router
│   ├── (routes)/              # Route groups
│   │   ├── configurator/      # Configurator page
│   │   │   └── page.tsx
│   │   ├── designs/           # Design library page
│   │   │   └── page.tsx
│   │   └── profile/           # User profile page
│   │       └── page.tsx
│   ├── api/                   # API routes (if needed)
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles
│
├── components/
│   ├── ui/                    # Reusable UI components (buttons, inputs)
│   ├── layout/                # Layout components (Header, Footer)
│   ├── viewer/                # 3D viewer components
│   │   ├── Scene.tsx
│   │   ├── ModelLoader.tsx
│   │   └── CameraControls.tsx
│   ├── configurator/          # Customization components
│   │   ├── ModeSelector.tsx
│   │   ├── ComponentSelector.tsx
│   │   ├── MaterialLibrary.tsx
│   │   ├── ColorPicker.tsx
│   │   └── PatternSelector.tsx
│   └── shared/                # Shared components
│
├── features/
│   ├── blank-canvas/          # Blank canvas feature
│   │   ├── BlankCanvasView.tsx
│   │   └── blankCanvasStore.ts
│   ├── branded/               # Branded models feature
│   │   ├── BrandSelector.tsx
│   │   ├── ModelSelector.tsx
│   │   └── brandedStore.ts
│   └── design/                # Design management
│       ├── DesignLibrary.tsx
│       └── designStore.ts
│
├── hooks/
│   ├── useModelLoader.ts
│   ├── useMaterialManager.ts
│   └── useConfigurator.ts
│
├── stores/
│   ├── configuratorStore.ts   # Main configurator state
│   ├── uiStore.ts             # UI state
│   └── authStore.ts           # Authentication state
│
├── lib/
│   ├── api/                   # API client
│   │   ├── client.ts          # Axios/fetch setup
│   │   ├── designs.ts         # Design API calls
│   │   └── auth.ts            # Auth API calls
│   ├── cloudflare/            # Cloudflare R2 helpers
│   │   └── r2Client.ts
│   ├── threejs/               # Three.js utilities
│   ├── colors.ts
│   └── validation.ts
│
├── types/
│   ├── models.ts              # ShoeModel, Component types
│   ├── materials.ts           # Material types
│   └── api.ts                 # API response types
│
├── public/
│   └── (only static assets, 3D models from Cloudflare R2)
│
├── .env.local                 # Client environment variables
├── .env.example               # Environment template
├── Dockerfile                 # Docker configuration
├── .dockerignore              # Docker ignore file
├── package.json
├── next.config.js             # Next.js configuration
├── tsconfig.json
└── vercel.json                # Vercel deployment config (optional)
```

### Server Structure (Railways)
```
server/
├── src/
│   ├── routes/
│   │   ├── index.ts           # Route registration
│   │   ├── designs.ts         # Design CRUD routes
│   │   ├── auth.ts            # Authentication routes
│   │   └── users.ts           # User routes
│   │
│   ├── controllers/
│   │   ├── designController.ts
│   │   ├── authController.ts
│   │   └── userController.ts
│   │
│   ├── models/
│   │   ├── Design.ts          # Mongoose schema
│   │   ├── User.ts            # User schema
│   │   └── index.ts
│   │
│   ├── services/
│   │   ├── designService.ts   # Business logic
│   │   ├── authService.ts
│   │   └── cloudflareService.ts  # R2 operations
│   │
│   ├── middleware/
│   │   ├── auth.ts            # JWT authentication
│   │   ├── errorHandler.ts
│   │   └── validation.ts
│   │
│   ├── config/
│   │   ├── database.ts        # PostgreSQL/Prisma connection
│   │   ├── redis.ts           # Redis connection
│   │   ├── cloudflare.ts      # R2 configuration
│   │   └── env.ts             # Environment validation
│   │
│   ├── utils/
│   │   └── helpers.ts
│   │
│   └── server.ts              # Express app setup
│
├── prisma/                    # Prisma schema (if using Prisma)
│   └── schema.prisma
│
├── .env                       # Server environment variables
├── .env.example               # Environment template
├── Dockerfile                 # Docker configuration
├── .dockerignore              # Docker ignore file
├── package.json
├── tsconfig.json
└── railway.json               # Railways deployment config
```

### Docker Compose (Local Services)
```
docker-compose.yml             # Root level
├── PostgreSQL                 # Database service
├── Redis                      # Cache/session service
└── (Optional) pgAdmin         # Database admin UI
```

**docker-compose.yml:**
```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15-alpine
    container_name: fashion-config-postgres
    environment:
      POSTGRES_USER: ${POSTGRES_USER:-postgres}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD:-postgres}
      POSTGRES_DB: ${POSTGRES_DB:-fashion_config}
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    container_name: fashion-config-redis
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 5s
      retries: 5

  # Optional: Database admin UI
  pgadmin:
    image: dpage/pgadmin4:latest
    container_name: fashion-config-pgadmin
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@admin.com
      PGADMIN_DEFAULT_PASSWORD: admin
    ports:
      - "5050:80"
    depends_on:
      - postgres

volumes:
  postgres_data:
  redis_data:
```

### Key Principles

#### 1. **Complete Separation**
- Client and server are **completely independent**
- No shared code between them (except TypeScript types via npm package or git submodule)
- Separate `package.json`, dependencies, and deployment configs
- Client only makes HTTP requests to server API

#### 2. **Modular Component Architecture**
- **One component per file** (`ComponentName.tsx`)
- Feature-based organization (not just by type)
- Each feature is self-contained with its own store/logic
- Reusable components in `components/ui/`

#### 3. **Single File Focus**
- **Work on one file at a time** during implementation
- Complete a component/feature before moving to the next
- Avoid editing multiple files simultaneously
- This prevents timeouts and reduces complexity

#### 4. **Environment Variables**

**Client (.env.local):**
```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001  # Local: http://localhost:3001, Production: https://your-api.railway.app
# Note: Client runs on 3000, server on 3001 to avoid conflicts

# Cloudflare R2
NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_URL=https://your-bucket.r2.cloudflarestorage.com
NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_ID=your_account_id
```

**Server (.env):**
```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database (PostgreSQL)
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/fashion_config
# Production: Use Railways PostgreSQL connection string

# Redis
REDIS_URL=redis://localhost:6379
# Production: Use Railways Redis connection string

# Cloudflare R2
CLOUDFLARE_R2_ACCESS_KEY_ID=...
CLOUDFLARE_R2_SECRET_ACCESS_KEY=...
CLOUDFLARE_R2_BUCKET_NAME=...
CLOUDFLARE_ACCOUNT_ID=...

# Authentication
JWT_SECRET=your-secret-key-change-in-production
JWT_EXPIRES_IN=7d

# CORS
CORS_ORIGIN=http://localhost:3000  # Local: http://localhost:3000, Production: https://your-client.vercel.app
```

**Root (.env for docker-compose):**
```env
# PostgreSQL
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=fashion_config
```

#### 5. **Development Setup**

**Prerequisites:**
- Node.js 18+ installed
- Docker and Docker Compose installed
- pnpm installed globally: `npm install -g pnpm`

**Local Development (pnpm):**

1. **Start Services (PostgreSQL, Redis):**
   ```bash
   # From root directory
   docker-compose up -d
   
   # Verify services are running
   docker-compose ps
   ```

2. **Client Development:**
   ```bash
   cd client
   pnpm install
   pnpm dev  # Runs on http://localhost:3000
   ```

3. **Server Development:**
   ```bash
   cd server
   pnpm install
   pnpm dev  # Runs on http://localhost:3000
   ```

**Package Manager:**
- Use **pnpm** for both client and server
- Faster installs and better disk space usage
- Lock file: `pnpm-lock.yaml`
- Commands: `pnpm install`, `pnpm dev`, `pnpm build`, `pnpm start`

**Docker Development (Optional):**

1. **Build and Run Client:**
   ```bash
   cd client
   docker build -t fashion-config-client .
   docker run -p 3000:3000 fashion-config-client
   ```

2. **Build and Run Server:**
   ```bash
   cd server
   docker build -t fashion-config-server .
   docker run -p 3000:3000 --env-file .env fashion-config-server
   ```

**Stop Services:**
```bash
docker-compose down
```

#### 6. **Deployment Strategy**

**Client (Vercel):**
- Connect GitHub repository (`client/` folder)
- Framework: Next.js (auto-detected)
- Build command: `pnpm build` or `npm run build` (automatic)
- Output directory: `.next` (automatic, no need to specify)
- Environment variables set in Vercel dashboard
- Automatic deployments on push to main
- Docker not required for Vercel (uses Vercel's build system)

**Server (Railways):**
- Connect GitHub repository (`server/` folder)
- Build command: `pnpm build` or `npm run build`
- Start command: `pnpm start` or `npm start`
- Environment variables set in Railways dashboard
- PostgreSQL and Redis provisioned via Railways
- Can use Dockerfile for custom build (optional)
- Automatic deployments on push to main

#### 7. **Asset Management**
- **All 3D models, textures, user designs** stored in Cloudflare R2
- Client fetches assets directly from R2 (public URLs)
- Server handles uploads to R2 (authenticated)
- No assets in Git repository (except small thumbnails)

#### 8. **Dockerfile Examples**

**Client Dockerfile (`client/Dockerfile`):**
```dockerfile
FROM node:18-alpine AS base

# Install pnpm
RUN corepack enable pnpm

# Dependencies stage
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

# Builder stage
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# Production stage
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

**Note:** Requires `output: 'standalone'` in `next.config.js` for Docker deployment.

**Server Dockerfile (`server/Dockerfile`):**
```dockerfile
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml* ./
RUN corepack enable pnpm && pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build
RUN pnpm build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy package files and install production dependencies
COPY package.json pnpm-lock.yaml* ./
RUN corepack enable pnpm && pnpm install --prod --frozen-lockfile

# Copy built application
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/server.js"]
```

**Docker Ignore Files:**

**`.dockerignore` (client):**
```
node_modules
.next
.env
.env.local
.git
.gitignore
README.md
*.log
.DS_Store
```

**`.dockerignore` (server):**
```
node_modules
dist
.env
.git
.gitignore
README.md
*.log
.DS_Store
```

#### Next.js Configuration

**`next.config.js` (client):**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker
  output: 'standalone',
  
  // Image optimization
  images: {
    domains: ['your-bucket.r2.cloudflarestorage.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.r2.cloudflarestorage.com',
      },
    ],
  },
  
  // Environment variables (public)
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  
  // Webpack config for Three.js
  webpack: (config) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil',
    });
    return config;
  },
};

module.exports = nextConfig;
```

### Deployment Best Practices

#### Vercel (Client) Deployment
```json
// vercel.json (optional - Next.js is auto-detected)
{
  "framework": "nextjs",
  "buildCommand": "pnpm build",
  "headers": [
    {
      "source": "/_next/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

**Note:** Vercel auto-detects Next.js, so `vercel.json` is optional. Most configuration can be done in `next.config.js`.

**Best Practices:**
- ✅ Use environment variables for API URLs (not hardcoded)
- ✅ Enable automatic deployments from main branch
- ✅ Set up preview deployments for PRs
- ✅ Configure proper cache headers for static assets
- ✅ Use Vercel Analytics for performance monitoring

#### Railways (Server) Deployment
```json
// railway.json (optional)
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm start",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

**Best Practices:**
- ✅ Set all environment variables in Railways dashboard
- ✅ Provision PostgreSQL via Railways or use external service
- ✅ Provision Redis via Railways or use external service
- ✅ Configure health check endpoint (`/health`)
- ✅ Set up proper CORS for client domain only
- ✅ Use Railway's built-in logging
- ✅ Configure auto-deploy from main branch
- ✅ Set resource limits appropriately
- ✅ Use connection pooling for PostgreSQL

#### Environment Variable Management
- **Never commit** `.env` files to Git
- Use `.env.example` files as templates
- Set production variables in deployment platforms
- Use different values for dev/staging/production
- Rotate secrets regularly

#### Cloudflare R2 Setup
1. Create R2 bucket for production
2. Set up public access for read-only assets
3. Configure CORS for client domain
4. Use signed URLs for user uploads
5. Set up lifecycle rules for cleanup
6. Enable Cloudflare CDN for faster delivery

---

## 🏆 Industry Best Practices

### Performance Optimization

#### 1. Model Optimization
```javascript
// ✅ Use Draco compression (50-70% size reduction)
// ✅ Target: <5MB per model
// ✅ LOD system for distance-based quality
// ✅ Texture atlasing (combine multiple textures)
// ✅ Basis Universal compression for textures
```

#### 2. Rendering Performance
```javascript
// Target: 60fps desktop, 30fps mobile
// ✅ Frustum culling (automatic)
// ✅ Material reuse (don't create new materials)
// ✅ Instancing for repeated elements
// ✅ Disable shadows on mobile
// ✅ Reduce pixel ratio on mobile (1.0 instead of 2.0)
```

#### 3. Loading Strategy
```javascript
// ✅ Progressive loading (show model ASAP)
// ✅ Lazy load non-critical assets
// ✅ Preload next likely materials
// ✅ Use Intersection Observer for below-fold content
// ✅ Show skeleton/placeholder during load
// ✅ Serve models/textures via CDN (Cloudflare) with aggressive caching
```

#### 4. Memory Management
```javascript
// ✅ Dispose unused geometries/materials/textures
// ✅ Unload LOD variants not in use
// ✅ Cache frequently used materials
// ✅ Monitor memory usage (Chrome DevTools)
```

### Material System Architecture

```javascript
// Material Manager Pattern
class MaterialManager {
  private materials: Map<string, THREE.Material> = new Map();
  
  getMaterial(name: string, properties: MaterialProps): THREE.Material {
    const key = this.generateKey(name, properties);
    
    if (this.materials.has(key)) {
      return this.materials.get(key)!;
    }
    
    const material = this.createMaterial(name, properties);
    this.materials.set(key, material);
    return material;
  }
  
  // Reuse materials with same properties
  // Dispose on cleanup
}
```

### Asset Delivery (Cloudflare) Best Practices
- Use Cloudflare R2 for origin storage; serve via CDN with cache-control headers
- Enable Brotli/GZIP; prefer HTTP/2/HTTP/3 for faster transfers
- Use signed URLs for user uploads; public buckets for read-only assets
- Apply tiered caching; set long TTLs for versioned assets (models/textures)
- Compress textures (KTX2/Basis) and GLB (Draco); keep assets under 5MB when possible
- Use Cloudflare Images/Stream for UI images or videos; resize/format on the edge
- Stale-while-revalidate for seamless asset updates without cache thrash

### State Management Pattern

```javascript
// Zustand store structure
interface ConfiguratorState {
  // Mode state
  currentMode: 'blank' | 'branded';
  selectedBrand?: string;        // null for blank canvas
  selectedModel: ShoeModel;
  
  // Design state
  selectedComponent: ComponentType;
  materialMap: Map<ComponentType, Material>;
  colorMap: Map<ComponentType, Color>;
  patternMap: Map<ComponentType, Pattern>;
  
  // UI state
  cameraAngle: CameraAngle;
  lighting: LightingPreset;
  isComparing: boolean;
  
  // History
  history: DesignState[];
  historyIndex: number;
  
  // Actions
  setMode: (mode: 'blank' | 'branded') => void;
  setBrand: (brand: string) => void;
  setModel: (model: ShoeModel) => void;
  setMaterial: (component: ComponentType, material: Material) => void;
  setColor: (component: ComponentType, color: Color) => void;
  undo: () => void;
  redo: () => void;
  save: (name: string) => Promise<void>;
}
```

### Error Handling & Fallbacks

```javascript
// Graceful degradation
1. 3D model fails to load → Show 2D image
2. AR not supported → Show static preview
3. Material texture fails → Use solid color
4. WebGL not available → Show message + link to download
5. Slow connection → Show low-quality model first
```

### Accessibility

```javascript
// WCAG 2.1 AA compliance
- Keyboard navigation for all controls
- Screen reader support (ARIA labels)
- High contrast mode support
- Reduced motion option
- Focus indicators
- Alt text for all images
```

---

## 📅 Weekly Roadmap

### Implementation Approach

**Critical Principle: Work on One File at a Time**

To avoid timeouts, complexity, and refactoring issues:

1. **Single File Focus**: Complete one component/service/file before moving to the next
2. **Modular Development**: Each file should be self-contained and testable
3. **Incremental Progress**: Build features incrementally, one piece at a time
4. **No Multi-File Edits**: Avoid editing multiple files simultaneously during implementation
5. **Test as You Go**: Test each file/component before moving to the next

**Example Workflow:**
```
1. Create ModeSelector.tsx → Complete and test
2. Create configuratorStore.ts → Complete and test
3. Create Scene.tsx → Complete and test
4. Integrate them together → Test integration
```

This approach ensures:
- ✅ No timeout issues
- ✅ Easier debugging
- ✅ Better code quality
- ✅ Clearer progress tracking
- ✅ Easier to revert if needed

---

### Phase 1: Foundation (Weeks 1-2)

#### Week 1: Project Setup & 3D Scene

**Day 1 (Monday) - Project Initialization**

**Tasks:**
- [ ] Create project root structure
- [ ] Initialize client project (`client/` folder)
- [ ] Set up Next.js 14+ (App Router) + React + TypeScript in client
- [ ] Initialize server project (`server/` folder)
- [ ] Set up Node.js + Express + TypeScript in server
- [ ] Configure `package.json` files (use pnpm)
- [ ] Set up Git repository
- [ ] Create `.gitignore` files

**Implementation:**
1. **Create root `.gitignore`** - Add node_modules, .env, .next, dist, etc.
2. **Create `client/package.json`** - Next.js 14+, React 18+, TypeScript, Tailwind CSS dependencies
3. **Create `client/tsconfig.json`** - Next.js TypeScript configuration with path aliases
4. **Create `server/package.json`** - Express, TypeScript, tsx for dev, CORS
5. **Create `server/tsconfig.json`** - Node.js TypeScript configuration
6. **Initialize Git** - `git init` in root, create initial commit
7. **Test setup** - Verify both projects can be initialized

**Day 2 (Tuesday) - Docker & Services Setup**

**Tasks:**
- [ ] Create `docker-compose.yml` in root
- [ ] Configure PostgreSQL service
- [ ] Configure Redis service
- [ ] Set up environment variables for Docker services
- [ ] Test Docker services startup (`docker-compose up -d`)
- [ ] Verify PostgreSQL connection
- [ ] Verify Redis connection
- [ ] Create `Dockerfile` for server
- [ ] Create `.dockerignore` for server

**Implementation:**
1. **Create `docker-compose.yml`** - PostgreSQL (port 5432), Redis (port 6379), pgAdmin (port 5050, optional)
2. **Create `.env` template** - POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB
3. **Create `server/Dockerfile`** - Multi-stage build with pnpm, Node.js 18-alpine
4. **Create `server/.dockerignore`** - Exclude node_modules, dist, .env, .git
5. **Test services** - Run `docker-compose up -d`, verify all containers are healthy
6. **Verify connections** - Test PostgreSQL with `psql` or pgAdmin, test Redis with `redis-cli ping`

**Day 3 (Wednesday) - Client Foundation**

**Tasks:**
- [ ] Configure client folder structure (app, components, features, hooks, stores, lib)
- [ ] Create `next.config.js` with necessary configuration
- [ ] Set up Tailwind CSS (with Next.js integration)
- [ ] Set up Radix UI
- [ ] Configure ESLint + Prettier (Next.js configs)
- [ ] Create root layout - `app/layout.tsx`
- [ ] Create home page - `app/page.tsx`
- [ ] Set up Zustand store skeleton - `stores/configuratorStore.ts` (include mode state)
- [ ] Create `.env.local` template

**Implementation:**
1. **Create folder structure** - `app/`, `components/`, `features/`, `hooks/`, `stores/`, `lib/`
2. **Create `next.config.js`** - Standalone output, image optimization, webpack config for Three.js
3. **Create `tailwind.config.js`** - Content paths, theme extensions
4. **Create `postcss.config.js`** - Tailwind and autoprefixer plugins
5. **Update `app/globals.css`** - Add Tailwind directives (@tailwind base/components/utilities)
6. **Create `app/layout.tsx`** - Root layout with metadata, body structure
7. **Create `app/page.tsx`** - Home page with basic structure
8. **Create `stores/configuratorStore.ts`** - Zustand store with mode state (blank/branded)
9. **Create `client/.env.example`** - Template with NEXT_PUBLIC_API_URL, Cloudflare R2 vars

**Day 4 (Thursday) - Three.js Setup**

**Tasks:**
- [ ] Install Three.js + React Three Fiber
- [ ] Create basic scene component - `Scene.tsx`
- [ ] Set up camera, lights, renderer
- [ ] Implement OrbitControls - `CameraControls.tsx`
- [ ] Test scene rendering
- [ ] Create `Dockerfile` for client (optional)
- [ ] Create `.dockerignore` for client

**Implementation:**
1. **Update `client/package.json`** - Add three@^0.160.0, @react-three/fiber, @react-three/drei
2. **Create `components/viewer/Scene.tsx`** - Canvas component with camera, lights, Suspense wrapper
3. **Create `components/viewer/CameraControls.tsx`** - OrbitControls from drei (must be inside Canvas)
4. **Update `app/page.tsx`** - Import and use Scene component
5. **Test rendering** - Verify 3D scene displays, camera controls work (drag to rotate, scroll to zoom)
6. **Create `client/Dockerfile`** - Multi-stage build with Next.js standalone output
7. **Create `client/.dockerignore`** - Exclude .next, node_modules, .env files

**Day 5 (Friday) - Model Loading & Mode Selector**

**Tasks:**
- [ ] Set up Cloudflare R2 configuration
- [ ] Create model loader utility
- [ ] Load test GLB model from Cloudflare R2
- [ ] Create mode selector component - `ModeSelector.tsx`
- [ ] Integrate mode selector into layout
- [ ] Test mode switching
- [ ] Set up Vercel deployment configuration (`vercel.json`)

**Implementation:**
1. **Create `lib/cloudflare/r2Client.ts`** - Cloudflare R2 client setup (for future use)
2. **Create `hooks/useModelLoader.ts`** - Hook to load GLB models using useGLTF from drei
3. **Update `app/page.tsx`** - Add test model loading (optional for now)
4. **Create `components/configurator/ModeSelector.tsx`** - Toggle buttons for blank/branded modes
5. **Update `stores/configuratorStore.ts`** - Ensure setMode action works correctly
6. **Update `app/page.tsx`** - Add ModeSelector to layout, connect to store
7. **Test mode switching** - Verify buttons update store and UI reflects changes
8. **Create `vercel.json`** - Optional Vercel config (Next.js auto-detects, but can add headers)

**Server Setup (Basic - Throughout Week):**
- [ ] Configure server folder structure (routes, controllers, models, services)
- [ ] Set up basic Express server - `server.ts`
- [ ] Configure environment variables
- [ ] Test server startup

**Deliverables**: 
- Client: Working 3D scene with test model, basic UI layout, mode selector
- Server: Basic Express server structure ready for Week 5 development
- Docker: PostgreSQL and Redis services running locally via Docker

**Note:** Each day includes both **Tasks** (checklist items) and **Implementation** (specific files to create, code patterns, and step-by-step guidance). Follow this pattern for all weeks - work on one file at a time, complete and test before moving to the next.

---

#### Week 2: Model Integration & Component System

**Day 1 (Monday) - Model Integration**

**Tasks:**
- [ ] Source/obtain blank canvas sneaker model
- [ ] Upload model to Cloudflare R2
- [ ] Create model loader hook - `useModelLoader.ts`
- [ ] Integrate blank canvas sneaker model into scene
- [ ] Test model loading and display
- [ ] Handle loading states

**Implementation:**
1. **Source model** - Get blank sneaker GLB file (create in Blender or download from Sketchfab/TurboSquid)
2. **Upload to R2** - Use Cloudflare dashboard or CLI to upload model
3. **Create `hooks/useModelLoader.ts`** - Use useGLTF from drei, handle loading/error states
4. **Create `components/viewer/ModelLoader.tsx`** - Component that uses useModelLoader hook
5. **Update `app/page.tsx`** - Add ModelLoader inside Scene's Suspense
6. **Add loading UI** - Show spinner/placeholder while model loads
7. **Test** - Verify model loads and displays correctly in scene

**Day 2 (Tuesday) - Component Isolation**

**Tasks:**
- [ ] Analyze model structure (identify meshes)
- [ ] Create component mapping system
- [ ] Implement component isolation logic
- [ ] Create component types/interfaces
- [ ] Test component identification
- [ ] Document component structure

**Implementation:**
1. **Analyze model** - Use Three.js Inspector or console.log to identify mesh names (sole, upper, laces, etc.)
2. **Create `types/models.ts`** - Define ComponentType enum and ShoeModel interface
3. **Create `lib/componentMapper.ts`** - Function to map mesh names to component types
4. **Create `hooks/useComponentIsolation.ts`** - Hook to identify and isolate components from loaded model
5. **Update ModelLoader** - Add component identification after model loads
6. **Test** - Verify each component can be identified and accessed separately
7. **Document** - Create component mapping reference (which mesh = which component)

**Day 3 (Wednesday) - Component Selector UI**

**Tasks:**
- [ ] Create component selector component - `ComponentSelector.tsx`
- [ ] Build component tabs/navigation
- [ ] Add visual indicators for selected component
- [ ] Integrate with configurator store
- [ ] Test component selection
- [ ] Add hover/active states

**Implementation:**
1. **Update `stores/configuratorStore.ts`** - Add selectedComponent state and setComponent action
2. **Create `components/configurator/ComponentSelector.tsx`** - Tab-based UI showing all components
3. **Add component icons** - Create or source icons for each component type
4. **Style with Tailwind** - Active state styling, hover effects, transitions
5. **Connect to store** - Use useConfiguratorStore to get/set selected component
6. **Test** - Click each tab, verify store updates and UI reflects selection
7. **Add visual feedback** - Highlight selected component in 3D scene (optional)

**Day 4 (Thursday) - Material System Architecture**

**Tasks:**
- [ ] Design material system architecture
- [ ] Create material manager service
- [ ] Set up texture loading system
- [ ] Create material library data structure
- [ ] Implement material caching
- [ ] Test material loading performance

**Implementation:**
1. **Create `types/materials.ts`** - Material interface, MaterialLibrary type
2. **Create `lib/materialManager.ts`** - MaterialManager class with caching, reuse logic
3. **Create `lib/textureLoader.ts`** - Function to load textures from Cloudflare R2
4. **Create `data/materials.json`** - Material library data (leather, suede, mesh, etc.)
5. **Implement caching** - Map-based cache to reuse materials with same properties
6. **Test performance** - Measure material creation/loading time, target <200ms
7. **Add disposal** - Cleanup unused materials to prevent memory leaks

**Day 5 (Friday) - Material Swapping & UI**

**Tasks:**
- [ ] Implement basic material swapping logic
- [ ] Create material swatch component - `MaterialSwatch.tsx`
- [ ] Build material library UI - `MaterialLibrary.tsx` (grid layout)
- [ ] Integrate material selection with components
- [ ] Test material swapping (<200ms target)
- [ ] Add loading states and progress indicators
- [ ] Build model management system (for future branded models)

**Implementation:**
1. **Update `stores/configuratorStore.ts`** - Add materialMap state and setMaterial action
2. **Create `components/configurator/MaterialSwatch.tsx`** - Individual material card with preview
3. **Create `components/configurator/MaterialLibrary.tsx`** - Grid layout showing all materials
4. **Create `hooks/useMaterialSwapping.ts`** - Hook to swap materials on selected component
5. **Update ModelLoader** - Apply materials from store to model components
6. **Add loading states** - Show spinner when material is loading
7. **Test performance** - Measure swap time, optimize if needed
8. **Create `lib/modelManager.ts`** - System to manage multiple models (blank + branded)

**Weekend (Optional) - Testing & Refinement**
- [ ] Test on mobile devices
- [ ] Performance optimization
- [ ] Bug fixes and refinements

**Deliverables**: Blank canvas model loads correctly, components can be selected, basic material swap works

---

### Phase 2: Customization Engine (Weeks 3-4)

#### Week 3: Material & Color System

**Day 1 (Monday) - Material Manager Enhancement**

**Tasks:**
- [ ] Enhance material manager with reuse logic
- [ ] Implement material caching system
- [ ] Add material disposal management
- [ ] Optimize material loading
- [ ] Test material manager performance
- [ ] Add material preview system

**Implementation:**
1. **Update `lib/materialManager.ts`** - Add getMaterial method with key-based caching
2. **Implement cache key generation** - Create unique keys from material properties
3. **Add material disposal** - Cleanup method to dispose unused materials
4. **Create `hooks/useMaterialPreview.ts`** - Hook to generate material preview thumbnails
5. **Optimize loading** - Preload commonly used materials, lazy load others
6. **Performance testing** - Measure cache hit rate, material creation time
7. **Add memory monitoring** - Track material count and memory usage

**Day 2 (Tuesday) - Color Picker Component**

**Tasks:**
- [ ] Research/choose color picker library or build custom
- [ ] Create color picker component - `ColorPicker.tsx`
- [ ] Implement HSV color wheel
- [ ] Add RGB sliders
- [ ] Add hex input field
- [ ] Test color picker functionality

**Implementation:**
1. **Research libraries** - Consider react-colorful, @uiw/react-color, or build custom
2. **Create `components/configurator/ColorPicker.tsx`** - Color picker UI component
3. **Add color wheel** - HSV color wheel visualization (or use library component)
4. **Add RGB sliders** - Individual sliders for R, G, B values (0-255)
5. **Add hex input** - Text input for hex color codes (#RRGGBB)
6. **Add color conversion** - Utils to convert between HSV, RGB, hex
7. **Test** - Verify all input methods update color correctly

**Day 3 (Wednesday) - Color Application System**

**Tasks:**
- [ ] Create color application service
- [ ] Implement per-component color control
- [ ] Integrate color picker with component selection
- [ ] Add color to material system
- [ ] Test color changes (<100ms target)
- [ ] Add recent colors functionality

**Implementation:**
1. **Update `stores/configuratorStore.ts`** - Add colorMap state and setColor action
2. **Create `lib/colorApplication.ts`** - Service to apply colors to materials
3. **Create `hooks/useColorApplication.ts`** - Hook to apply color to selected component
4. **Update MaterialManager** - Support color tinting on materials
5. **Update ColorPicker** - Connect to store, apply color on change
6. **Add recent colors** - Store last 8 colors used, display as quick picks
7. **Test performance** - Measure color application time, optimize if needed

**Day 4 (Thursday) - Material Library UI**

**Tasks:**
- [ ] Enhance material library UI (grid, filters)
- [ ] Add material search functionality
- [ ] Implement category filters (Leather, Fabric, Synthetic)
- [ ] Add material price modifiers display
- [ ] Create material preview thumbnails
- [ ] Test material library performance

**Implementation:**
1. **Update `components/configurator/MaterialLibrary.tsx`** - Add search input, filter buttons
2. **Create `lib/materialSearch.ts`** - Search/filter logic for materials
3. **Add category filters** - Filter buttons for material categories
4. **Update MaterialSwatch** - Display price modifier (+$5, +$10, etc.)
5. **Generate thumbnails** - Use material preview system to create thumbnails
6. **Optimize rendering** - Virtualize grid for large material libraries
7. **Test** - Verify search and filters work correctly, performance is good

**Day 5 (Friday) - State Management & Persistence**

**Tasks:**
- [ ] Implement undo/redo functionality
- [ ] Create design history system (10 steps)
- [ ] Add design state persistence (localStorage)
- [ ] Test state management
- [ ] Performance testing (<200ms material swap)
- [ ] Bug fixes and refinements

**Implementation:**
1. **Update `stores/configuratorStore.ts`** - Add history array, historyIndex, undo/redo actions
2. **Create `lib/designState.ts`** - Functions to serialize/deserialize design state
3. **Implement history** - Save state snapshot on each change, limit to 10 steps
4. **Add localStorage persistence** - Save current design to localStorage on changes
5. **Create undo/redo UI** - Buttons in toolbar, keyboard shortcuts (Cmd+Z, Cmd+Shift+Z)
6. **Test** - Verify undo/redo works, state persists across page reloads
7. **Performance audit** - Measure all operations, optimize bottlenecks

**Deliverables**: Full material and color customization working

**Note:** All subsequent weeks (Week 4-10) follow the same structure with **Tasks** and **Implementation** details for each day. Each implementation section provides specific files to create, code patterns, and step-by-step guidance. Always work on one file at a time.

---

#### Week 4: Pattern System & Advanced Features

**Day 1 (Monday) - Pattern System**
- [ ] Design pattern texture system architecture
- [ ] Implement pattern texture loading
- [ ] Create pattern data structure
- [ ] Set up pattern texture mapping
- [ ] Test pattern application
- [ ] Create pattern library (stripes, dots, camo, etc.)

**Day 2 (Tuesday) - Pattern Selector UI**
- [ ] Create pattern selector component - `PatternSelector.tsx`
- [ ] Build pattern thumbnail grid
- [ ] Add pattern intensity slider
- [ ] Add pattern scale control
- [ ] Add pattern rotation control
- [ ] Integrate with component system

**Day 3 (Wednesday) - Camera & Lighting**
- [ ] Implement camera preset system
- [ ] Create camera preset buttons (Front, Side, Top, Detail)
- [ ] Add smooth camera transitions
- [ ] Create lighting preset switcher
- [ ] Add lighting scenarios (studio, outdoor, night, showroom)
- [ ] Test camera and lighting changes

**Day 4 (Thursday) - Comparison & Screenshot**
- [ ] Build comparison mode (before/after)
- [ ] Create split-screen comparison UI
- [ ] Implement screenshot capture functionality
- [ ] Add HD export option
- [ ] Test comparison mode
- [ ] Test screenshot functionality

**Day 5 (Friday) - Polish & Optimization**
- [ ] Add reset functionality (with confirmation)
- [ ] Enhance design history (10 steps)
- [ ] Performance optimization pass
- [ ] Test all features together
- [ ] Bug fixes and refinements
- [ ] Code cleanup and documentation

**Deliverables**: Complete customization engine with patterns

**Note**: Once blank canvas mode is fully functional, branded models can be integrated using the same component system. This can be done in parallel or as a follow-up phase.

### Phase 2.5: Branded Models Integration (Optional - Week 4.5 or Parallel)

#### Branded Models Setup (5 Days)

**Day 1 (Monday) - Model Sourcing & Organization**
- [ ] Source branded models (Nike, Adidas, Vans, etc.)
- [ ] Validate model formats and quality
- [ ] Organize models in branded folder structure (Cloudflare R2)
- [ ] Create model metadata structure
- [ ] Upload models to Cloudflare R2
- [ ] Test model loading

**Day 2 (Tuesday) - Brand Selector UI**
- [ ] Design brand selector interface
- [ ] Create brand selector component - `BrandSelector.tsx`
- [ ] Add brand logos and thumbnails
- [ ] Integrate brand selector with mode system
- [ ] Test brand selection
- [ ] Add brand filtering/search

**Day 3 (Wednesday) - Model Selector**
- [ ] Create model selector component - `ModelSelector.tsx`
- [ ] Build model selector within brands
- [ ] Add model thumbnails/previews
- [ ] Integrate model selection with configurator
- [ ] Test model switching
- [ ] Add model information display

**Day 4 (Thursday) - Integration & Constraints**
- [ ] Test model switching between blank and branded
- [ ] Ensure unified component system works across both
- [ ] Implement brand-specific constraints (optional)
- [ ] Add constraint validation
- [ ] Test constraint system
- [ ] Document brand constraints

**Day 5 (Friday) - Testing & Performance**
- [ ] Test performance with multiple models
- [ ] Optimize model loading
- [ ] Test on different devices
- [ ] Fix integration issues
- [ ] Performance benchmarking
- [ ] Final testing and refinements

**Deliverables**: Branded models integrated, users can switch between blank canvas and branded models

---

### Phase 3: User Features (Weeks 5-6)

#### Week 5: Account & Persistence

**Day 1 (Monday) - Server Foundation**
- [ ] Enhance server folder structure (routes, controllers, models, services)
- [ ] Set up Prisma or TypeORM (PostgreSQL ORM)
- [ ] Configure PostgreSQL connection (using Docker service)
- [ ] Configure Redis connection (using Docker service)
- [ ] Test database connections
- [ ] Create environment configuration system

**Day 2 (Tuesday) - Database Schema & Migrations**
- [ ] Design database schema (User, Design tables)
- [ ] Create Prisma schema or TypeORM entities
- [ ] Set up database migrations
- [ ] Run initial migration
- [ ] Test database operations
- [ ] Set up Cloudflare R2 integration service

**Day 3 (Wednesday) - Authentication System**
- [ ] Set up JWT authentication system
- [ ] Create password hashing service (bcrypt)
- [ ] Create user registration endpoint
- [ ] Create user login endpoint
- [ ] Create authentication middleware
- [ ] Test authentication flow

**Day 4 (Thursday) - Design API Endpoints**
- [ ] Build save design API endpoint
- [ ] Build get designs API endpoint (list user designs)
- [ ] Build get single design API endpoint
- [ ] Build update design API endpoint
- [ ] Build delete design API endpoint
- [ ] Set up CORS for client domain
- [ ] Test all API endpoints

**Day 5 (Friday) - Client Integration**
- [ ] Set up API client service (axios/fetch) - `api/client.ts`
- [ ] Create authentication service - `services/api/auth.ts`
- [ ] Create design service - `services/api/designs.ts`
- [ ] Implement login/register UI components
- [ ] Test API integration
- [ ] Deploy server to Railways
- [ ] Configure environment variables in Railways

**Weekend (Optional) - Client UI & Testing**
- [ ] Implement design library UI - `DesignLibrary.tsx`
- [ ] Add design naming and tagging
- [ ] Create edit saved design flow
- [ ] Implement design deletion
- [ ] Add user profile page
- [ ] Test full authentication and persistence flow

**Deliverables**: Separate server deployed on Railways, client can save and manage designs via API

#### Week 6: Sharing & Social Features

**Day 1 (Monday) - URL Encoding & Share Modal**
- [ ] Design URL encoding strategy for design state
- [ ] Implement design state serialization
- [ ] Create URL encoding/decoding utilities
- [ ] Create share modal component - `ShareModal.tsx`
- [ ] Add social media options (Instagram, Twitter, Facebook)
- [ ] Test URL encoding/decoding

**Day 2 (Tuesday) - Social Media Export**
- [ ] Implement screenshot capture for sharing
- [ ] Create social media image export service
- [ ] Add image optimization for social platforms
- [ ] Create share image generation
- [ ] Test image export functionality
- [ ] Add copy-to-clipboard functionality

**Day 3 (Wednesday) - Design Gallery**
- [ ] Design gallery data structure
- [ ] Create design gallery component - `DesignGallery.tsx`
- [ ] Implement public/private gallery toggle
- [ ] Add gallery filtering and sorting
- [ ] Create gallery item component
- [ ] Test gallery functionality

**Day 4 (Thursday) - Favorites & Embedding**
- [ ] Create favorite designs system
- [ ] Add favorite/unfavorite functionality
- [ ] Create favorites API endpoints (server)
- [ ] Implement embeddable widget functionality
- [ ] Create widget embed code generator
- [ ] Test favorites and embedding

**Day 5 (Friday) - Analytics & Testing**
- [ ] Implement design sharing analytics
- [ ] Add share tracking (client-side)
- [ ] Create share analytics API endpoint (server)
- [ ] Test sharing on all platforms (desktop, mobile)
- [ ] Test social media exports
- [ ] Bug fixes and refinements

**Deliverables**: Complete sharing system

---

### Phase 4: E-Commerce Integration (Week 7)

#### Week 7: Shopping Cart & Checkout

**Day 1 (Monday) - E-Commerce API Integration**
- [ ] Research and choose e-commerce platform (Shopify/WooCommerce)
- [ ] Set up API credentials
- [ ] Create e-commerce service - `services/ecommerce.ts`
- [ ] Integrate product catalog API
- [ ] Test API connection
- [ ] Set up API error handling

**Day 2 (Tuesday) - Pricing & Size Selection**
- [ ] Design pricing calculation logic
- [ ] Implement real-time pricing calculator
- [ ] Create size selector component - `SizeSelector.tsx`
- [ ] Add size validation
- [ ] Integrate pricing with customization
- [ ] Test pricing calculations

**Day 3 (Wednesday) - Cart Functionality**
- [ ] Design cart data structure
- [ ] Create cart store - `cartStore.ts`
- [ ] Build add-to-cart functionality
- [ ] Implement cart state management
- [ ] Create cart UI component - `Cart.tsx`
- [ ] Test cart operations

**Day 4 (Thursday) - Stock & Guest Cart**
- [ ] Add stock availability checking
- [ ] Create stock status display
- [ ] Implement guest cart (localStorage)
- [ ] Add cart persistence for guests
- [ ] Sync guest cart with authenticated cart
- [ ] Test guest cart functionality

**Day 5 (Friday) - Checkout Integration**
- [ ] Create checkout flow component
- [ ] Integrate checkout API
- [ ] Add estimated delivery display
- [ ] Implement payment processing (Stripe)
- [ ] Test full purchase flow
- [ ] Add order confirmation

**Deliverables**: End-to-end e-commerce integration

---

### Phase 5: AR & Mobile (Week 8)

#### Week 8: AR Try-On & Mobile Optimization

**Day 1 (Monday) - WebXR Setup**
- [ ] Research WebXR API capabilities
- [ ] Implement WebXR AR session detection
- [ ] Create AR session manager
- [ ] Set up AR scene rendering
- [ ] Test WebXR on supported devices
- [ ] Implement Model Viewer fallback

**Day 2 (Tuesday) - AR Product Placement**
- [ ] Research MediaPipe or alternative for face/feet detection
- [ ] Implement face/feet detection (if using MediaPipe)
- [ ] Build AR product placement system
- [ ] Create AR anchor system
- [ ] Test product placement accuracy
- [ ] Add AR interaction controls

**Day 3 (Wednesday) - AR Capture & Mobile UI**
- [ ] Add AR screenshot capture
- [ ] Add AR video capture (optional)
- [ ] Create responsive UI improvements
- [ ] Optimize mobile layout
- [ ] Test AR capture functionality
- [ ] Refine mobile UI components

**Day 4 (Thursday) - Touch Controls & Optimization**
- [ ] Add touch gesture controls
- [ ] Implement pinch-to-zoom
- [ ] Add swipe gestures
- [ ] Implement mobile-specific optimizations
- [ ] Reduce pixel ratio on mobile (1.0)
- [ ] Disable shadows on mobile
- [ ] Optimize texture sizes for mobile

**Day 5 (Friday) - Testing & Refinement**
- [ ] Test on iOS devices (Safari)
- [ ] Test on Android devices (Chrome)
- [ ] Performance optimization for mobile
- [ ] Fix mobile-specific bugs
- [ ] Test AR on multiple devices
- [ ] Document AR limitations

**Deliverables**: Working AR try-on, optimized mobile experience

---

### Phase 6: Polish & Optimization (Weeks 9-10)

#### Week 9: Performance & Testing

**Day 1 (Monday) - LOD & Compression**
- [ ] Implement LOD (Level of Detail) system
- [ ] Create LOD switching logic based on distance
- [ ] Add texture compression (Basis Universal)
- [ ] Optimize model loading (Draco compression)
- [ ] Test LOD performance improvements
- [ ] Verify compression file sizes

**Day 2 (Tuesday) - Caching & Performance Monitoring**
- [ ] Implement aggressive caching strategy
- [ ] Add browser caching for assets
- [ ] Set up performance monitoring (Stats.js)
- [ ] Add Web Vitals tracking
- [ ] Create performance dashboard
- [ ] Test caching effectiveness

**Day 3 (Wednesday) - Unit & Component Tests**
- [ ] Set up Vitest testing framework
- [ ] Write unit tests for utilities
- [ ] Write unit tests for services
- [ ] Set up React Testing Library
- [ ] Write component tests for key components
- [ ] Achieve minimum 60% test coverage

**Day 4 (Thursday) - E2E Testing**
- [ ] Set up Playwright
- [ ] Create E2E test for customization flow
- [ ] Create E2E test for save/load flow
- [ ] Create E2E test for sharing flow
- [ ] Run E2E test suite
- [ ] Fix E2E test issues

**Day 5 (Friday) - Performance Optimization**
- [ ] Identify performance bottlenecks
- [ ] Fix performance issues
- [ ] Test on low-end devices
- [ ] Optimize render performance
- [ ] Optimize memory usage
- [ ] Final performance audit

**Deliverables**: Optimized performance, test coverage

#### Week 10: Final Polish & Launch Prep

**Day 1 (Monday) - UI/UX Polish**
- [ ] UI/UX refinements (spacing, colors, typography)
- [ ] Add loading animations
- [ ] Implement error boundaries
- [ ] Add error handling UI
- [ ] Improve accessibility (ARIA labels, keyboard navigation)
- [ ] Test UI on different screen sizes

**Day 2 (Tuesday) - Onboarding & Analytics**
- [ ] Create onboarding tutorial/guide
- [ ] Add tooltips for key features
- [ ] Set up analytics tracking (Amplitude or Google Analytics)
- [ ] Add event tracking for key actions
- [ ] Set up error monitoring (Sentry)
- [ ] Configure error alerts

**Day 3 (Wednesday) - Documentation**
- [ ] Create README files (client and server)
- [ ] Document API endpoints
- [ ] Create component documentation
- [ ] Write deployment guide
- [ ] Create troubleshooting guide
- [ ] Document environment variables

**Day 4 (Thursday) - Production Deployment**
- [ ] Deploy client to Vercel (production)
- [ ] Deploy server to Railways (production)
- [ ] Configure production environment variables
- [ ] Set up Cloudflare R2 production bucket
- [ ] Configure CORS for production domains
- [ ] Test end-to-end in production environment
- [ ] Set up custom domains (if needed)

**Day 5 (Friday) - Testing & Launch**
- [ ] Conduct user testing (internal/external)
- [ ] Gather feedback
- [ ] Fix critical bugs
- [ ] Final performance check
- [ ] Security audit
- [ ] Prepare launch announcement
- [ ] Monitor production metrics

**Deliverables**: Production-ready application deployed on Vercel (client) and Railways (server)

---

## 🎯 Priority Matrix

### Critical (P0) - Must Have for MVP
| Feature | Priority | Week | Impact | Effort |
|---------|----------|------|--------|--------|
| Mode selector (Blank/Branded) | P0 | 1 | High | Low |
| Blank canvas model loading | P0 | 1-2 | High | Medium |
| Basic material swapping | P0 | 3 | High | Medium |
| Color customization | P0 | 3 | High | Medium |
| Component selection | P0 | 2 | High | Low |
| Add to cart | P0 | 7 | High | Medium |
| User authentication | P0 | 5 | High | Medium |
| Save designs | P0 | 5 | High | Medium |
| Mobile responsive | P0 | 8 | High | High |
| Performance (60fps) | P0 | 9 | High | High |

### High (P1) - Important for Launch
| Feature | Priority | Week | Impact | Effort |
|---------|----------|------|--------|--------|
| Branded models integration | P1 | 4.5 | High | Medium |
| Brand selector UI | P1 | 4.5 | Medium | Low |
| Pattern system | P1 | 4 | Medium | Medium |
| Comparison mode | P1 | 4 | Medium | Low |
| Share via URL | P1 | 6 | Medium | Low |
| Design library | P1 | 5 | Medium | Medium |
| Camera presets | P1 | 4 | Medium | Low |
| Lighting presets | P1 | 4 | Medium | Low |
| Undo/redo | P1 | 3 | Medium | Low |
| Screenshot capture | P1 | 4 | Medium | Low |
| Real-time pricing | P1 | 7 | Medium | Medium |

### Medium (P2) - Nice to Have
| Feature | Priority | Week | Impact | Effort |
|---------|----------|------|--------|--------|
| AR try-on | P2 | 8 | Medium | High |
| Social media export | P2 | 6 | Low | Medium |
| Design gallery (public) | P2 | 6 | Low | Medium |
| Pattern intensity controls | P2 | 4 | Low | Low |
| Video recording | P2 | 4 | Low | High |
| Limited edition system | P2 | Post-MVP | Low | High |
| Achievement badges | P2 | Post-MVP | Low | Medium |
| Custom pattern upload | P2 | Post-MVP | Low | High |

### Low (P3) - Future Enhancements
| Feature | Priority | Week | Impact | Effort |
|---------|----------|------|--------|--------|
| Multi-shoe comparison | P3 | Post-MVP | Low | High |
| AI design suggestions | P3 | Post-MVP | Low | Very High |
| Collaborative design | P3 | Post-MVP | Low | Very High |
| 3D printing export | P3 | Post-MVP | Low | High |
| Virtual showroom | P3 | Post-MVP | Low | Very High |

---

## 📊 Success Metrics

### Technical KPIs
- **Initial Load Time**: <5 seconds
- **Material Swap**: <200ms
- **Color Change**: <100ms
- **FPS**: 60fps desktop, 30fps mobile
- **Model File Size**: <5MB
- **Time to Interactive**: <3 seconds

### Business KPIs
- **Conversion Rate**: Target 25% increase
- **Average Session Time**: >5 minutes
- **Design Save Rate**: >40% of users
- **Share Rate**: >15% of designs
- **Return Rate**: <5% (reduced returns)
- **Average Order Value**: 50% increase

### User Experience KPIs
- **User Satisfaction**: >4.5/5
- **Task Completion Rate**: >80%
- **Error Rate**: <2%
- **Support Tickets**: <5% of users

---

## ⚠️ Risk Mitigation

### Technical Risks
1. **Performance on Low-End Devices**
   - *Mitigation*: Aggressive LOD, mobile optimizations, fallbacks

2. **Large Model File Sizes**
   - *Mitigation*: Draco compression, progressive loading, CDN

3. **Browser Compatibility**
   - *Mitigation*: WebGL detection, graceful fallbacks, polyfills

4. **AR Support Limitations**
   - *Mitigation*: WebXR detection, Model Viewer fallback

### Business Risks
1. **Low Adoption Rate**
   - *Mitigation*: Onboarding, tutorials, marketing

2. **High Server Costs**
   - *Mitigation*: CDN caching, edge functions, optimization

3. **E-Commerce Integration Complexity**
   - *Mitigation*: Use established APIs (Shopify), phased rollout

---

## 🚀 Post-MVP Enhancements

### Phase 2 Features (Months 2-3)
- AI-powered design suggestions
- Collaborative design (multi-user)
- Advanced pattern editor
- 3D printing compatibility
- Virtual showroom integration
- Analytics dashboard for brands

### Phase 3 Features (Months 4-6)
- Mobile app (React Native)
- VR mode (WebXR)
- Social features (follow designers, likes)
- Marketplace (sell custom designs)
- Brand partnerships (exclusive materials)

---

## 🎓 Learning Benefits of Dual-Mode System

### Why This Approach Works

#### For Learning
1. **Blank Canvas First**: Start simple, understand fundamentals without constraints
2. **Progressive Complexity**: Add branded models once core systems are understood
3. **Comparison Learning**: See how constraints affect design decisions
4. **Reusable Systems**: Same component/material system works for both modes

#### For Portfolio
1. **Demonstrates Flexibility**: Shows ability to work with both constrained and unconstrained systems
2. **Real-World Application**: Branded models show understanding of production scenarios
3. **Technical Depth**: Unified system architecture demonstrates advanced thinking
4. **Diverse Examples**: More portfolio pieces with different use cases

### Recommended Learning Path
1. **Weeks 1-4**: Focus on Blank Canvas mode - build core systems
2. **Week 4.5+**: Integrate branded models using established systems
3. **Ongoing**: Add more branded models as you find them

### Asset Sourcing Strategy
- **Blank Canvas**: Create in Blender (great learning) or use free models
- **Branded Models**: 
  - Educational/fan-made models (Sketchfab, TurboSquid)
  - Free resources (Poly Haven, Free3D)
  - Always label as "Educational/Non-Commercial" in portfolio

---

## 📚 Additional Resources

### Design Inspiration
- Nike By You (Nike ID)
- Adidas Configurator
- Vans Custom
- New Balance Custom

### Technical References
- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [GLTF Specification](https://www.khronos.org/gltf/)
- [WebXR API](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API)

### Tools & Services
- **Blender**: 3D modeling and optimization
- **gltf.report**: Model analysis
- **glTF-Transform**: CLI for optimization
- **Basis Universal**: Texture compression

---

*This roadmap provides a structured 10-week path to MVP with clear priorities, deliverables, and success metrics. Adjust timelines based on team size and complexity.*

