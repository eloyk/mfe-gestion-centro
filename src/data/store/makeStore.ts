import { configureStore } from "@reduxjs/toolkit";

export const makeStore = (inReducer:any) => configureStore({
  reducer: inReducer,
  devTools: process.env.NODE_ENV !== 'production'
})