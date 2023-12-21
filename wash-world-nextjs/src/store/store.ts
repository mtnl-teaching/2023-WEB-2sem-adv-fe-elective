import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { washSlice } from "@/store/slices/washSlice";

export interface InitialState<T> {
  value: T;
}

const makeStore = () =>
  configureStore({
    reducer: {
      [washSlice.name]: washSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
