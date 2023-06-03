import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    list: localStorage.getItem("cartIteam")
      ? JSON.parse(localStorage.getItem("cartIteam"))
      : [],
  },
  reducers: {
    addIteam: (state, { payload }) => {
      let newIteam = payload;
      const existIteam = state.list.find((itm) => itm.id === payload.id);
      if (existIteam) {
        newIteam = existIteam;
      } else {
        localStorage.setItem("cartIteam", JSON.stringify(state.list));
        state.list = [...state.list, { ...newIteam, count: 1 }];
      }
    },
    removeIteam: (state, { payload }) => {
      const index = state.list.findIndex(
        (prodcut) => prodcut.id === payload.id
      );
      localStorage.setItem("cartIteam", JSON.stringify(state.list));
      state.list = [
        ...state.list.slice(0, index),
        ...state.list.slice(index + 1),
      ];
    },
    modfyiteam: (state, { payload }) => {
      const index = state.list.findIndex(
        (prodcut) => prodcut.id === payload.id
      );
      state.list = [
        ...state.list.slice(0, index),
        { ...state.list[index], count: payload.count },
        ...state.list.slice(index + 1),
      ];
    },
  },
});

export const { addIteam, modfyiteam, removeIteam } = cartSlice.actions;

export default cartSlice.reducer;
