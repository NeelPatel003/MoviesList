import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify"

const watchListSlice = createSlice({
  name: "movies",
  initialState: {
    data: [],
  },
  reducers: {
    watchList: (state, action) => {
      // Check if an object with the same ID exists in the array
      let idExists =  state?.data?.some((item) => item?.id === action?.payload?.id);

      if (!idExists) {
        state.data = [...state?.data,  action.payload];
      } else {
         toast('Data already Exist')
      }

    },
  },
});

export const { watchList } = watchListSlice.actions;

export default watchListSlice.reducer;
