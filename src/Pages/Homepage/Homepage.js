import React from "react";
import Tabs from "../../components/Homepage/Tabs";
import SearchBar from "../../components/Homepage/SearchBar";
import GetItems from "../../components/Homepage/GetItems";

const Homepage = () => {
  return (
    <>
      <Tabs />
      <SearchBar />
      <GetItems />
    </>
  );
};

export default Homepage;
