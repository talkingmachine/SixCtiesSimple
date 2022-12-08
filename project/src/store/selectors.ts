import { State } from '../types/reduxTypes';

const locationNameSelector = (state: State) => state.locationName;
const currentCityOffersListSelector = (state: State) => state.currentCityOffersList;
const propertyDataSelector = (state: State)=> state.propertyData;
const selectedCitySelector = (state: State) => state.locationName;
const activeOfferIdSelector = (state: State) => state.activeOfferId;

export {locationNameSelector, currentCityOffersListSelector, propertyDataSelector, selectedCitySelector, activeOfferIdSelector};
