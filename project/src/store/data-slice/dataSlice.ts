import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '../../const/defaultValues';
import { ReducerNameSpaces } from '../../const/reducer-name-spaces';
import { Point } from '../../types/mapTypes';
import { Offer, Comment } from '../../types/offerTypes';
import { fetchCommentsAction, fetchNearbyOffersAction, fetchOffersAction } from '../apiActions';

type InitialState = {
  locationName: string;
  currentCityOffersList: Offer[];
  currentCityLocation: Point;
  propertyData: {
    offersList: Offer[];
    commentsList: Comment[];
  };
  nearbyOffers: Offer[];
  isDataLoaded: boolean;
}

const initialState: InitialState = {
  locationName: DEFAULT_CITY,
  currentCityOffersList: [],
  currentCityLocation: {
    lat: 0,
    lng: 0,
    zoom: 0,
  },
  propertyData: {
    offersList: [],
    commentsList: []
  },
  nearbyOffers: [],
  isDataLoaded: false,
};

export const dataSlice = createSlice({
  name: ReducerNameSpaces.data,
  initialState,
  reducers: {
    setCurrentCityLocation: (state) => {
      const cityPoint = state.currentCityOffersList[0].location;
      state.currentCityLocation = {
        lat: cityPoint.latitude,
        lng: cityPoint.longitude,
        zoom: cityPoint.zoom
      };
    },
    setLocationName: (state, action: PayloadAction<{locationName: string}>) => {
      state.locationName = action.payload.locationName;
    },
    sortByPriceLTH: (state) => {
      state.currentCityOffersList = state.currentCityOffersList.sort((offerA, offerB) => offerA.price - offerB.price);
    },
    sortByPriceHTL: (state) => {
      state.currentCityOffersList = state.currentCityOffersList.sort((offerA, offerB) => offerB.price - offerA.price);
    },
    sortByRating: (state) => {
      state.currentCityOffersList = state.currentCityOffersList.sort((offerA, offerB) => offerB.rating - offerA.rating);
    },
    sortByPopular: (state) => {
      state.currentCityOffersList = state.propertyData.offersList.filter((offer)=>offer.city.name === state.locationName);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isDataLoaded = false;
        state.propertyData.offersList = action.payload;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.propertyData.commentsList = action.payload;
      });
  },
});

export const {sortByPopular, sortByPriceHTL, sortByPriceLTH, sortByRating, setCurrentCityLocation, setLocationName} = dataSlice.actions;

