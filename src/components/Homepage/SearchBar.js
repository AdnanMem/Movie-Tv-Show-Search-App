import React, { useState } from "react";
import "../../styles/SearchBar.css";
import { useSelector, useDispatch } from "react-redux";
import {
  showSearchedMovies,
  showSearchedTvShows,
  showMovies,
  showTvShows,
} from "../../features/items/itemsSlice";

const SearchBar = () => {
  const { isMovieTabActive, isShowsTabActive } = useSelector(
    (state) => state.items
  );
  const dispatch = useDispatch();

  const [timer, setTimer] = useState(null);

  const searchMoviesByInput = (event) => {
    if (isMovieTabActive && event.target.value.length > 2) {
      dispatch(showSearchedMovies(event.target.value));
    } else if (isMovieTabActive && event.target.value.length <= 2) {
      dispatch(showMovies());
      dispatch(showSearchedMovies(""));
    } else if (isShowsTabActive && event.target.value.length > 2) {
      dispatch(showSearchedTvShows(event.target.value));
    } else if (isShowsTabActive && event.target.value.length <= 2) {
      dispatch(showTvShows());
      dispatch(showSearchedTvShows(""));
    }
  };

  const onChangeHandler = (event) => {
    clearTimeout(timer);

    const newTimer = setTimeout(() => {
      searchMoviesByInput(event);
    }, 1000);

    setTimer(newTimer);
  };

  return (
    <div className="container">
      <input
        className="search-bar"
        type="text"
        placeholder={
          isMovieTabActive ? "Search for a movie" : "Search for a TV Show"
        }
        onChange={onChangeHandler}
        autoComplete="off"
      />

      <h5 className="search-text">
        Please enter more than 2 characters in order to search.
      </h5>
    </div>
  );
};

export default SearchBar;
