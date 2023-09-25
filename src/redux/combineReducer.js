import { combineReducers } from "@reduxjs/toolkit";
import MovieReducer from "./movieSlice";
import watchSlice from "./watchListSlice";

const combinedReducer = combineReducers({
  movie: MovieReducer,
  watch: watchSlice,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default rootReducer;
