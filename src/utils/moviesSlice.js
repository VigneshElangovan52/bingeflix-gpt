import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        popularmovies : null
    },
    reducers: {
        storePopularMovies : (state, action) => {
            state.popularmovies = action.payload;
        }
    }
});

export const { storePopularMovies} = moviesSlice.actions;


export default moviesSlice.reducer;