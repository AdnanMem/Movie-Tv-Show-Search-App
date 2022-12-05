import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "../../styles/ItemDetails.css";
import arrowBack from "../../assets/images/arrow-back.svg";

const ItemDetails = () => {
  const { itemToBeShown } = useSelector((state) => state.itemDetails);
  const [youtubeKey, setYoutubeKey] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [error, setError] = useState("");

  axios
    .get(
      `https://api.themoviedb.org/3/${
        itemToBeShown.itemName ? "tv" : "movie"
      }/${
        itemToBeShown.itemId
      }/videos?api_key=7f41daa9fb2ed56ea5a3a26f3031dae3&language=en-US`
    )
    .then((resp) => {
      let filtered = resp.data.results.filter((item) =>
        item.name.includes("Trailer")
      );
      setYoutubeKey(
        `https://www.youtube.com/embed/${filtered[0].key}?autoplay=1&loop=1`
      );
    })
    .catch((err) => {
      setError(err.message);
    });

  axios
    .get(
      `https://api.themoviedb.org/3/${
        itemToBeShown.itemName ? "tv" : "movie"
      }/${
        itemToBeShown.itemId
      }/images?api_key=7f41daa9fb2ed56ea5a3a26f3031dae3&language=en-US&include_image_language=en`
    )
    .then((resp) => {
      if (resp.data.backdrops[0]) {
        setImagePath(resp.data.backdrops[0].file_path);
      } else {
        setImagePath("");
      }
    })
    .catch((err) => {
      setError(err.message);
    });

  if (!itemToBeShown) {
    return;
  } else {
    return (
      <div className="container details-container">
        <a className="d-flex align-center" href="/">
          {" "}
          <img className="back-icon-img" src={arrowBack} alt="arrow back" />
          <h3>Back</h3>{" "}
        </a>

        <div className={youtubeKey ? "video_container" : "d-none"}>
          <iframe
            className="video"
            src={youtubeKey}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="backdrop_image_container">
          {" "}
          <img
            className={youtubeKey ? "d-none" : "bg-image"}
            src={
              imagePath
                ? `https://image.tmdb.org/t/p/original${imagePath}`
                : "https://wallpaperaccess.com/full/2903163.jpg"
            }
            alt=""
          />
        </div>
        <h1>
          {itemToBeShown.itemTitle
            ? itemToBeShown.itemTitle
            : itemToBeShown.itemName}
        </h1>
        <h4>
          <span className="underline">Release Date: </span> <br />
          {itemToBeShown.itemReleaseDate
            ? itemToBeShown.itemReleaseDate
            : itemToBeShown.itemFirstAirDate}
        </h4>
        <h4 className="text-justify">
          {" "}
          <span className="underline">Plot:</span> <br />
          {itemToBeShown.itemOverview
            ? itemToBeShown.itemOverview
            : "No data available at the moment."}
        </h4>
        <div className="vote_and_average d-flex justify-between align-center">
          <h4>Based on {itemToBeShown.itemVoteCount} votes:</h4>
          <button className="vote-btn">{itemToBeShown.itemVoteAverage}</button>
        </div>
        <div className="popularity text-center">
          {/* <h1>{itemToBeShown.itemPopularity}</h1> */}

          <marquee scrollamount="15" behavior="scroll" direction="horizontal">
            #movies #movie #film #cinema #films #hollywood #actor #moviereview
            #series #bluray #actors #follow #video #moviestar #netflix
            #moviescenes #music #filmmaking #horror #instagood
          </marquee>
        </div>
      </div>
    );
  }
};

export default ItemDetails;
