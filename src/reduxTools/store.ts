import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";

import { apiRate } from "./requests/apiRate";
import { api } from "./requests/apiRequests";
import { rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      thunkMiddleware,
      api.middleware,
      apiRate.middleware,
    ),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
