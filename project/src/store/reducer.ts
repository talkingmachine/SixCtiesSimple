import { createReducer } from '@reduxjs/toolkit';
import getCommentsList from '../mocks/comments';
import getOffersList from '../mocks/offers';
import { setCity, setOffersList, setCommentsList } from './action';

const initialState = {
  locationName: 'Paris',
  propertyData: {
    offersList: getOffersList,
    commentsList: getCommentsList
  },
  currentCityOffersList: getOffersList.filter((offer)=>offer.city.name === 'Paris'),
};

const reducer = createReducer(initialState, (builder)=>{
  builder
    .addCase(setCity, (state, action)=>{
      state.locationName = action.payload.locationName;
      state.currentCityOffersList = state.propertyData.offersList.filter((offer)=>offer.city.name === action.payload.locationName);
    })
    .addCase(setOffersList, (state, action)=>{
      state.propertyData.offersList = action.payload.offersList;
    })
    .addCase(setCommentsList, (state, action)=>{
      state.propertyData.commentsList = action.payload.commentsList;
    });
});

export default reducer;

