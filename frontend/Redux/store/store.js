import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "../Feature/auth.slice.js";
import jobReducer from "../Feature/job.slice.js";
import applicationReducer from "../Feature/application.slice.js";
import { authApi } from "../auth/auth.api.js";
import { jobApi } from "../auth/job.api.js";
import { applicationApi } from "../auth/application.api.js";

const persistConfig = {
  key: "root",
  blacklist: [authApi.reducerPath, 'auth'],
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  job: jobReducer,
  application: applicationReducer,
  [authApi.reducerPath]: authApi.reducer,
  [jobApi.reducerPath]: jobApi.reducer,
  [applicationApi.reducerPath]: applicationApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      jobApi.middleware,
      applicationApi.middleware,
    ]),
});

export const persistor = persistStore(store);