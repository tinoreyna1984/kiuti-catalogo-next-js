import { createSlice } from "@reduxjs/toolkit";

export const estuchesSlice = createSlice({
  name: "estuches",
  initialState: {
    slug: "iphone-14-pro-max",
    title: "iPhone 14 Pro Max",
    listaEstuches: [],
    loading: false,
  },
  reducers: {
    initEstuches: (state, action) => {
      const { estuches } = action.payload;
      state.listaEstuches = [...estuches];
    },
    filterEstuches: (state, action) => {
      const { slug, title, estuches } = action.payload;
      state.slug = slug;
      state.title = title;
      state.listaEstuches = estuches.filter(estuche => estuche.tags.includes(title));
    },
  },
});

export const startFilterEstuches = ({ slug, title, estuches }) => {
  return async (dispatch) => {
    dispatch(filterEstuches({ slug, title, estuches }))
  };
};

export const { initEstuches, filterEstuches } = estuchesSlice.actions;
