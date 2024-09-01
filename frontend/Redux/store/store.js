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











import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../auth/auth.api.js";
import authReducer from "../Feature/auth.slice.js";

const store = configureStore({
  reducer: {  
    auth: authReducer,
  [authApi.reducerPath]: authApi.reducer
},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware]),
});

export default store