import { createAction } from '@reduxjs/toolkit';
import AuthorizationStatus from '../const/authorizationStatus';
import { UserData } from '../types/apiTypes';
import { Comment, Offer } from '../types/offerTypes';

export const setCity = createAction<{locationName: string }>('SET_CITY');
export const loadOffersList = createAction<{offersList: Offer[]}>('SET_OFFERS_LIST');
export const loadCommentsList = createAction<{commentsList: Comment[]}>('SET_COMMENTS_LIST');
export const sortByPriceLTH = createAction('SORT_BY_PRICE_LTH');
export const sortByPriceHTL = createAction('SORT_BY_PRICE_HTL');
export const sortByRating = createAction('SORT_BY_RATING');
export const sortByPopular = createAction('SORT_BY_POPULAR');
export const setActiveOfferId = createAction<{activeOfferId: number}>('SET_ACTIVE_OFFER_ID');
export const setAuthorizationStatus = createAction<AuthorizationStatus>('REQUIRE_AUTHORIZATION');
export const setDataLoadedStatus = createAction<{isDataLoaded: boolean}>('SET_DATA_LOADED_STATUS');
export const setUserData = createAction<UserData>('SET_USER_DATA');
