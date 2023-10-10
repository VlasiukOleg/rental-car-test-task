import { createSlice } from '@reduxjs/toolkit';

import { fetchCars} from './operations';


const carsInitialState = {
    items: [],
    isLoading: false,
    error: null,
  };



  const carsSlice =  createSlice({
    name: 'cars',
    initialState: carsInitialState,
    extraReducers: builder => {
        builder.addCase(fetchCars.pending, (state, action) => {
            state.isLoading = true;
          });

        builder.addCase(fetchCars.fulfilled, (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
            state.error = null;
          });
          builder.addCase(fetchCars.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          });
    }
  })


  export const carsReducer = carsSlice.reducer;