import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import authReducer from './authSlice';
import locationReducer from './locationSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    location: locationReducer,
  },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;