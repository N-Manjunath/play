# Firebase Auth Example (Vanilla JS)

Pages:
- `index.html`: Sign in (email/password + Google)
- `signup.html`: Sign up (email/password + Google)
- `dashboard.html`: Protected page with sign out

## Setup
1. Create a Firebase project, enable Email/Password and Google providers.
2. Copy your Firebase web app config.
3. Option A (simplest for local dev): edit `js/app.js` and replace placeholders in `getFirebaseConfig()`.
4. Option B (no secrets in repo): before `app.js` load, inject a script that sets `window.__FIREBASE_CONFIG__ = { ... }`.

Open `index.html` in a static server.