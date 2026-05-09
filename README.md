# Vishesh Vishwakarma - Portfolio

Personal portfolio website built with React and Vite. It showcases profile details, skills, projects, education, certifications, contact links, and a downloadable resume.

## Tech Stack

- React 18
- Vite 5
- lucide-react
- CSS in React components
- Public resume asset served by Vite

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed in the terminal, usually:

```text
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```

Runs the app locally with Vite.

```bash
npm run build
```

Creates a production build in `dist/`.

```bash
npm run preview
```

Previews the production build locally.

## File Structure

```text
Portfolio/
+-- public/
|   +-- Vishesh_Vishwakarma_Resume.pdf
+-- src/
|   +-- App.jsx
|   +-- index.css
|   +-- main.jsx
+-- index.html
+-- package-lock.json
+-- package.json
+-- README.md
+-- vite.config.js
```

## Project Notes

- `src/App.jsx` contains the main portfolio UI, sections, animations, and portfolio data.
- `src/main.jsx` mounts the React app into `index.html`.
- `src/index.css` keeps the minimal global reset.
- `public/Vishesh_Vishwakarma_Resume.pdf` is served at `/Vishesh_Vishwakarma_Resume.pdf` and powers the resume download link.

## Deployment

Build the app before deploying:

```bash
npm run build
```

Deploy the generated `dist/` folder to a static hosting platform such as Vercel, Netlify, or GitHub Pages.
