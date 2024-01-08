import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        popularmovies : null,
        trailerKey : null,
    },
    reducers: {
        storePopularMovies : (state, action) => {
            state.popularmovies = action.payload;
        },
        storeTrailerVideoKey : (state, action) => {
            state.trailerKey = action.payload;
        }
    }
});

export const { storePopularMovies, storeTrailerVideoKey} = moviesSlice.actions;


export default moviesSlice.reducer;