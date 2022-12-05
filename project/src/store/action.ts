import { createAction } from '@reduxjs/toolkit';
import { Comment, Offer } from '../types/offerTypes';

const setCity = createAction<{locationName: string }>('SET_CITY');
const setOffersList = createAction<{offersList: Offer[]}>('SET_OFFERS_LIST');
const setCommentsList = createAction<{commentsList: Comment[]}>('SET_COMMENTS_LIST');

export {setCity, setOffersList, setCommentsList};
