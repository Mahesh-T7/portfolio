# Mahesh T — Premium Portfolio

A modern, production-grade portfolio built with **React + Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

- 🌓 Dark / Light mode toggle (persisted to localStorage)
- 🎯 Animated custom cursor (desktop)
- 📜 Scroll progress bar
- 🎞️ Framer Motion page transitions & scroll reveals
- 🔤 Typewriter role animation in Hero
- 📊 Animated skill bars
- 📱 Fully responsive (mobile-first)
- ♿ Accessible (semantic HTML, ARIA labels, keyboard nav)
- 🔍 SEO optimized (meta tags, OG, Twitter cards)
- 📬 Contact form (ready for EmailJS / Formspree)
- ⚡ Fast loading with code-splitting

---

## 🗂️ Folder Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← DROP YOUR RESUME PDF HERE
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── CustomCursor.jsx
│   │   └── ScrollProgress.jsx
│   ├── hooks/
│   │   ├── useTheme.js
│   │   ├── useMousePosition.js
│   │   └── useScrollReveal.js
│   ├── data.js             ← All your content lives here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm 9+

### 1. Install dependencies

```bash
npm install
```

### 2. Add your resume PDF

Place your resume at:
```
public/resume.pdf
```

### 3. Customize your content

Edit **`src/data.js`** — this single file controls all text, links, projects, skills, and stats on the site. No need to touch individual components for content updates.

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### 5. Build for production

```bash
npm run build
```

---

## 📧 Enable Real Email (Contact Form)

The contact form is wired up and ready — just plug in a service.

### Option A: EmailJS (Recommended — free tier available)

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create a service + email template
3. Install the SDK:
   ```bash
   npm install @emailjs/browser
   ```
4. In `src/components/Contact.jsx`, replace the `handleSubmit` function:
   ```js
   import emailjs from '@emailjs/browser'

   const handleSubmit = async (e) => {
     e.preventDefault()
     setStatus('sending')
     try {
       await emailjs.send(
         'YOUR_SERVICE_ID',
         'YOUR_TEMPLATE_ID',
         { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
         'YOUR_PUBLIC_KEY'
       )
       setStatus('sent')
     } catch {
       setStatus('error')
     }
   }
   ```

### Option B: Formspree (Zero config)

1. Sign up at [formspree.io](https://formspree.io) and create a form
2. Change the form tag in Contact.jsx:
   ```jsx
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

---

## 🌐 Deploy to Vercel (Recommended)

### Method 1: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Vite and sets the build config.

### Method 2: GitHub + Vercel Dashboard

1. Push your code to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy** 🚀

### Custom Domain

In Vercel dashboard → Your project → Settings → Domains → Add your domain.

---

## 🎨 Customization

### Colors
Edit `tailwind.config.js` — the `acid` (green), `coral` (red), and `sky.neon` (cyan) accent colors control the entire palette.

### Fonts
The portfolio uses:
- **Syne** — display / headings (loaded from Google Fonts in `index.html`)
- **DM Sans** — body text
- **JetBrains Mono** — code / labels

To change fonts, update both `index.html` (Google Fonts link) and `tailwind.config.js` (`fontFamily`).

### Content
All portfolio content is centralized in `src/data.js`:
- `personal` — name, bio, links, email
- `skills` — skill categories with proficiency %
- `skillTags` — tag cloud items
- `projects` — project cards with highlights + tech stack
- `education` — degrees and GPA
- `certifications` — cert list
- `stats` — hero stats bar

---

## 🐙 GitHub API Integration (Bonus)

To dynamically show your GitHub repos, add this hook:

```js
// src/hooks/useGithubRepos.js
import { useState, useEffect } from 'react'

export function useGithubRepos(username) {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then(r => r.json())
      .then(data => { setRepos(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [username])

  return { repos, loading }
}
```

Then use it in Projects.jsx:
```js
import { useGithubRepos } from '../hooks/useGithubRepos'
const { repos } = useGithubRepos('Mahesh-T7')
```

---

## ♿ Accessibility

- All interactive elements have `aria-label` attributes
- Color contrast meets WCAG AA
- Keyboard navigable (Tab + Enter)
- Semantic HTML5 landmarks (`<nav>`, `<main>`, `<section>`, `<footer>`)
- Custom cursor hidden and default cursor restored on mobile

---

## 📄 License

MIT — use freely for your own portfolio.
