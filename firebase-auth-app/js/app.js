// Firebase modular SDK via CDN
// Provide your Firebase config here or via window.__FIREBASE_CONFIG__ from an injected script

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js';
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js';

function getFirebaseConfig() {
  // Try global config first (for easier secret handling); fallback to placeholders
  const fromGlobal = window.__FIREBASE_CONFIG__;
  if (fromGlobal) return fromGlobal;
  return {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_PROJECT.firebaseapp.com',
    projectId: 'YOUR_PROJECT',
    appId: 'YOUR_APP_ID',
  };
}

const app = initializeApp(getFirebaseConfig());
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Utility: navigate
function go(path) {
  window.location.href = path;
}

// Attach handlers conditionally by page
const path = window.location.pathname;

// Guard: redirect signed-in users away from auth pages
onAuthStateChanged(auth, (user) => {
  const isAuthPage = path.endsWith('/index.html') || path.endsWith('/signup.html') || path.endsWith('/');
  if (user && isAuthPage) {
    go('/home.html');
  }
  const isProtected = path.endsWith('/dashboard.html') || path.endsWith('/home.html');
  if (!user && isProtected) {
    go('/index.html');
  }
  if (user && (path.endsWith('/dashboard.html') || path.endsWith('/home.html'))) {
    const emailEl = document.getElementById('user-email');
    if (emailEl) emailEl.textContent = `Signed in as ${user.email ?? 'Unknown user'}`;
  }
});

// Login page
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      go('/home.html');
    } catch (err) {
      alert(err.message);
    }
  });

  const googleBtn = document.getElementById('google-signin');
  if (googleBtn) {
    googleBtn.addEventListener('click', async () => {
      try {
        await signInWithPopup(auth, provider);
        go('/home.html');
      } catch (err) { alert(err.message); }
    });
  }
}

// Signup page
const signupForm = document.getElementById('signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    const password2 = document.getElementById('signup-password2').value;
    if (password !== password2) {
      alert('Passwords do not match');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      go('/home.html');
    } catch (err) { alert(err.message); }
  });

  const googleBtn = document.getElementById('google-signup');
  if (googleBtn) {
    googleBtn.addEventListener('click', async () => {
      try {
        await signInWithPopup(auth, provider);
        go('/home.html');
      } catch (err) { alert(err.message); }
    });
  }
}

// Dashboard page
const signoutBtn = document.getElementById('signout');
if (signoutBtn) {
  signoutBtn.addEventListener('click', async () => {
    await signOut(auth);
    go('/index.html');
  });
}