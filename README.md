# Nipun’s games

A small homepage for Nipun’s published browser games.

**Live site:** https://nipunkakkar.github.io/

- **Ludo Ladder:** https://nipunkakkar.github.io/ludo-ladder/ — Ludo and Snakes & Ladders for 2–4 players, with private rooms and same-device play.
- **Meteor Dodge:** https://nipunkakkar.github.io/meteor-dodge/ — a solo space arcade with keyboard, mouse and touch controls.
- **Chess Noir:** https://nipunkakkar.github.io/chess-noir/ — two-player chess with private online rooms, same-device play, animated moves and optional clocks.
- **Minesweeper:** https://nipunkakkar.github.io/minesweeper-afterglow/ — a light take on the classic, with three difficulties, a Retro skin, sonar pulses, sounds and a blooming finish.
- **Flirt or Fight (18+):** https://nipunkakkar.github.io/flirt-or-fight/ — a private online date night for two, with secret answers, roast battles, animated reactions, and romantic music.

The homepage contains HTML, CSS and original SVG artwork, with no runtime JavaScript, external fonts, analytics or accounts on the homepage itself. The `flirt-or-fight/` subdirectory contains that game’s minified browser release; its development repository is private. Its board previews were generated from the artwork in the Ludo Ladder repository. The space illustration and couple artwork are original vectors.

## Local preview

With Node.js installed:

```sh
npm run dev
```

Open http://127.0.0.1:5064/. The game links point to the existing live games.

## Hosting

GitHub Pages serves this repository’s root from **main**. `.nojekyll` enables plain static publishing. The homepage links to each game’s URL. Flirt or Fight is served directly from `flirt-or-fight/` so its source repository can remain private; the other games retain their existing project deployments.

To add another game, add a card to `index.html` and any original artwork under `assets/`, then push to `main`. Increase the stylesheet version in `index.html` when changing CSS.
