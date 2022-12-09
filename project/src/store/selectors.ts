import { State } from '../types/reduxTypes';

const locationNameSelector = (state: State) => state.locationName;
const currentCityOffersListSelector = (state: State) => state.currentCityOffersList;
const activeOfferIdSelector = (state: State) => state.activeOfferId;
const currentCityLocationSelector = (state: State) => state.currentCityLocation;
const commentsListSelector = (state: State)=> state.propertyData.commentsList;
const offersListSelector = (state: State)=> state.propertyData.offersList;


export {locationNameSelector, currentCityOffersListSelector, offersListSelector, activeOfferIdSelector, currentCityLocationSelector, commentsListSelector};
