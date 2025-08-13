import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen grid place-items-center bg-slate-50 p-4">
      <div className="w-full max-w-md bg-white shadow rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">Welcome</h2>
        <p className="text-slate-600 mb-6">{user?.email}</p>
        <button
          onClick={() => logout()}
          className="w-full bg-slate-800 hover:bg-slate-900 text-white font-medium py-2.5 rounded-md"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}