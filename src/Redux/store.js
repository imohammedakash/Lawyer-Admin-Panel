import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Reducers/user";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'user',
  storage,
};

const reducers = combineReducers({ user: userReducer });
const persistedReducer = persistReducer(persistConfig, reducers);

// Create the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create the persistor
const persistor = persistStore(store);

export { store, persistor };
