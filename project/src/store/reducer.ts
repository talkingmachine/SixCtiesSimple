import { createReducer } from '@reduxjs/toolkit';
import AuthorizationStatus from '../const/authorizationStatus';
import { DEFAULT_CITY } from '../const/defaultValues';
import { Point } from '../types/mapTypes';
import { Comment, Offer } from '../types/offerTypes';
import { setCity, loadOffersList, loadCommentsList, sortByPriceLTH, sortByPriceHTL, sortByRating, sortByPopular, setActiveOfferId, requireAuthorization} from './action';

type InitialState = {
  locationName: string;
  propertyData: {
    offersList: Offer[];
    commentsList: Comment[];
  };
  currentCityOffersList: Offer[];
  currentCityLocation: Point;
  activeOfferId: number;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitialState = {
  locationName: DEFAULT_CITY,
  propertyData: {
    offersList: [],
    commentsList: []
  },
  currentCityOffersList: [],
  currentCityLocation: {
    lat: 0,
    lng: 0,
    zoom: 0,
  },
  activeOfferId: -1,
  authorizationStatus: AuthorizationStatus.Uknown,
};

const reducer = createReducer(initialState, (builder)=>{
  builder
    .addCase(setCity, (state, action)=>{
      state.locationName = action.payload.locationName;
      state.currentCityOffersList = state.propertyData.offersList.filter((offer)=>offer.city.name === action.payload.locationName);
      const currentCity = state.currentCityOffersList[0].location;
      state.currentCityLocation = {
        lat: currentCity.latitude,
        lng: currentCity.longitude,
        zoom: currentCity.zoom,
      };
    })
    .addCase(loadOffersList, (state, action)=>{
      state.propertyData.offersList = action.payload.offersList;
    })
    .addCase(loadCommentsList, (state, action)=>{
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
    })
    .addCase(requireAuthorization, (state, action)=>{
      state.authorizationStatus = action.payload;
    });
});

export default reducer;

