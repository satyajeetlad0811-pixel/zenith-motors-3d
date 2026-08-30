# 🚗 ZENITH MOTORS — Luxury 3D Car Discovery & On-Road Price Platform

> **The Pinnacle of Luxury Automotive Discovery, 3D WebGL Configurator, City Price Engine & Executive Dealership Control.**

---

## 🌟 Key Highlights

- **3D WebGL Turntable & Studio Configurator**: Real-time 360-degree rotating vehicle showcase with dynamic metallic, pearl, and matte paint finishes.
- **12-City On-Road Price Engine**: Accurate calculations for Ex-Showroom, RTO Road Tax, GST/Cess, Insurance, and Fastag across Pune, Mumbai, Delhi, Bengaluru, and 8 more metro hubs.
- **Multi-Car Comparison Suite**: Side-by-side comparison across engines, 0–100 km/h acceleration, dimensions, boot capacity, and features.
- **15 Flagship Models Across 5 Marques**:
  - 👑 **Rolls-Royce**: Phantom VIII, Ghost, Spectre (EV)
  - ⚡ **BMW**: M5 Series, i7 Electric, M5 Sports
  - 🌟 **Mercedes-Benz**: G-Wagon (G 63 AMG), S-Class (W223)
  - 🛡️ **Toyota**: Land Cruiser 300, Fortuner Legender, Innova Crysta
  - 🏔️ **Mahindra**: Thar (Gen 2 4x4), Scorpio-N, Scorpio Classic, XUV700
- **Explore Innovations & Features**: Authentic macro component photography across Exterior, Interior, Safety, and Technology with interactive spotlight modals.
- **Dual-Role Authentication & Executive Control Suite**:
  - **VIP Client Portal**: Private test-drive booking and saved configurations.
  - **Executive Admin Dashboard (`/admin`)**: Real-time client reservation stream, showroom inventory management, and exportable analytics. Access strictly restricted to authorized Executive Director.

---

## 📁 Repository File Structure

```text
car/
├── src/
│   ├── app/
│   │   ├── admin/
│   │   │   └── page.tsx             # Executive Showroom Control Suite
│   │   ├── cars/
│   │   │   └── [id]/
│   │   │       └── page.tsx         # Detailed Vehicle 3D & Specs Page
│   │   ├── compare/
│   │   │   └── page.tsx             # Multi-Vehicle Comparison Matrix
│   │   ├── login/
│   │   │   └── page.tsx             # VIP & Executive Authentication Portal
│   │   ├── pricing/
│   │   │   └── page.tsx             # 12-City On-Road Price Calculator
│   │   ├── globals.css              # Custom Luxury Dark Theme & Glassmorphism
│   │   ├── layout.tsx               # Root Layout with Fonts & AuthProvider
│   │   └── page.tsx                 # Homepage Showcase & Flagship Collection
│   │
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── CameraController.tsx      # 3D Camera Controls
│   │   │   ├── Car3DProceduralModel.tsx  # Procedural Luxury Vehicle Meshes
│   │   │   ├── CarStudioCanvas.tsx       # Three.js / R3F Orbiting Turntable
│   │   │   ├── HotspotMarkers.tsx        # Interactive Feature Hotspots
│   │   │   └── StudioLighting.tsx        # Dynamic Automotive Studio Shaders
│   │   ├── common/
│   │   │   ├── Footer.tsx                # Brand Overview & Quick Links
│   │   │   ├── Navbar.tsx                # Dynamic Header & Auth Trigger
│   │   │   └── TestDriveModal.tsx        # VIP Booking Modal with Real-Time Sync
│   │   └── home/
│   │       ├── BrandSelector.tsx         # Marque Switcher
│   │       ├── CarCollection.tsx         # Showroom Fleet Grid
│   │       ├── EMICalculatorSection.tsx  # Luxury Finance Calculator
│   │       ├── FeatureExplorer.tsx       # Innovations & Spotlight Modal
│   │       ├── HeroCinematic.tsx         # Cinematic Hero Header
│   │       ├── NewsSection.tsx           # Automotive News & Insights
│   │       ├── PriceCalculatorSection.tsx# Embedded Quick Price Tool
│   │       ├── QuickCompareSection.tsx   # Embedded Compare Tool
│   │       ├── SmartSearchFilter.tsx     # Command-K Search Engine
│   │       └── ThreeDExperience.tsx      # Standalone 3D Experience Section
│   │
│   ├── context/
│   │   └── AuthContext.tsx          # Authentication State & Admin Email Lock
│   ├── data/
│   │   ├── brands.ts                # 5 Luxury Marques Data
│   │   ├── cars.ts                  # 15 Detailed Vehicles Registry
│   │   ├── cities.ts                # 12 Cities Tax & RTO Rates
│   │   └── features.ts              # Verified Feature Components & Photos
│   ├── lib/
│   │   ├── bookingsStorage.ts       # Persistent Client Bookings Sync
│   │   ├── pricingCalculator.ts     # Precise RTO & GST Pricing Engine
│   │   └── utils.ts                 # Formatting & Helpers
│   └── types/
│       └── car.ts                   # TypeScript Interfaces & Schemas
│
├── .gitignore                       # Clean Git Ignored Paths
├── next.config.mjs                  # Next.js Config with Image Domains
├── package.json                     # NPM Dependencies & Scripts
├── postcss.config.mjs               # PostCSS Configuration
├── tailwind.config.ts               # Custom Tailwind Styling & Neon Accents
├── tsconfig.json                    # TypeScript Configuration
└── README.md                        # Documentation & Project Guide
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000]( http://localhost:3000) in your browser to view the application.

---

## 🛠️ Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Glassmorphism, Neon Accents
- **3D Graphics**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Confetti**: Canvas Confetti
