import type { FormEvent } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { signInWithGoogle } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err: any) {
      setError(err.message ?? 'Failed to sign in');
    } finally {
      setLoading(false);
    }
  };

  const onGoogle = async () => {
    setError(null);
    setLoading(true);
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (err: any) {
      setError(err.message ?? 'Google sign-in failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid place-items-center bg-slate-50 p-4">
      <div className="w-full max-w-md bg-white shadow rounded-2xl p-8">
        <div className="flex items-center justify-center mb-6">
          <span className="text-3xl font-bold text-indigo-600">Alexo</span>
        </div>
        <h2 className="text-xl font-semibold mb-2">Login</h2>
        <p className="text-slate-500 text-sm mb-6">Enter your credentials to access your account</p>
        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded p-2">{error}</div>
        )}
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="text-right text-sm">
            <Link to="/forgot" className="text-indigo-600 hover:underline">Forgot Password?</Link>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-md transition disabled:opacity-60"
          >
            {loading ? 'Signing in...' : 'Get Started'}
          </button>
        </form>
        <div className="flex items-center gap-3 my-6">
          <div className="h-px bg-slate-200 w-full" />
          <span className="text-slate-400 text-xs">OR</span>
          <div className="h-px bg-slate-200 w-full" />
        </div>
        <button
          onClick={onGoogle}
          disabled={loading}
          className="w-full border border-slate-300 hover:bg-slate-50 rounded-md py-2.5 text-slate-700 font-medium disabled:opacity-60"
        >
          Sign in with Google
        </button>
        <p className="mt-6 text-xs text-slate-500">
          If you continue, you are accepting Alexo Terms and Conditions and Privacy Policy
        </p>
        <p className="mt-4 text-sm text-center text-slate-600">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-indigo-600 hover:underline">Create one</Link>
        </p>
      </div>
    </div>
  );
}