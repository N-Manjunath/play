import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store';

export default function ProtectedRoute({ children }) {
  const user = useAppSelector((state) => state.auth.user);
  if (!user) return <Navigate to="/login" replace />;
  return children;
}