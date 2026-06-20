# Yves Iraguha — Portfolio (React)

A React + Vite rebuild of your portfolio, with all projects, links, and demo
credentials wired in per your notes.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/` — deploy that folder to Vercel, Netlify, GitHub Pages,
or any static host.

## Replacing placeholder logos and images

Every project currently shows a colored initials badge instead of a real logo
— that's intentional, as a placeholder until you have final artwork.

To swap one in:

1. Drop the image file into `src/assets/` (e.g. `src/assets/minexx.png`).
2. Open `src/data/projects.js`.
3. At the top of the file, import it:
   ```js
   import minexxLogo from '../assets/minexx.png'
   ```
4. On that project's entry, change `logo: null` to `logo: minexxLogo`.

Do this for each of: Minexx, Good Linkage, Beda Consult, HMS, SMS, VMS, and
E-Shop. HMS, SMS, and E-Shop were flagged in your notes as needing
AI-generated artwork — generate those separately and drop them in the same way.

There's also a placeholder portrait frame in the About section
(`src/components/About.jsx`) — replace it with your headshot the same way.

## Where things live

- `src/data/projects.js` — all project copy, links, and demo credentials in one file. Edit this to update any project without touching components.
- `src/components/CredentialTerminal.jsx` — the expandable "demo credentials" panel, with click-to-copy on each username/password.
- `src/components/Contact.jsx` — the contact form. It currently opens the visitor's email client via a `mailto:` link with the form contents pre-filled, since there's no backend wired up yet. If you want messages to land somewhere automatically instead, swap that logic for a service like Formspree or EmailJS, or your own API endpoint.

## A note on the demo credentials

You asked to keep the demo credentials visible since they don't affect
production systems — they're shown inside a collapsed "demo credentials"
panel on each relevant project card, so they don't clutter the page by
default but are one click away for anyone evaluating your work.
