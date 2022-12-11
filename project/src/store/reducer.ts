import { createReducer } from '@reduxjs/toolkit';
import AuthorizationStatus from '../const/authorizationStatus';
import { DEFAULT_CITY } from '../const/defaultValues';
import { Point } from '../types/mapTypes';
import { Comment, Offer } from '../types/offerTypes';
import {
  setCity,
  loadOffersList,
  loadCommentsList,
  sortByPriceLTH,
  sortByPriceHTL,
  sortByRating,
  sortByPopular,
  setActiveOfferId,
  setAuthorizationStatus,
  setDataLoadedStatus,
  setUserData,
  setCurrentOffer,
  setNearbyOffers,
} from './action';

export type InitialState = {
  locationName: string;
  propertyData: {
    offersList: Offer[];
    commentsList: Comment[];
  };
  currentCityOffersList: Offer[];
  currentCityLocation: Point;
  currentOffer: Offer | null;
  nearbyOffers: Offer[];
  activeOfferId: number;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
  userData: {
    avatarUrl: string;
    email: string;
    id: number;
    isPro: boolean;
    name: string;
    token: string;
  };
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
  currentOffer: null,
  nearbyOffers: [],
  activeOfferId: -1,
  authorizationStatus: AuthorizationStatus.Uknown,
  isDataLoaded: false,
  userData:  {
    avatarUrl: '',
    email: '',
    id: -1,
    isPro: false,
    name: '',
    token: ''
  },
};

const reducer = createReducer(initialState, (builder)=>{
  builder
    .addCase(setCity, (state, action)=>{
      state.locationName = action.payload.locationName;
      state.currentCityOffersList = state.propertyData.offersList.filter((offer)=>offer.city.name === action.payload.locationName);
      const currentCity = state.currentCityOffersList[0].city.location;
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
    .addCase(setAuthorizationStatus, (state, action)=>{
      state.authorizationStatus = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action)=>{
      state.isDataLoaded = action.payload.isDataLoaded;
    })
    .addCase(setUserData, (state, action)=>{
      state.userData = action.payload;
    })
    .addCase(setCurrentOffer, (state, action)=>{
      state.currentOffer = action.payload;
    })
    .addCase(setNearbyOffers, (state, action)=>{
      state.nearbyOffers = action.payload;
    });
});

export {reducer};

