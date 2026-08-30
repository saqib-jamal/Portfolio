# Saqib Jamal — Portfolio

Personal portfolio site, built to showcase real projects and certifications
rather than a generic template.

**Live:** https://portfolio-two-puce-n350kje7l7.vercel.app/

## Sections

- **Hero** — short intro, with a custom SVG graphic illustrating polynomial
  secret sharing (points on a line, resolving to a hidden value at x = 0)
- **Projects** — currently featuring a blockchain-based degree verification
  system on Ethereum (Solidity + React + ethers.js)
- **Skills** — grouped honestly by depth: things built with regularly vs.
  things understood conceptually but not shipped extensively
- **Certifications** — verified course completions from Coursera and Cyfrin
  Updraft, each linking to a public verification page
- **About** — background and current focus
- **Contact** — email, GitHub, LinkedIn

## Built with

- [React](https://react.dev) 19
- [Vite](https://vitejs.dev) 8
- Plain CSS (no framework) — custom design tokens for typography, color, and spacing
- Deployed on [Vercel](https://vercel.com)

## Running locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints in the terminal.

## Project structure

```
src/
  App.jsx            — page layout and section composition
  App.css            — all styling
  ShareLine.jsx       — hero's animated secret-sharing graphic
  Projects.jsx        — project data + rendering
  Skills.jsx           — skills data + rendering
  Certifications.jsx   — certification data + rendering
public/
  favicon.svg          — site icon
  og-image.png          — social share preview image
```