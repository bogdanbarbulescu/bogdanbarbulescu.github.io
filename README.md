# Bogdan Bărbulescu – Portfolio

<h3 align="center">Network engineer & cybersecurity enthusiast from Romania</h3>

<p align="left"> <img src="https://komarev.com/ghpvc/?username=bogdanbarbulescu&label=Profile%20views&color=0e75b6&style=flat" alt="bogdanbarbulescu" /> </p>

- **Portfolio (SPA):** [bogdanbarbulescu.github.io](https://bogdanbarbulescu.github.io) — Home, About, Projects (Web + Learning), Blog, Contact
- **About:** [bogdanbarbulescu.github.io/#/about](https://bogdanbarbulescu.github.io/#/about)
- **Certifications:** [CompTIA Security+](https://www.credly.com/badges/60d7a784-4c3b-46f8-b0f3-524ba67af221), [Microsoft Certified: Azure Fundamentals](https://www.credly.com/badges/394cdaf5-322b-41e2-a1c6-9f62fd2b03e4), [Fortinet NSE 1–3](https://www.credly.com/earner/earned/badge/23dd7251-11d3-4143-8667-4d8f8ed16b62)

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

React + Vite + TypeScript single-page application for the portfolio, with **Tailwind CSS**, **React Router (HashRouter)** for GitHub Pages, light/dark theme, and markdown-driven Blog and Learning sections.

### Tech stack

| Category   | Stack |
|-----------|--------|
| Framework | React 18, Vite 5 |
| Language  | TypeScript 5 |
| Styling   | Tailwind CSS 3 |
| Routing   | React Router 6 (HashRouter) |
| Content   | Marked + DOMPurify, Highlight.js |

### Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Routes use the hash (`#/`, `#/about`, `#/blog`, etc.).

### Build and preview

```bash
npm run build
npm run preview
```

- **Prebuild:** Copies `articles/*.md` from repo root into `public/articles/` and `images/` into `public/images/`.
- **Build:** TypeScript compile + Vite build → `dist/`.
- **Preview:** Serves `dist/` locally to test the production build.

### Lint

```bash
npm run lint
```

---

### How to extend content

| Content            | Where to add | Notes |
|--------------------|--------------|--------|
| **Web project**    | `public/data/projects.json` | Same shape as existing entries. Projects → Web list and filters pick it up. |
| **Blog article**   | Add `articles/articleN.md` (repo root) + entry in `public/data/blog-data.json` with `"id": "articleN"`. | Prebuild copies articles to `public/articles/`. Link: `#/blog/articleN`. |
| **Learning topic** | `src/data/learning-topics.ts` | Add `{ id, title, description, image }`. Image path is under `public/images/` (e.g. `/images/foo.jpg`). |
| **Learning resource** | `public/data/learning-data.json` + `public/learning/<topicId>/<resourceId>.md` | In `learning-data.json`, add an object under the topic key (e.g. `"red"`) with `id`, `title`, `description`, optional `section`. Create the markdown file at `public/learning/<topicId>/<resourceId>.md`. URL: `#/learning/<topicId>/<resourceId>`. |
| **New top-level page** | `src/App.tsx` (route) + `src/pages/` (component) + `src/components/layout/Navbar.tsx` (link) | Add route, page component, and nav link. |

---

### Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the app and deploys `dist/` to GitHub Pages on every push to `main`.

1. **Settings → Pages** → set **Source** to **GitHub Actions**.
2. Push to `main`; the site will be at `https://<username>.github.io` (or your custom domain).

**HashRouter** is used so the app works on GitHub Pages without a 404 fallback; the base URL is the repo root.
