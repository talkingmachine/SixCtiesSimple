import AuthorizationStatus from '../const/authorizationStatus';
import { State } from '../types/reduxTypes';

export const locationNameSelector = (state: State) => state.DATA.locationName;
export const currentCityOffersListSelector = (state: State) => state.DATA.currentCityOffersList;
export const activeOfferIdSelector = (state: State) => state.USER_INTERACTION.activeOfferId;
export const currentCityLocationSelector = (state: State) => state.DATA.currentCityLocation;
export const commentsListSelector = (state: State) => state.DATA.propertyData.commentsList;
export const offersListSelector = (state: State) => state.DATA.propertyData.offersList;
export const isDataLoadingSelector = (state: State) => state.DATA.isDataLoading;
export const authorizationStatusSelector = (state: State) => state.USER_DATA.authorizationStatus === AuthorizationStatus.Auth;
export const userDataSelector = (state: State) => state.USER_DATA.userData;
export const currentOfferSelector = (state: State) => state.USER_INTERACTION.currentOffer;
export const nearbyOffersSelector = (state: State) => state.DATA.nearbyOffers;
