# Math Finder

Math Finder provides Math Practice, an easy-level Aptitude mode, and a separate real-time challenge backend for deployment.

## Open and run

Open `index.html` in a modern browser. For development, open this folder in Visual Studio Code and use the Live Server extension if you want automatic browser refreshes.

## Project files

- `index.html` — user interface and app screens
- `css/style.css` — responsive light/dark visual design
- `js/app.js` — interface, challenge flow, and localStorage integration
- `js/game.js` — game state and answer evaluation
- `js/timer.js` — per-question countdown timer
- `js/scoring.js` — score/profile/history persistence
- `js/questions.js` — 200-question arithmetic dataset and randomized selection
- `js/aptitudeQuestions.js` — 100 easy aptitude questions across ten categories
- `backend/` — Express, Socket.IO and PostgreSQL server for accounts, presence, challenge codes, and server-validated submissions

Practice stats and the last eight completed challenges are saved in your browser with `localStorage`.

## Run the online challenge server

1. Install Node.js 20+ and PostgreSQL 15+.
2. In `backend`, run `npm install`.
3. Create a PostgreSQL database, enable `pgcrypto` (`CREATE EXTENSION pgcrypto;`), then run `psql "$DATABASE_URL" -f sql/schema.sql`.
4. Copy `.env.example` to `.env`; set `DATABASE_URL`, a long `JWT_SECRET`, and the deployed frontend URL in `CLIENT_ORIGIN`.
5. Run `npm start`.

Deploy this backend to a public Node host with PostgreSQL (for example Render, Railway, Fly.io, or a VPS), use HTTPS, set the same environment variables there, and configure the frontend to call the public API/Socket.IO URL. Only then can players on different PCs connect through the internet.
