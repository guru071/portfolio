# Guruprasath D — portfolio

A React/Vite portfolio for Guruprasath D, co-founder and CEO of GOAT’ECH. It is deployed through Vercel.

## Development

Use Node.js 22, then run:

```sh
npm ci
npm run dev
npm run build
```

The production build generates static HTML, page-specific search metadata and a sitemap for the six public routes. Vercel serves those pages using the rewrites in `vercel.json`. `scripts/verify.mjs` checks the generated metadata and sitemap.

## Updating content

- Edit project descriptions, skills, social links and page metadata in `src/data/portfolio.js`.
- Edit the page layouts in `src/views/public/` and styles in `src/index.css`.
- The downloadable resume is `public/guruprasath-d-resume.pdf`; its editable source is `docs/resume.html`. After editing the source, export it as an A4 PDF and replace the public file.
- Keep account-only contact information and credentials out of public files. The site does not require a database or environment variables.

`dist/` and `.ssr/` are generated during builds and are not maintained in Git.
