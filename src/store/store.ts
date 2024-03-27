import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import userReducer from "../slices/userSlice"; // Adjust the path as necessary

// Configuration object for redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"], // You can specify particular parts of the state to persist
};

// Combining reducers, useful if you have or plan to have multiple reducers
const rootReducer = combineReducers({
  user: userReducer,
});

// Creating a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure and create the Redux store
export const store = configureStore({
  reducer: persistedReducer,
});

// Create a persistor for the store
export const persistor = persistStore(store);

// Types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
