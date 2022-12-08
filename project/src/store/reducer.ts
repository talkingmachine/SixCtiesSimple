import { createReducer } from '@reduxjs/toolkit';
import getCommentsList from '../mocks/comments';
import getOffersList from '../mocks/offers';
import { setCity, setOffersList, setCommentsList, sortByPriceLTH, sortByPriceHTL, sortByRating, sortByPopular, setActiveOfferId} from './action';

const initialState = {
  locationName: 'Paris',
  propertyData: {
    offersList: getOffersList,
    commentsList: getCommentsList
  },
  currentCityOffersList: getOffersList.filter((offer)=>offer.city.name === 'Paris'),
  activeOfferId: -1,
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
    })
    .addCase(sortByPriceLTH, (state)=>{
      state.currentCityOffersList = state.currentCityOffersList.sort((offerA, offerB) => offerA.price - offerB.price);
    })
    .addCase(sortByPriceHTL, (state)=>{
      state.currentCityOffersList = state.currentCityOffersList.sort((offerA, offerB) => offerB.price - offerA.price);
    })
    .addCase(sortByRating, (state)=>{
      state.currentCityOffersList = state.currentCityOffersList.sort((offerA, offerB) => offerB.rating - offerA.rating);
    })
    .addCase(sortByPopular, (state)=>{
      state.currentCityOffersList = state.propertyData.offersList.filter((offer)=>offer.city.name === state.locationName);
    })
    .addCase(setActiveOfferId, (state, action)=>{
      state.activeOfferId = action.payload.activeOfferId;
    });
});

export default reducer;

