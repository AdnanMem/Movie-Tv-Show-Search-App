import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemToBeShown: {
    title: "",
    name: "",
    id: "",
    overview: "",
    release_date: "",
    poster_path: "",
    vote_average: "",
    first_air_date: "",
    vote_count: "",
    popularity: "",
  },
};

const itemDetailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    showItemDetails: (state, action) => {
      state.itemToBeShown = action.payload;
    },
  },
});

export const { showItemDetails } = itemDetailsSlice.actions;
export default itemDetailsSlice.reducer;
