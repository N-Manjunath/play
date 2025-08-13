import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useAppDispatch, useAppSelector } from './store';
import { setUser } from './store/authSlice';
import { setLocationGranted, setManualLocation, resetLocation, setLocationDenied } from './store/locationSlice';

import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import Home from './pages/Home.jsx';
import ProtectedRoute from './routes/ProtectedRoute.jsx';
import LocationPermission from './pages/LocationPermission.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const dispatch = useAppDispatch();
  const locationState = useAppSelector((state) => state.location);
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (u) {
        dispatch(setUser({ uid: u.uid, email: u.email, displayName: u.displayName, photoURL: u.photoURL }));
      } else {
        dispatch(setUser(null));
        // Optional: reset location on sign out so next user must set it
        dispatch(resetLocation());
      }
    });
    return () => unsub();
  }, [dispatch]);

  // Hydrate location from localStorage once at startup
  useEffect(() => {
    try {
      const raw = localStorage.getItem('alexo_location_state');
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed?.permission === 'granted' && parsed?.coords) {
        dispatch(setLocationGranted(parsed.coords));
      } else if (parsed?.permission === 'manual' && parsed?.manualLocationLabel) {
        dispatch(setManualLocation(parsed.manualLocationLabel));
      } else if (parsed?.permission === 'denied') {
        dispatch(setLocationDenied(parsed.error || 'Previously denied'));
      }
    } catch (_) {
      // ignore
    }
  }, [dispatch]);

  // Persist location changes
  useEffect(() => {
    try {
      localStorage.setItem('alexo_location_state', JSON.stringify(locationState));
    } catch (_) {
      // ignore
    }
  }, [locationState]);

  return (
    <BrowserRouter>
      <div className="min-h-screen pb-24">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                {locationState.permission === 'unknown' ? (
                  <Navigate to="/location" replace />
                ) : (
                  <Home />
                )}
              </ProtectedRoute>
            }
          />
          <Route path="/location" element={<ProtectedRoute><LocationPermission /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
        {user && <Footer />}
      </div>
    </BrowserRouter>
  );
}