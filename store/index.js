import { configureStore } from "@reduxjs/toolkit";
import BarSlice from "./barSlice";
import FavoriteSlice from "./gameSlice";

const store = configureStore({
  reducer: {
    bar: BarSlice.reducer,
    favorite: FavoriteSlice.reducer,
  },
});
export default store;
