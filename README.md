# Persona Spritzeria

Sanity CMS + Astro landing site for ΠΕΡΣΟΝΑ Spritzeria (Ilioupoli).

## Structure

- `web/` — Astro 5 frontend (Vercel)
- `studio/` — Sanity Studio
- `stitch_persona_spritzeria_mobile_landing/` — Stitch design export (source)

## Local development

```bash
# Terminal 1 — Studio (after setting a real Sanity project ID)
cd studio
# set SANITY_STUDIO_PROJECT_ID in env or sanity.config.ts
npm install
npm run dev

# Terminal 2 — Web
cd web
cp .env.example .env   # fill PUBLIC_SANITY_PROJECT_ID + SANITY_WRITE_TOKEN
npm install
npm run dev
```

Site: http://localhost:4321  
Studio: http://localhost:3333

## Design tokens

Tailwind tokens live in `web/tailwind.config.cjs` and `web/src/styles/global.css`, derived from `DESIGN.md` (brand narrative palette as UI source of truth).

## Go-live checklist

1. Create Sanity project → set `PUBLIC_SANITY_PROJECT_ID` / studio `projectId`
2. `cd studio && npx sanity schema deploy --yes`
3. Create write token → `SANITY_WRITE_TOKEN` in Vercel
4. Connect `web/` to Vercel (root directory: `web`)
5. Point domain + update `astro.config.mjs` `security.allowedDomains`
