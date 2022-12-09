import { createAction } from '@reduxjs/toolkit';
import AuthorizationStatus from '../const/authorizationStatus';
import { Comment, Offer } from '../types/offerTypes';

const setCity = createAction<{locationName: string }>('SET_CITY');
const loadOffersList = createAction<{offersList: Offer[]}>('SET_OFFERS_LIST');
const loadCommentsList = createAction<{commentsList: Comment[]}>('SET_COMMENTS_LIST');
const sortByPriceLTH = createAction('SORT_BY_PRICE_LTH');
const sortByPriceHTL = createAction('SORT_BY_PRICE_HTL');
const sortByRating = createAction('SORT_BY_RATING');
const sortByPopular = createAction('SORT_BY_POPULAR');
const setActiveOfferId = createAction<{activeOfferId: number}>('SET_ACTIVE_OFFER_ID');
const requireAuthorization = createAction<AuthorizationStatus>('REQUIRE_AUTHORIZATION');


export {
  setCity,
  loadOffersList,
  loadCommentsList,
  sortByPriceLTH,
  sortByPriceHTL,
  sortByRating,
  sortByPopular,
  setActiveOfferId,
  requireAuthorization
};
