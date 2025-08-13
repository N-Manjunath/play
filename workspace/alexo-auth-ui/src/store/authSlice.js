import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // { uid, email, displayName, photoURL }
  status: 'idle', // 'idle' | 'authenticated' | 'unauthenticated'
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.status = action.payload ? 'authenticated' : 'unauthenticated';
      state.error = null;
    },
    clearUser(state) {
      state.user = null;
      state.status = 'unauthenticated';
      state.error = null;
    },
    setAuthError(state, action) {
      state.error = action.payload || 'Authentication error';
    },
  },
});

export const { setUser, clearUser, setAuthError } = authSlice.actions;
export default authSlice.reducer;