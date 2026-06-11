# 🐾 OpenPaw Startup Landing Page

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r173-white?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-green?style=for-the-badge&logo=greensock)](https://greensock.com/gsap/)

> **The future of autonomous robotics, built in public.**  
> A cinematic, story-driven landing page for OpenPaw, featuring immersive 3D interactions and fluid animations.

---

## ✨ Features

- 🎬 **Cinematic Storyline**: 13 custom-crafted scenes taking the user on a journey from "Silence" to the "Future."
- 🤖 **Interactive 3D**: Real-time rendering of the **BallBot** using React Three Fiber.
- 🌊 **Ultra-Smooth Scrolling**: Powered by **Lenis** for a premium, buttery-smooth experience.
- 🎨 **Dynamic Animations**: Complex scroll-triggered sequences using **GSAP** and **Framer Motion**.
- 🔊 **Atmospheric Audio**: Immersive soundscapes and interactive sound effects powered by **Howler.js**.
- ⚡ **Cutting-Edge Tech**: Built with the latest **Next.js 15**, **React 19**, and **Tailwind CSS 4**.

---

## 🚀 Quick Start

Follow these steps to get your local development environment up and running.

### 1. Clone the repository
```bash
git clone https://github.com/openpawrobotai/openpaw-website_v1.git
cd openpaw-website_v1
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory (optional, if you're using the database features):
```env
DATABASE_URL=your_postgresql_url_here
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 15** | Framework (App Router) |
| **React 19** | UI Library |
| **Three.js / R3F** | 3D Graphics |
| **GSAP / Framer Motion** | Professional Animations |
| **Lenis** | Smooth Scrolling |
| **Drizzle ORM** | Database Management |
| **Tailwind CSS 4** | Styling |

---

## 📁 Project Structure

```text
src/
├── app/            # Next.js App Router (Pages & Layouts)
├── components/     # UI Components
│   ├── sections/   # The 13 Cinematic Scenes
│   └── ui/         # Reusable UI elements
├── context/        # Global state (Cursor, etc.)
├── db/             # Database Schema & Drizzle config
└── utils/          # Helper functions & Sound management
```

---

## 🤝 Contributing

We love contributors! Since we **Build in Public**, anyone is welcome to help refine the OpenPaw experience.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Built with ❤️ by the <b>OpenPaw Team</b>
</p>
