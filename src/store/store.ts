import { configureStore } from '@reduxjs/toolkit';
// Import slices

export const store = configureStore({
  reducer: {
    // Add reducers from slices
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
