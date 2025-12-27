# 🎨 Fashion Configurator

<div align="center">

**A real-time 3D sneaker customization platform built with Next.js, Three.js, and React Three Fiber**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.160-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-4.18-green?style=for-the-badge&logo=express)](https://expressjs.com/)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Architecture](#-architecture)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Development](#-development)
- [Adding New Models](#-adding-new-models)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

---

## 🎯 Overview

The Fashion Configurator is an interactive 3D web application that allows users to customize sneakers in real-time. Built with modern web technologies, it provides a seamless experience for visualizing and configuring footwear with different materials, colors, and components.

### Key Capabilities

- 🎨 **Real-time Material Swapping** - Apply different materials to individual components
- 🎭 **Component Isolation** - Select and customize specific parts (sole, upper, laces, etc.)
- 🌍 **Dynamic Environments** - Switch between HDR background environments
- 📦 **Model Management** - Load and switch between different 3D models
- 🎨 **Material Library** - Extensive library of PBR materials with texture maps
- ⚡ **Performance Optimized** - Efficient loading and rendering with caching

---

## ✨ Features

### 🎨 Material System
- **PBR Materials** - Physically Based Rendering for realistic materials
- **Texture Maps** - Support for albedo, normal, roughness, and metallic maps
- **Color Customization** - Solid colors and textured materials
- **Material Categories** - Leather, rubber, fabric, metal, premium materials
- **Price Modifiers** - Dynamic pricing based on material selection

### 🎯 Component Customization
- **Automatic Detection** - Smart component identification from mesh names
- **Component Types** - Sole, Upper, Midsole, Outsole, Laces, Logo, Heel Tab, Tongue, Eyelets, Lining
- **Visual Feedback** - Subtle highlighting for hovered and selected components
- **Component Labels** - Hover labels showing component names in real-time
- **Click-to-Select** - Interactive component selection via mouse click
- **Material Mapping** - Apply materials to specific components

### 🌐 Environment & Models
- **HDR Backgrounds** - Realistic lighting with High Dynamic Range images
- **Multiple Models** - Switch between different sneaker models
- **Dynamic Scaling** - Automatic and manual model scaling
- **Camera Controls** - Orbit, zoom, and pan controls

### 🚀 Performance
- **Texture Caching** - Efficient texture loading and caching
- **Model Optimization** - Support for compressed GLB files
- **Lazy Loading** - On-demand resource loading
- **State Management** - Zustand for efficient state updates

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Client (Next.js)                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │   Pages      │  │  Components  │  │    Hooks     │     │
│  │              │  │              │  │              │     │
│  │ • Branded    │  │ • Viewer     │  │ • Model      │     │
│  │ • Blank      │  │ • Config     │  │ • Material   │     │
│  │              │  │ • Selectors  │  │ • Component  │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │    Stores    │  │     Lib      │  │     Data     │     │
│  │              │  │              │  │              │     │
│  │ • Zustand    │  │ • Texture    │  │ • Materials  │     │
│  │ • State      │  │ • Component  │  │ • Models     │     │
│  │              │  │ • Material   │  │ • Backgrounds│     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└─────────────────────────────────────────────────────────────┘
                            ↕ HTTP/REST
┌─────────────────────────────────────────────────────────────┐
│                    Server (Express.js)                      │
│  ┌──────────────┐  ┌──────────────┐                       │
│  │    Routes    │  │   Services   │                       │
│  │              │  │              │                       │
│  │ • Materials  │  │ • R2 Client  │                       │
│  │ • Health     │  │ • File List  │                       │
│  └──────────────┘  └──────────────┘                       │
└─────────────────────────────────────────────────────────────┘
                            ↕ S3 API
┌─────────────────────────────────────────────────────────────┐
│              Cloudflare R2 (Object Storage)                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │    Models    │  │   Textures   │  │ Backgrounds  │     │
│  │              │  │              │  │              │     │
│  │ • .glb files │  │ • Material   │  │ • .hdr files │     │
│  │              │  │   maps       │  │              │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└─────────────────────────────────────────────────────────────┘
```

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
   ```

   **Server** (`.env`):
   ```env
   PORT=3001
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

5. **Open your browser**
   ```
   http://localhost:3000
   ```

---

## 📁 Project Structure

```
fashon_config/
├── 📂 client/                 # Next.js frontend application
│   ├── 📂 app/               # Next.js App Router pages
│   │   ├── configurator/     # Configurator pages
│   │   │   ├── branded/      # Brand collection mode
│   │   │   └── blank/        # Blank canvas mode
│   │   └── layout.tsx        # Root layout
│   ├── 📂 components/        # React components
│   │   ├── configurator/     # Configurator UI components
│   │   └── viewer/           # 3D viewer components
│   ├── 📂 hooks/             # Custom React hooks
│   ├── 📂 lib/               # Utility libraries
│   ├── 📂 stores/            # Zustand state management
│   ├── 📂 data/              # Static data (JSON)
│   └── 📂 public/            # Static assets
│
├── 📂 server/                # Express.js backend API
│   ├── 📂 src/
│   │   ├── routes/           # API route handlers
│   │   └── server.ts         # Express server setup
│   └── .env                  # Server environment variables
│
├── 📂 scripts/               # Utility scripts
│   ├── generate-materials-from-r2.js
│   ├── validate-model-names.js
│   └── analyze-models.js
│
├── 📄 MODEL_PREPARATION_TEMPLATE.md  # Model preparation guide
├── 📄 MODEL_CHECKLIST.md             # Quick model checklist
└── 📄 README.md                      # This file
```

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
| **Tailwind CSS** | Styling | 3.3+ |

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
- **Docker** - Local development services (optional)

---

## 💻 Development

### Available Scripts

**Client:**
```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

**Server:**
```bash
pnpm dev      # Start development server with hot reload
pnpm build    # Compile TypeScript
pnpm start    # Start production server
```

### Development Workflow

1. **Make changes** to code
2. **Hot reload** automatically updates the browser
3. **Check console** for errors and component detection logs
4. **Test materials** by selecting components and applying materials
5. **Verify** model scaling and positioning

### Debugging

- **Browser Console** - Check for component detection logs
- **Network Tab** - Monitor texture and model loading
- **React DevTools** - Inspect component state
- **Three.js Inspector** - Debug 3D scene (if installed)

---

## 🎨 Adding New Models

When adding new 3D models, follow the comprehensive preparation guide:

### Quick Checklist
📋 See [`MODEL_CHECKLIST.md`](./MODEL_CHECKLIST.md) for a quick reference

### Full Documentation
📖 See [`MODEL_PREPARATION_TEMPLATE.md`](./MODEL_PREPARATION_TEMPLATE.md) for detailed instructions

### Steps

1. **Prepare Model**
   - Export as GLB format
   - Name meshes following conventions (see template)
   - Optimize file size if needed
   - Test in GLB viewer

2. **Upload to R2**
   - Use `upload-to-r2.js` script or manual upload
   - Ensure CORS headers are configured

3. **Add to Config**
   - Update `client/data/models.json`
   - Set correct scale, position, rotation
   - Test component detection

4. **Validate**
   - Run `scripts/validate-model-names.js`
   - Check browser console for component detection
   - Verify materials can be applied

---

## 🚀 Deployment

### Client (Vercel/Netlify)

1. **Build the project**
```bash
cd client
   pnpm build
   ```

2. **Deploy**
   - Connect repository to Vercel/Netlify
   - Set environment variables
   - Deploy automatically on push

### Server (Railways/Render)

1. **Build the project**
```bash
cd server
   pnpm build
   ```

2. **Deploy**
   - Connect repository to hosting platform
   - Set environment variables (R2 credentials)
   - Deploy

### Environment Variables

Ensure all required environment variables are set in your deployment platform.

---

## 🤝 Contributing

### Code Style

- Use TypeScript for type safety
- Follow React best practices
- Use functional components with hooks
- Keep components modular and reusable

### Pull Request Process

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request with description

### Adding Features

- **New Components** - Add to `components/` directory
- **New Hooks** - Add to `hooks/` directory
- **New Materials** - Use the automated R2 material generator
- **New Models** - Follow the model preparation template

---

## 📚 Additional Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [GLB Format Guide](https://www.khronos.org/gltf/)

---

## 📝 License

This project is private and proprietary.

---

## 🙏 Acknowledgments

- Three.js community for excellent 3D web graphics tools
- React Three Fiber for seamless React integration
- Cloudflare for R2 object storage

---

<div align="center">

**Built with ❤️ for the future of 3D web experiences**

[Report Bug](https://github.com/your-repo/issues) · [Request Feature](https://github.com/your-repo/issues)

</div>
