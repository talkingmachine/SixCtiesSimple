import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import APIRoute from '../const/APIRoute';
import AuthorizationStatus from '../const/authorizationStatus';
import { dropToken, saveToken } from '../services/token';
import { AuthData, UserData } from '../types/APITypes';
import { NewComment, Offer } from '../types/offerTypes';
import { AppDispatch, State } from '../types/reduxTypes';
import { loadCommentsList, loadOffersList, setAuthorizationStatus, setCity, setCurrentOffer, setDataLoadedStatus, setNearbyOffers, setUserData } from './action';
import { Comment } from '../types/offerTypes';
import { DEFAULT_CITY } from '../const/defaultValues';

type ThunkConfig = {
  dispatch: AppDispatch;
  state:State;
  extra:AxiosInstance;
}

export const fetchOffersAction = createAsyncThunk<void, undefined, ThunkConfig>(
  'FETCH_OFFERS_ACTION',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.Hotels());
      dispatch(setDataLoadedStatus({isDataLoaded: false}));
      dispatch(loadOffersList({offersList: data}));
      dispatch(setCity({locationName: DEFAULT_CITY}));
      dispatch(setDataLoadedStatus({isDataLoaded: true}));
    } catch {
      // отрисовка main-empty-page.tsx
    }
  }
);

export const fetchCommentsAction = createAsyncThunk<void, {offerId: string}, ThunkConfig>(
  'FETCH_COMMENTS_ACTION',
  async ({offerId}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Comment[]>(APIRoute.Comments(offerId));
      dispatch(loadCommentsList({commentsList: data}));
    } catch {
    //
    }
  }
);

export const fetchNewCommentAction = createAsyncThunk<void, {newComment: NewComment; offerId: string}, ThunkConfig>(
  'FETCH_NEW_COMMENT_ACTION',
  async ({newComment, offerId}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<Comment[]>(APIRoute.Comments(offerId), newComment);
      dispatch(loadCommentsList({commentsList: data}));
    } catch {
      //
    }
  }
);

export const fetchCurrentOfferAction = createAsyncThunk<void, {offerId: string}, ThunkConfig>(
  'FETCH_CURRENT_OFFER_ACTION',
  async ({offerId}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer>(APIRoute.Hotel(offerId));
      dispatch(setCurrentOffer(data));
    } catch {
    //
    }
  }
);

export const fetchNearbyOffersAction = createAsyncThunk<void, {offerId: string}, ThunkConfig>(
  'FETCH_NEARBY_OFFERS_ACTION',
  async ({offerId}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.Nearby(offerId));
      dispatch(setNearbyOffers(data));
    } catch {
    //
    }
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, ThunkConfig>(
  'CHECK_AUTH_ACTION',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login());
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, ThunkConfig>(
  'LOGIN_ACTION',
  async ({login: email, password}, {dispatch, extra: api}) => {
    try {
      const {data: userData} = await api.post<UserData>(APIRoute.Login(), {email, password});
      saveToken(userData.token);
      dispatch(setUserData(userData));
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
    //
    }
  }
);

export const logoutAction = createAsyncThunk<void, undefined, ThunkConfig>(
  'LOGIN_ACTION',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.delete(APIRoute.Logout());
      dropToken();
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    } catch {
    //
    }
  }
);
