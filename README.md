# Dhruv Gohil — iOS Developer Portfolio

A modern, interactive personal portfolio built with **React** and **Vite**, showcasing my iOS development journey, projects, certificates, meetups, and ways to connect.

![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10-0055FF?logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- **🎨 Aesthetic dark theme** with glassmorphism, gradient accents, and smooth animations
- **🖼️ Interactive Gallery** — masonry-style collage of meetup photos with hover/zoom
- **⚽ Physics-based Skills section** — drag, throw, and bounce skill orbs around the play area
- **⌨️ Typing animation** on the home screen
- **🖨️ Print-ready Resume** with one-click "Save as PDF"
- **📧 Working contact form** powered by EmailJS
- **📱 Fully responsive** across mobile, tablet, and desktop
- **🎬 Framer Motion** transitions between every section

---

## 🧰 Tech Stack

| Layer       | Tools                                        |
| ----------- | -------------------------------------------- |
| Framework   | React 18 + Vite 5                            |
| Routing     | React Router DOM 6                           |
| Animation   | Framer Motion 10                              |
| Icons       | Lucide React                                 |
| Email       | EmailJS (no backend needed)                  |
| Styling     | Plain CSS modules with custom properties     |
| Deployment  | Static build (Vite `dist/`)                  |

---

## 📂 Project Structure

```
src/
├── App.jsx                  # Routes
├── main.jsx                 # Entry point
├── index.css                # Global styles + design tokens
├── components/
│   └── Navbar.jsx           # Sticky nav + mobile drawer
├── pages/
│   ├── Home.jsx             # Hero + intro + contact cards
│   ├── Projects.jsx         # Professional + personal projects
│   ├── Gallery.jsx          # Meetup photo collage
│   ├── Skills.jsx           # Draggable physics orbs
│   ├── Certificates.jsx     # Hackathon wins + certifications
│   ├── Resume.jsx           # Print-ready CV
│   ├── About.jsx            # About me
│   └── Contact.jsx          # Contact form
└── CSS/                     # Page-specific styles
public/
└── gallery/                 # Image assets (logos, certs, photos, meetups)
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** (or pnpm / yarn)

### Install & run

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🔐 Environment Variables (for Contact form)

Create a `.env` file in the project root with your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Sign up free at [emailjs.com](https://www.emailjs.com/).

---

## 📜 Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start Vite dev server with HMR       |
| `npm run build`   | Build optimized production bundle    |
| `npm run preview` | Preview the built bundle locally     |

---

## 👤 Author

**Dhruv Gohil** — iOS Developer • Mobile Engineer

- 📧 Email: [dhruvgohil448@gmail.com](mailto:dhruvgohil448@gmail.com)
- 💼 LinkedIn: [dhruv-gohil-732028257](https://www.linkedin.com/in/dhruv-gohil-732028257)
- 💻 GitHub: [@dhruvgohil448](https://github.com/dhruvgohil448)
- 📸 Instagram: [@dhruvgohil_89](https://www.instagram.com/dhruvgohil_89)
- 📱 WhatsApp: [+91 88797 27963](https://wa.me/918879727963)

---

## 📄 License

MIT License — feel free to fork, learn from, and adapt this project with attribution.
