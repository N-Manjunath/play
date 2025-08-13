import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store';
import { setLocationGranted, setLocationDenied, setManualLocation } from '../store/locationSlice';

export default function LocationPermission() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const requestLocation = () => {
    setError('');
    setLoading(true);
    if (!('geolocation' in navigator)) {
      setLoading(false);
      setError('Geolocation is not supported by your browser');
      dispatch(setLocationDenied('Geolocation not supported'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        dispatch(setLocationGranted({ latitude, longitude }));
        setLoading(false);
        navigate('/', { replace: true });
      },
      (err) => {
        setLoading(false);
        setError(err.message || 'Could not fetch your location');
        dispatch(setLocationDenied(err.message));
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  const onOtherLocation = () => {
    const label = window.prompt('Enter your city or area');
    if (label && label.trim()) {
      dispatch(setManualLocation(label.trim()));
      navigate('/', { replace: true });
    }
  };

  return (
    <div className="min-h-screen grid place-items-center bg-slate-50 p-4">
      <div className="w-full max-w-md bg-white shadow rounded-2xl p-8 text-center">
        <div className="mx-auto mb-6 h-28 w-28 rounded-full bg-blue-100 grid place-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 text-blue-600">
            <path fillRule="evenodd" d="M11.54 22.352a.75.75 0 0 0 .92 0c1.284-1.02 5.79-4.858 7.698-8.692 1.005-2.008 1.14-4.127.485-5.985C19.747 4.165 16.78 2.25 12 2.25S4.253 4.165 3.357 7.675c-.655 1.858-.52 3.977.485 5.985 1.908 3.834 6.414 7.672 7.698 8.692ZM12 12.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="text-lg font-semibold">Where is your Location?</h2>
        <p className="text-slate-500 text-sm mt-1">Enjoy a personalized selling and buying experience by telling us your location</p>
        {error && (
          <div className="mt-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded p-2">{error}</div>
        )}
        <button
          onClick={requestLocation}
          disabled={loading}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-md disabled:opacity-60"
        >
          {loading ? 'Detecting location...' : 'Find my location'}
        </button>
        <button
          onClick={onOtherLocation}
          className="mt-3 w-full border border-slate-300 hover:bg-slate-50 rounded-md py-2.5 text-slate-700 font-medium"
        >
          Other Location
        </button>
      </div>
    </div>
  );
}