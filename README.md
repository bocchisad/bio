# bocchisad / bio

Personal portfolio — ML / CV + Go tools. Flagships: `cv-desk`, `bin2img-classifier`, `screen-stream`. Also: `bridge`. EN/RU.

**Live:** https://bocchisad.github.io/bio/

## Local

```bash
npm install
npm run dev
```

Build for GitHub Pages (`base: /bio/`):

```bash
npm run build
npm run preview
```

## Deploy

Push to `main`. GitHub Actions builds and deploys `dist/` to Pages.

In the repo: **Settings → Pages → Source → GitHub Actions**.
