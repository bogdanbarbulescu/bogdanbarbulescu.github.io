# Bogdan Bărbulescu – Portfolio

<h3 align="center">Network engineer & cybersecurity enthusiast from Romania</h3>

<p align="left"> <img src="https://komarev.com/ghpvc/?username=bogdanbarbulescu&label=Profile%20views&color=0e75b6&style=flat" alt="bogdanbarbulescu" /> </p>

- 👨‍💻 **Portfolio (SPA):** [https://bogdanbarbulescu.github.io](https://bogdanbarbulescu.github.io) — Home, About, Projects (Web + Learning), Blog, Contact
- 📄 **About / experience:** [https://bogdanbarbulescu.github.io/#/about](https://bogdanbarbulescu.github.io/#/about)
- 🏅 **Certifications:** [CompTIA Security+](https://www.credly.com/badges/60d7a784-4c3b-46f8-b0f3-524ba67af221), [Microsoft Certified: Azure Fundamentals](https://www.credly.com/badges/394cdaf5-322b-41e2-a1c6-9f62fd2b03e4), [Fortinet NSE 1–3](https://www.credly.com/earner/earned/badge/23dd7251-11d3-4143-8667-4d8f8ed16b62)

<h3 align="left">Connect with me</h3>
<p align="left">
  <a href="https://www.linkedin.com/in/bogdan-barbulescu/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="LinkedIn" height="30" width="40" /></a>
</p>

<h3 align="left">Languages and tools</h3>
<p align="left">
  <a href="https://azure.microsoft.com/en-in/" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" alt="azure" width="40" height="40"/></a>
  <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="40" height="40"/></a>
  <a href="https://www.docker.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/></a>
  <a href="https://www.linux.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/></a>
  <a href="https://www.python.org" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/></a>
</p>

---

## Portfolio repo (React SPA)

This repository is a **React + Vite + TypeScript** single-page application (SPA) for the portfolio site, with Tailwind CSS and client-side routing (HashRouter for GitHub Pages).

### How to run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Use the in-app links; routes use the hash (`#/`, `#/about`, `#/blog`, etc.).

### How to build and preview

```bash
npm run build
npm run preview
```

- `npm run build` runs a prebuild step that copies `articles/*.md` and `images/` into `public/`, then builds the app into `dist/`.
- `npm run preview` serves the `dist/` folder locally so you can test the production build.

### How to extend

- **New project (Web):** Add an entry to `public/data/projects.json` (same shape as existing items). The Projects → Web list and filters will pick it up.
- **New blog article:** Add `articles/articleN.md` and a corresponding entry in `public/data/blog-data.json` with `"id": "articleN"` and the same fields as existing entries. Link from the Blog page to `#/blog/articleN`.
- **New learning topic:** Add a row to `src/data/learning-topics.ts` and, if needed, add content for the `/learning/:topic` route in `src/pages/LearningTopic.tsx`.
- **New top-level page:** Add a route in `src/App.tsx`, create a component under `src/pages/`, and add a nav link in `src/components/layout/Navbar.tsx`.

### Deploy to GitHub Pages

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the app and deploys the `dist/` folder to GitHub Pages on every push to `main`.

1. In the repo **Settings → Pages**, set **Source** to **GitHub Actions**.
2. Push to `main`; the workflow will build and deploy. The site will be available at `https://<username>.github.io` (or your custom domain).

You can also build and deploy manually: run `npm run build` and upload the contents of `dist/` to your hosting.

The app uses **HashRouter**, so the site works on GitHub Pages without a 404 fallback; the base URL is the repo root.
