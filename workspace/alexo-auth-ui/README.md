Alexo Auth UI (React + Firebase + Redux) - JavaScript

A simple authentication UI built with React (Vite), Firebase Authentication (Email/Password + Google), Tailwind CSS, and Redux to store user details after sign-in.

PREREQUISITES
- Node.js 18 or newer
- A Firebase project (free tier is fine)

STEP 1 — Create and configure Firebase
1) Go to Firebase Console and create a new project.
2) In Build > Authentication > Sign-in method, enable:
   - Email/Password
   - Google
3) In Project settings > General, click "Add app" and choose Web App.
4) Copy the web app configuration values (apiKey, authDomain, etc.). You will paste these into the .env file in Step 3.

STEP 2 — Install dependencies
From the project root:

```
npm install
```

STEP 3 — Environment variables
1) Copy the example file to create your real environment file:

```
cp .env.example .env
```

2) Open .env and paste the values from your Firebase web app:

- VITE_FIREBASE_API_KEY=
- VITE_FIREBASE_AUTH_DOMAIN=
- VITE_FIREBASE_PROJECT_ID=
- VITE_FIREBASE_APP_ID=
- VITE_FIREBASE_STORAGE_BUCKET=
- VITE_FIREBASE_MESSAGING_SENDER_ID=

STEP 4 — Run the app (development)

```
npm run dev
```

Open http://localhost:5173 in your browser. The first page is the Login screen, with a link to Signup. After successful sign-in, you will be redirected to the Dashboard.

STEP 5 — Build for production

```
npm run build
npm run preview   # optional: preview the production build locally
```

WHERE THINGS LIVE (Key files)
- src/firebase.js                Firebase initialization using values from .env
- src/store/authSlice.js         Redux slice storing user details and auth status
- src/store/index.js             Redux store setup and hooks
- src/App.jsx                    Routes and Firebase auth-state listener that syncs Redux
- src/routes/ProtectedRoute.jsx  Protects private routes (e.g., Dashboard)
- src/pages/Login.jsx            Email/Password login + Google sign-in (dispatches user to Redux)
- src/pages/Signup.jsx           Account creation + Google sign-in (dispatches user to Redux)
- src/pages/ForgotPassword.jsx   Sends password reset email
- src/pages/Dashboard.jsx        Shows current user and sign-out button
- src/index.css                  Tailwind CSS (v4) is imported here

REDUX: Accessing the user
The signed-in user is stored in Redux at state.auth.user (fields: uid, email, displayName, photoURL).
Example usage in a component:

```js
import { useAppSelector } from '../store';
const user = useAppSelector((state) => state.auth.user);
```

TAILWIND CSS
Tailwind v4 is already wired up. Styles are applied via utility classes. No extra config files are required; Tailwind is imported in src/index.css.

TROUBLESHOOTING
- If sign-in fails: ensure Email/Password and Google providers are enabled in Firebase Console.
- If you get invalid API key/domain errors: verify your .env values match your Firebase project settings.
- If the dev server port is in use: run `npm run dev -- --port 3000` and open http://localhost:3000

LICENSE
Use freely for learning or as a starter. No warranty provided.
