import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemCard from "../ItemCard";
import "../../styles/GetItems.css";
import { useSelector } from "react-redux";
import NoResults from "../../Pages/No Results Page/NoResults";

const GetMovies = () => {
  const { searchTerm } = useSelector((state) => state.items);

  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  const fetchItems = async () => {
    axios
      .get(searchTerm)
      .then((resp) => {
        setItems(resp.data.results.slice(0, 10));
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  useEffect(() => {
    fetchItems();
  }, [searchTerm]);

  if (!items.length) {
    return <NoResults />;
  }
  return (
    <div className="container movies-container">
      {items.map((item) => {
        return <ItemCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default GetMovies;
