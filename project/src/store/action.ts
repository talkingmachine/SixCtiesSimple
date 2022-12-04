import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offerTypes';

const setCity = createAction<{locationName: string }>('SET_CITY');
const setOffersList = createAction<{offersList: Offer[]}>('SET_OFFERS_LIST');

export {setCity, setOffersList};
