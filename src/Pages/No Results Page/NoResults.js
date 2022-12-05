import React from "react";
import "../../styles/NoResults.css";

const NoResults = () => {
  return (
    <div className=" d-flex flex-column justify-center align-center no-results-container">
      <div className="no-results-img-div">
        <img
          src="https://img1.picmix.com/output/stamp/normal/3/1/7/1/371713_b5094.gif"
          alt="background image"
        />
        <h2>Sorry, no results.</h2>
      </div>

      <a href="/" className="no-results-btn" onClick={localStorage.clear()}>
        Try Again
      </a>
    </div>
  );
};

export default NoResults;
