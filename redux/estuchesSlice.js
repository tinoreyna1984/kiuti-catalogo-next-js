import { createSlice } from "@reduxjs/toolkit";
import { bucket } from "../pages/api/cosmic-api";

export const estuchesSlice = createSlice({
  name: "estuches",
  initialState: {
    slug: "iphone-14-pro-max",
    title: "iPhone 14 Pro Max",
    listaEstuches: [],
    loading: false,
  },
  reducers: {
    getEstuches: (state, action) => {
      const { slug, title, estuches } = action.payload;
      const {
        metadata: { estuche },
      } = estuches[0];
      state.slug = slug;
      state.title = title;
      state.listaEstuches = estuche;
      //console.log(state)
    },
    setLoadingState: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const startFilterEstuches = ({ slug, title }) => {
  return async (dispatch) => {
    dispatch(setLoadingState(true));
    const data = await bucket.objects
      .find({
        type: "modelos",
        slug: slug,
      })
      .props("metadata");
    const estuches = await data.objects;

    dispatch(getEstuches({ slug, title, estuches }));
    dispatch(setLoadingState(false));
  };
};

export const { getEstuches, setLoadingState } = estuchesSlice.actions;
