import { configureStore } from "@reduxjs/toolkit";
import {maharatNarm} from "./maharatNarm";

const store = configureStore({
  reducer: {
    [maharatNarm.reducerPath]: maharatNarm.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(maharatNarm.middleware),
});

export default store;