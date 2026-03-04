# Portfolio — Chandan B R

A personal portfolio website built with React + Vite showcasing projects, skills and contact information.

## Features
- Modern, responsive UI with animated background and glassmorphism
- Projects section (includes BookYourStay, ApnaGit VCS, Weather App)
- Contact form (client-side demo)
# Portfolio — Chandan B R

[![Website](https://img.shields.io/badge/Portfolio-Live-blue)](#)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.0-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)

Welcome to my personal portfolio — a modern, responsive single-page application built with React and Vite. This site demonstrates my work, technical skills, and contact information, presented with a polished UI, animated backgrounds, and a focus on accessibility and performance.

## 🚀 Highlights
- Clean, minimalist design with glassmorphism and subtle micro-interactions
- Smooth reveal animations and responsive layout for all screen sizes
- Projects gallery with live links and tech stack tags
- Contact form (client-side demo) and social links
- Optimized Vite build for fast production performance

## 💡 Featured Projects
- **BookYourStay** — Full-stack property listing & booking application (MERN, Mapbox, Cloudinary)
- **ApnaGit VCS** — A GitHub-like repository and version control platform
- **Weather App** — Beautiful, real-time weather UI built with OpenWeatherMap and Material UI

## 🧩 Tech Stack
- React (with functional components & hooks)
- Vite (fast dev server + build)
- Modern CSS (custom variables, responsive layout, animations)
- Optional integrations: Cloudinary, Mapbox, MongoDB, Express.js for backend APIs

## 📸 Screenshots
Place screenshots in `public/assets/` and reference them here. Example:

![Hero Screenshot](public/assets/hero-screenshot.png)

## ⚙️ Getting Started (Local Development)
Prerequisites: Node.js (16+ recommended) and npm or yarn

```bash
# clone the repo
git clone https://github.com/YOUR_USERNAME/REPO_NAME.git
cd REPO_NAME/portfolio-app

# install dependencies
npm install

# start dev server
npm run dev

# visit: http://localhost:5173
```

## 📦 Production Build
Build a production-ready bundle with Vite:

```bash
npm run build
# production files will be in ./dist

# preview production build locally
npx serve dist
```

## 🚩 Deploying (Recommended Hosts)
This project produces a static `dist/` folder that you can deploy to any static hosting provider. Below are concise, copy-paste steps for popular free hosts.

### Netlify (recommended)
1. Push your code to GitHub.
2. On Netlify choose "New site from Git" → connect your GitHub repo.
3. Configure:
	- Build command: `npm run build`
	- Publish directory: `dist`
4. Add SPA redirect by placing a `_redirects` file in `public/` with:

```
/* /index.html 200
```

Netlify will rebuild on every push to the connected branch.

### Vercel
1. Import your GitHub repo into Vercel.
2. Vercel auto-detects Vite in most cases. If needed set:
	- Build command: `npm run build`
	- Output directory: `dist`
3. Deploy — Vercel provides previews and automatic deploys on push.

### GitHub Pages (via `gh-pages` package)
1. In `vite.config.js` set `base` to `'/REPO_NAME/'` (replace `REPO_NAME` accordingly) if you plan to host at `https://USERNAME.github.io/REPO_NAME/`.
2. Install `gh-pages` and add scripts in `package.json`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Run:

```bash
npm install --save-dev gh-pages
npm run deploy
```

> Note: For user root URLs (https://USERNAME.github.io) keep `base: '/'`.

### Cloudflare Pages
1. Connect GitHub repo to Cloudflare Pages.
2. Build command: `npm run build`
3. Build output directory: `dist`

### Surge (single-command deploy)
```bash
npm i -g surge
npm run build
surge ./dist
```

## 🔒 Handling Secrets / API Keys
- Never commit API keys to the repository. Use environment variables and the hosting provider's secret/env configuration for production builds.

## 🧹 Removing `node_modules` from repository (if accidentally committed)
Run locally:

```bash
git rm -r --cached node_modules
git add .gitignore
git commit -m "Remove node_modules and add .gitignore"
git push
```

If you need to reduce repository size by purging `node_modules` from history, use `git filter-repo` or BFG Repo-Cleaner (advanced; rewrites history).

## 🤝 Contributing
- Open an issue for bugs or feature requests.
- PRs are welcome — fork the repo, create a branch, and submit a PR with a clear description.

## 📬 Contact
- Email: chandan23br@gmail.com
- GitHub: https://github.com/brchandan23

---

If you'd like, I can:
- Add automated deploy config for Netlify (`netlify.toml`) or a `_redirects` file for SPA routing
- Add `gh-pages` deployment scripts and commit them
- Run `git rm -r --cached node_modules` here and commit the change

Thanks for checking out my portfolio — feel free to star or fork!
