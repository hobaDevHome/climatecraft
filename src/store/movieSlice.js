// @ts-nocheck
// movieSlice.js
// Async action to fetch movie data

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (API_URL) => {
    const response = await axios.get(API_URL);
    return {
      list: response,
    };
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload.list;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;

// Selectors
export const selectMovies = (state) => state.movies.movies;
export const selectStatus = (state) => state.movies.status;
export const selectError = (state) => state.movies.error;
