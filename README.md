# Nipun’s games

A small homepage for Nipun’s published browser games.

**Live site:** https://nipunkakkar.github.io/

- **Ludo Ladder:** https://nipunkakkar.github.io/ludo-ladder/ — Ludo and Snakes & Ladders for 2–4 players, with private rooms and same-device play.
- **Meteor Dodge:** https://nipunkakkar.github.io/meteor-dodge/ — a solo space arcade with keyboard, mouse and touch controls.
- **Chess Noir:** https://nipunkakkar.github.io/chess-noir/ — two-player chess with private online rooms, same-device play, animated moves and optional clocks.
- **Minesweeper:** https://nipunkakkar.github.io/minesweeper-afterglow/ — a light take on the classic, with three difficulties, a Retro skin, sonar pulses, sounds and a blooming finish.

The homepage contains HTML, CSS and original SVG artwork, with no runtime JavaScript, external fonts, analytics or accounts on the homepage itself. Some browser releases are hosted in subdirectories and accessed through direct links; their development repositories remain private. The board previews were generated from the artwork in the Ludo Ladder repository. The space illustration is an original vector.

## Local preview

With Node.js installed:

```sh
npm run dev
```

Open http://127.0.0.1:5064/. The game links point to the existing live games.

## Hosting

GitHub Pages serves this repository’s root from **main**. `.nojekyll` enables plain static publishing. The homepage links to the listed games. Unlisted releases remain accessible through their direct URLs without a homepage card; the other games retain their existing project deployments.

To add another game, add a card to `index.html` and any original artwork under `assets/`, then push to `main`. Increase the stylesheet version in `index.html` when changing CSS.
