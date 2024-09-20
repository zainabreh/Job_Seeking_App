// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { authApi } from "../Feature/auth/auth.api.js";
// import authReducer from "../Feature/auth/auth.slice.js";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "authUser",
//   storage,
// };

// const rootReducer = combineReducers({
//     auth: authReducer,
//   [authApi.reducerPath]: authApi.reducer
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: {  
//     persistedReducer
// },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat([authApi.middleware]),
// });
// export const persistor = persistStore(store);











import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "../auth/auth.api.js";
import authReducer from "../Feature/auth.slice.js";
import jobReducer from "../Feature/job.slice.js"
import applicationReducer from "../Feature/application.slice.js"
import { jobApi } from "../auth/job.api.js";
import { applicationApi } from "../auth/application.api.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    job: jobReducer,
    application:applicationReducer,
    [authApi.reducerPath]: authApi.reducer,
    [jobApi.reducerPath]: jobApi.reducer,
    [applicationApi.reducerPath]: applicationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, jobApi.middleware, applicationApi.middleware]),
});

export default store