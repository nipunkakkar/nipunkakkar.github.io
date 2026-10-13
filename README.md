# Nipun’s games

A small homepage for Nipun’s published browser games.

**Live site:** https://nipunkakkar.github.io/

- **Ludo Ladder:** https://nipunkakkar.github.io/ludo-ladder/ — Ludo and Snakes & Ladders for 2–4 players, with private rooms and same-device play.
- **Meteor Dodge:** https://nipunkakkar.github.io/meteor-dodge/ — a solo space arcade with keyboard, mouse and touch controls.

The homepage contains HTML, CSS and original SVG artwork. It has no runtime JavaScript, dependencies, external fonts, analytics, accounts or build step. Its board previews were generated from the artwork in the Ludo Ladder repository. The space illustration is original vector artwork.

## Local preview

With Node.js installed:

```sh
npm run dev
```

Open http://127.0.0.1:5064/. The game links point to the existing live games.

## Hosting

GitHub Pages serves this repository’s root from **main**. `.nojekyll` enables plain static publishing. Each game stays in its own repository and deployment; the homepage links to their current URLs.

To add another game, add a card to `index.html` and any original artwork under `assets/`, then push to `main`. Increase the stylesheet version in `index.html` when changing CSS.
