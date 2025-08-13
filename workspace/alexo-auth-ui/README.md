# Alexo Auth UI

A minimal React + Vite app with Firebase Authentication (Email/Password and Google) and Tailwind CSS.

## Setup

1. Create a Firebase project and enable Email/Password and Google providers in Firebase Console.
2. Create a `.env` file in the project root with your web app config:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
```

3. Install and run:

```
npm install
npm run dev
```
