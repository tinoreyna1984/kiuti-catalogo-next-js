import { configureStore } from '@reduxjs/toolkit';
import { estuchesSlice } from './estuchesSlice';

export const store = configureStore({
    reducer:{
        estuches: estuchesSlice.reducer,
    }
});