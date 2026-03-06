# FORGE — Premium Gym & Fitness Website

A production-ready gym website built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. Features smooth animations, a fully responsive layout, and an integrated "Book Free Consultation" modal with email confirmation via EmailJS.

---

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — fast dev server and build tool
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — animations and transitions
- **React Router v6** — client-side routing
- **React Hook Form** — form handling
- **EmailJS** — client-side email sending (no backend required)
- **shadcn/ui** — accessible UI primitives

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or bun

### Installation

```bash
# 1. Clone the repo
git clone <your-repo-url>
cd forge-gym

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Fill in your EmailJS credentials (see Email Setup below)

# 4. Start the dev server
npm run dev
```

The app runs at `http://localhost:8080`

---

## Email Setup (EmailJS)

The "Book Free Consultation" modal sends a confirmation email to the user via [EmailJS](https://www.emailjs.com/) — no backend required.

### Steps

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Go to **Email Services** → Add your email provider (Gmail, Outlook, etc.)
3. Go to **Email Templates** → Create a new template

**Template variables to include:**
```
Subject: Consultation Request Received

Hello {{to_name}},

Thank you for booking a free consultation with FORGE.
One of our expert coaches will review your request and contact you shortly.

Best regards,
The FORGE Team
```

4. Copy your credentials into `.env`:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
```

> **Note:** Without credentials configured, the modal still works in demo mode — it will show the success state without sending an email.

---

## Project Structure

```
src/
├── assets/           # Images (gym, food, trainers, etc.)
├── components/
│   ├── ui/           # Base UI primitives (toast, tooltip)
│   ├── AnimatedSection.tsx
│   ├── ConsultationModal.tsx   ← Book Free Consultation
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── ProgramCard.tsx
│   ├── ScrollToTop.tsx
│   ├── TestimonialCard.tsx
│   └── TrainerCard.tsx
├── data/
│   ├── gym-locations.ts
│   └── trainers.ts
├── hooks/
│   └── use-toast.ts
├── lib/
│   └── utils.ts
├── pages/
│   ├── About.tsx
│   ├── FindGym.tsx
│   ├── Index.tsx
│   ├── NotFound.tsx
│   └── TrainerDetail.tsx
├── App.tsx
├── index.css
└── main.tsx
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests |

---

## Deployment

Build the project and deploy the `dist/` folder to any static host:

```bash
npm run build
```

Recommended platforms: **Vercel**, **Netlify**, **Cloudflare Pages**

> Make sure to add your `VITE_EMAILJS_*` environment variables in your hosting platform's settings.

---

## Adding Your Own Images

Replace the files in `src/assets/` with your own images. The filenames expected are:

- `hero-gym.jpg` — Hero section background
- `gym-1.jpg` through `gym-4.jpg` — Various gym shots
- `food-1.jpg` — Nutrition section
- `supplement.jpg` — Supplements section
- `program-endurance.jpg` — Program card
- `trainer-1.jpg`, `trainer-2.jpg`, `trainer-3.jpg` — Trainer photos

---

## License

MIT — free to use and modify.
