import { configureStore } from "@reduxjs/toolkit";

import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import rootReducer from "./combineReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['watch']
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store)