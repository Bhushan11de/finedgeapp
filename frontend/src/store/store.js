import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import authReducer from './authReducer';
import portfolioReducer from './portfolioReducer';
import marketDataReducer from './marketDataReducer';
import { apiSlice } from './apiSlice';

// Redux Persist configuration
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'] // only persist the token
};

const portfolioPersistConfig = {
  key: 'portfolio',
  storage,
  whitelist: ['watchlist'] // persist watchlist items
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    portfolio: persistReducer(portfolioPersistConfig, portfolioReducer),
    marketData: marketDataReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
