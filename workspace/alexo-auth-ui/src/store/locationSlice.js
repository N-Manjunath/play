import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  permission: 'unknown', // 'unknown' | 'granted' | 'denied' | 'manual'
  coords: null, // { latitude, longitude }
  manualLocationLabel: '',
  error: null,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocationGranted(state, action) {
      const { latitude, longitude } = action.payload || {};
      state.permission = 'granted';
      state.coords = latitude != null && longitude != null ? { latitude, longitude } : null;
      state.manualLocationLabel = '';
      state.error = null;
    },
    setLocationDenied(state, action) {
      state.permission = 'denied';
      state.coords = null;
      state.manualLocationLabel = '';
      state.error = action.payload || 'Location permission denied';
    },
    setManualLocation(state, action) {
      state.permission = 'manual';
      state.coords = null;
      state.manualLocationLabel = action.payload || '';
      state.error = null;
    },
    resetLocation(state) {
      state.permission = 'unknown';
      state.coords = null;
      state.manualLocationLabel = '';
      state.error = null;
    },
  },
});

export const { setLocationGranted, setLocationDenied, setManualLocation, resetLocation } = locationSlice.actions;
export default locationSlice.reducer;