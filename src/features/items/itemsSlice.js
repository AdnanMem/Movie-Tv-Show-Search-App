import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm:
    "https://api.themoviedb.org/3/tv/top_rated?api_key=7f41daa9fb2ed56ea5a3a26f3031dae3&language=en-US&page=1",
  isMovieTabActive: false,
  isShowsTabActive: true,
  isLoading: true,
  userSearchTerm: "",
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    showMovies: (state) => {
      let usersSearch = state.userSearchTerm;
      usersSearch.length > 2
        ? (state.searchTerm = `https://api.themoviedb.org/3/search/movie?api_key=7f41daa9fb2ed56ea5a3a26f3031dae3&query=${usersSearch}`)
        : (state.searchTerm =
            "https://api.themoviedb.org/3/movie/top_rated?api_key=7f41daa9fb2ed56ea5a3a26f3031dae3&language=en-US&page=1");
      state.isShowsTabActive = false;
      state.isMovieTabActive = true;
    },
    showTvShows: (state) => {
      let usersSearch = state.userSearchTerm;
      usersSearch.length > 2
        ? (state.searchTerm = `https://api.themoviedb.org/3/search/tv?api_key=7f41daa9fb2ed56ea5a3a26f3031dae3&query=${usersSearch}`)
        : (state.searchTerm =
            "https://api.themoviedb.org/3/tv/top_rated?api_key=7f41daa9fb2ed56ea5a3a26f3031dae3&language=en-US&page=1");
      state.isShowsTabActive = true;
      state.isMovieTabActive = false;
    },
    showSearchedMovies: (state, action) => {
      state.isShowsTabActive = false;
      state.isMovieTabActive = true;
      state.userSearchTerm = action.payload;
      let findThisMovie = state.userSearchTerm;
      findThisMovie.length > 2
        ? (state.searchTerm = `https://api.themoviedb.org/3/search/movie?api_key=7f41daa9fb2ed56ea5a3a26f3031dae3&query=${findThisMovie}`)
        : (state.searchTerm =
            "https://api.themoviedb.org/3/movie/top_rated?api_key=7f41daa9fb2ed56ea5a3a26f3031dae3&language=en-US&page=1");
    },
    showSearchedTvShows: (state, action) => {
      state.isShowsTabActive = true;
      state.isMovieTabActive = false;
      state.userSearchTerm = action.payload;
      let findThisTvShow = state.userSearchTerm;
      findThisTvShow.length > 2
        ? (state.searchTerm = `https://api.themoviedb.org/3/search/tv?api_key=7f41daa9fb2ed56ea5a3a26f3031dae3&query=${findThisTvShow}`)
        : (state.searchTerm =
            "https://api.themoviedb.org/3/tv/top_rated?api_key=7f41daa9fb2ed56ea5a3a26f3031dae3&language=en-US&page=1");
    },
  },
});

export const {
  showMovies,
  showTvShows,
  showSearchedMovies,
  showSearchedTvShows,
} = itemsSlice.actions;
export default itemsSlice.reducer;
