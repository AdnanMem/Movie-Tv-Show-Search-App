import React from "react";
import "../styles/ItemCard.css";
import { useDispatch } from "react-redux";
import { showItemDetails } from "../features/item details/itemDetailsSlice";

const ItemCard = ({
  title,
  release_date,
  poster_path,
  vote_average,
  name,
  first_air_date,
  id,
  overview,
  vote_count,
  popularity,
}) => {
  const dispatch = useDispatch();

  return (
    <a
      href="/details"
      onClick={(e) => {
        dispatch(
          showItemDetails({
            itemId: id,
            itemTitle: title,
            itemReleaseDate: release_date,
            itemPosterPath: poster_path,
            itemVoteAverage: vote_average,
            itemName: name,
            itemFirstAirDate: first_air_date,
            itemOverview: overview,
            itemVoteCount: vote_count,
            itemPopularity: popularity,
          })
        );
      }}
    >
      <div className="card">
        <div className="card-img-container">
          <img
            src={`${
              poster_path
                ? `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png"
            } `}
            alt={title}
          />
          <h2 className="rating d-flex justify-center align-center">
            {vote_average}
          </h2>
        </div>

        <div className="card-content">
          <h4>
            <b>{title ? title : name}</b>
          </h4>
          <div className="d-flex justify-between">
            <p>
              {`${release_date ? release_date : first_air_date}`.slice(0, 4)}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ItemCard;
