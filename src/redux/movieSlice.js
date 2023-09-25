import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { movieListById, moviesList, moviesListBySearch } from "../services";

export const getMovieList = createAsyncThunk(
  "movies/getMovieList",
  async (params, { rejectWithValue }) => {
    try {
      const response = await moviesList(params);

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getMovieByID = createAsyncThunk(
  "movies/getMovieByID",
  async (id, { rejectWithValue }) => {
    try {
      const response = await movieListById(id);

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getMovieBySearch = createAsyncThunk(
  "movies/getMovieByID",
  async (params, { rejectWithValue }) => {
    try {
      const response = await moviesListBySearch(params);

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movieDetail: [],
    loading: false,
  },
 
  extraReducers: {
    [getMovieByID.pending]: (state, action) => {
      state.loading = true;
    },
    [getMovieByID.fulfilled]: (state, action) => {
      state.loading = false;
      state.movieDetail = action.payload;
    },
    [getMovieByID.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default moviesSlice.reducer;
