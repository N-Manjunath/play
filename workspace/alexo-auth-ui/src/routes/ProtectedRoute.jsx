import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../store';

export default function ProtectedRoute({ children }) {
  const user = useAppSelector((state) => state.auth.user);
  const locationPermission = useAppSelector((state) => state.location.permission);
  const { pathname } = useLocation();

  if (!user) return <Navigate to="/login" replace />;

  // Allow access to location page when permission is unknown
  if (pathname !== '/location' && locationPermission === 'unknown') {
    return <Navigate to="/location" replace />;
  }

  return children;
}