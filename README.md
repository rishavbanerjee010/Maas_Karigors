# Maa's Karigors

**Hands and heroes behind the idol.**

Maa's Karigors is a multi-page cultural storytelling website celebrating the artists and traditions behind Durga idol-making. Explore artist profiles, regional idol styles, the making process, folk traditions, oral histories, and a curated archive of related media.

## Explore the site

- **Home** — Introduction to the project and links to each section.
- **Heroes of Clay** — Profiles of the artists behind the idols.
- **Idol Styles** — An overview of distinct Durga idol forms and visual traditions.
- **Making the Goddess** — The stages of creating an idol, from the initial framework through immersion.
- **Folk Stories** — Stories and traditions connected to Durga Puja.
- **Stories to Remember** — Oral histories and interview content from the artists.
- **Artist Archive** — A collection of related articles, videos, and interviews.

The site uses a warm, craft-inspired visual palette and adapts its navigation for smaller screens. Your most recently selected section is remembered in your browser.

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- pnpm

## Run locally

### Requirements

- Node.js 22
- pnpm 10

Install the dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Vite prints the local preview URL in the terminal when the server starts.

## Available commands

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local development server with hot reload. |
| `pnpm build` | Build the production site into `dist/`. |
| `pnpm preview` | Preview the production build locally. Run `pnpm build` first. |
| `pnpm format` | Format the project with oxfmt. |

## Project structure

```text
.
├── index.html
├── src/
│   ├── components/     # Shared navigation and footer
│   ├── data/           # Artist, story, style, image, and process content
│   ├── pages/           # The site's individual sections
│   ├── App.tsx          # Page selection and shared layout
│   ├── index.css        # Global styles and Tailwind theme
│   └── main.tsx         # React entry point
├── package.json
└── vite.config.ts
```
