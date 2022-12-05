import React from "react";
import "../../styles/Tabs.css";
import { useDispatch } from "react-redux";
import { showMovies, showTvShows } from "../../features/items/itemsSlice";
import { useSelector } from "react-redux";

const Tabs = () => {
  const dispatch = useDispatch();

  const { isMovieTabActive, isShowsTabActive } = useSelector(
    (state) => state.items
  );

  return (
    <>
      <h1 className="text-center main-title">- SEARCH MOVIE / TV SHOW APP -</h1>
      <div className="container tabs-container d-flex justify-center">
        <button
          className={`tab-btn ${isShowsTabActive ? "active" : ""}`}
          onClick={() => dispatch(showTvShows())}
        >
          TV SHOWS
        </button>
        <button
          className={`tab-btn ${isMovieTabActive ? "active" : ""}`}
          onClick={() => dispatch(showMovies())}
        >
          MOVIES
        </button>
      </div>
    </>
  );
};

export default Tabs;
