import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '../../const/defaultValues';
import { ReducerNameSpaces } from '../../const/reducer-name-spaces';
import { Point } from '../../types/mapTypes';
import { Offer, Comment } from '../../types/offerTypes';
import { fetchCommentsAction, fetchNearbyOffersAction, fetchNewCommentAction, fetchOffersAction } from '../apiActions';

export type InitialState = {
  locationName: string;
  currentCityOffersList: Offer[];
  currentCityLocation: Point;
  propertyData: {
    offersList: Offer[];
    commentsList: Comment[];
  };
  nearbyOffers: Offer[];
  isDataLoading: boolean;
}

export const initialStateDataSlice: InitialState = {
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
  isDataLoading: false,
};


export const dataSlice = createSlice({
  name: ReducerNameSpaces.data,
  initialState: initialStateDataSlice,
  reducers: {
    setCurrentCityLocation: (state) => {
      const cityPoint = state.currentCityOffersList[0].city.location;
      state.currentCityLocation = {
        lat: cityPoint.latitude,
        lng: cityPoint.longitude,
        zoom: cityPoint.zoom
      };
    },
    setLocationName: (state, action: PayloadAction<{locationName: string}>) => {
      state.locationName = action.payload.locationName;
      const isOffersListExist = state.propertyData.offersList.length !== 0;
      if (isOffersListExist) {
        state.currentCityOffersList = state.propertyData.offersList.filter((offer)=>offer.city.name === state.locationName);
        const cityPoint = state.currentCityOffersList[0].city.location;
        state.currentCityLocation = {
          lat: cityPoint.latitude,
          lng: cityPoint.longitude,
          zoom: cityPoint.zoom
        };
      }
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
        state.isDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isDataLoading = false;
        if (action.meta.arg && action.meta.arg.isAppStarts) {
          state.propertyData.offersList = action.payload;
          state.currentCityOffersList = state.propertyData.offersList.filter((offer)=>offer.city.name === state.locationName);
          const cityPoint = state.currentCityOffersList[0].city.location;
          state.currentCityLocation = {
            lat: cityPoint.latitude,
            lng: cityPoint.longitude,
            zoom: cityPoint.zoom
          };
        } else {
          state.propertyData.offersList = action.payload;
        }
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.propertyData.commentsList = action.payload;
      })
      .addCase(fetchNewCommentAction.fulfilled, (state, action) => {
        state.propertyData.commentsList = action.payload;
      });
  },
});

export const {sortByPopular, sortByPriceHTL, sortByPriceLTH, sortByRating, setCurrentCityLocation, setLocationName} = dataSlice.actions;

