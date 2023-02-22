import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoutes } from '../const/APIRoutes';
import { dropToken, saveToken } from '../services/token';
import { AuthData, UserData } from '../types/apiTypes';
import { NewComment, Offer, Comment } from '../types/offerTypes';
import { AppDispatch, State } from '../types/reduxTypes';

type ThunkConfig = {
  dispatch: AppDispatch;
  state:State;
  extra:AxiosInstance;
}

export const fetchOffersAction = createAsyncThunk<Offer[], {isAppStarts: boolean} | undefined, ThunkConfig>(
  'FETCH_OFFERS_ACTION',
  async (_arg, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<Offer[]>(APIRoutes.Hotels());
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);


export const fetchCommentsAction = createAsyncThunk<Comment[], {offerId: string}, ThunkConfig>(
  'FETCH_COMMENTS_ACTION',
  async ({offerId}, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<Comment[]>(APIRoutes.Comments(offerId));
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchNewCommentAction = createAsyncThunk<Comment[], {newComment: NewComment; offerId: string}, ThunkConfig>(
  'FETCH_NEW_COMMENT_ACTION',
  async ({newComment, offerId}, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.post<Comment[]>(APIRoutes.Comments(offerId), newComment);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchCurrentOfferAction = createAsyncThunk<Offer, {offerId: string}, ThunkConfig>(
  'FETCH_CURRENT_OFFER_ACTION',
  async ({offerId}, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<Offer>(APIRoutes.Hotel(offerId));
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchNearbyOffersAction = createAsyncThunk<Offer[], {offerId: string}, ThunkConfig>(
  'FETCH_NEARBY_OFFERS_ACTION',
  async ({offerId}, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<Offer[]>(APIRoutes.Nearby(offerId));
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, ThunkConfig>(
  'CHECK_AUTH_ACTION',
  async (_arg, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<UserData>(APIRoutes.Login());
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const loginAction = createAsyncThunk<UserData, {authData: AuthData}, ThunkConfig>(
  'LOGIN_ACTION',
  async ({authData}, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.post<UserData>(APIRoutes.Login(), authData);
      saveToken(data.token);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const logoutAction = createAsyncThunk<void, undefined, ThunkConfig>(
  'LOGOUT_ACTION',
  async (_arg, {extra: api, rejectWithValue}) => {
    try {
      await api.delete(APIRoutes.Logout());
      dropToken();
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
