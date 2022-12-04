import { createReducer } from '@reduxjs/toolkit';
import getOffersList from '../mocks/offers';
import { setCity, setOffersList } from './action';

const initialState = {
  locationName: 'Hamburg',
  offersList: getOffersList,
};

const reducer = createReducer(initialState, (builder)=>{
  builder
    .addCase(setCity, (state, action)=>{
      state.locationName = action.payload.locationName;
    })
    .addCase(setOffersList, (state, action)=>{
      state.offersList = action.payload.offersList;
    });
});

export default reducer;

