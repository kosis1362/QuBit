# Qubit — Sovereign Quantum Infrastructure & Consulting Platform

A high-performance enterprise web application inspired by **Kyndryl's architectural design system**, built with **FastAPI**, **React (Vite + Tailwind CSS)**, and **PostgreSQL (Neon)**.

---

## 🌟 Key Architecture & Highlights

### 1. Kyndryl-Inspired UI & Design System
- **Warm Architectural Canvas:** `#FBF9F5` (Sandstone Alabaster) and `#FAF7F2` providing a human-centric alternative to cold corporate stark white.
- **Brand Accent:** High-chroma **Terracotta Red-Orange** (`#FF462D` / `#D82C00`), featured across CTA pills, active indicators, and quantum metrics.
- **High-Contrast Grounding:** Deep Onyx Charcoal (`#0D0D0D` / `#121212`) for enterprise footer and dark-mode terminal surfaces.
- **Bento Grid Architecture:** 1px hairline borders (`rgba(0,0,0,0.08)` and `rgba(255,255,255,0.12)`), tactile `-4px` vertical hover elevation, image scaling (`1.03`), and directional arrow animations.

### 2. High-Impact Video Pipeline
All uploaded videos were processed using FFmpeg:
- **First 10–14 Seconds Trimmed:** Extracts the high-energy introduction without unnecessary overhead.
- **Vertical-to-Horizontal Orientation Correction:**
  - `qubit_interface.mp4`: Rotated 90° counter-clockwise so the desk, mouse, hand, and application icons (DaVinci Resolve, Photoshop, Notion) appear upright and widescreen 16:9!
  - `qubit_core.mp4`: Scaled and centered with seamless pure black widescreen padding (1280x720).
  - `qubit_matrix.mp4`: Glowing green 3D quantum lattice formatted into widescreen 16:9 (1280x720).
  - `qubit_quantum.mp4`: Quantum orbital particle sphere centered in 16:9 widescreen (1280x720).

### 3. Full-Stack Integration
- **Frontend (React 19 + Vite + Tailwind CSS):**
  - Sticky frosted-glass navigation (`backdrop-filter: blur(16px)`).
  - Interactive Hero Video player with play/pause and audio controls.
  - 4-column live performance verification strip.
  - Video Bento Showcase highlighting all 4 processed assets.
  - **Live Quantum Circuit Simulator:** Configurable qubit depth and algorithm selection with state vector preview.
  - Enterprise Consultation & Inquiry Form connected directly to the database.
- **Backend (FastAPI):**
  - API Routes: `/api/health`, `/api/inquiries`, `/api/newsletter`, `/api/simulate`, `/api/metrics`, `/api/solutions`.
  - Swagger documentation available at `http://127.0.0.1:8000/docs`.
- **Database (PostgreSQL):**
  - Hosted on **Neon Cloud PostgreSQL** with connection pooling.
  - Tables: `inquiries`, `newsletter_subscribers`, `quantum_simulations`.

---

## 🚀 Running the Project

### Prerequisites
- Node.js (v18+)
- Python (v3.10+)

### Start FastAPI Backend
```bash
cd backend
python -m uvicorn main:app --host 127.0.0.1 --port 8000 --reload
```

### Start React Frontend
```bash
cd frontend
npm install
npm run dev -- --host 127.0.0.1 --port 3000
```
- Open your browser at: `http://127.0.0.1:3000`
- API documentation: `http://127.0.0.1:8000/docs`

