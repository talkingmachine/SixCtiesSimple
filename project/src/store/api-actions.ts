import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import APIRoute from '../const/APIRoute';
import AuthorizationStatus from '../const/authorizationStatus';
import { dropToken, saveToken } from '../services/token';
import { AuthData, UserData } from '../types/apiTypes';
import { Offer } from '../types/offerTypes';
import { AppDispatch, State } from '../types/reduxTypes';
import { loadCommentsList, loadOffersList, requireAuthorization, setCity, setDataLoadedStatus } from './action';
import { Comment } from '../types/offerTypes';
import { DEFAULT_CITY } from '../const/defaultValues';

const fetchOffersAction = createAsyncThunk<void, undefined, {dispatch: AppDispatch; state:State; extra:AxiosInstance}>(
  'FETCH_OFFERS_ACTION',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Hotels);
    dispatch(setDataLoadedStatus({isDataLoaded: false}));
    dispatch(loadOffersList({offersList: data}));
    dispatch(setCity({locationName: DEFAULT_CITY}));
    dispatch(setDataLoadedStatus({isDataLoaded: true}));
  }
);

const fetchCommentsAction = createAsyncThunk<void, {offerId: string}, {dispatch: AppDispatch; state:State; extra:AxiosInstance}>(
  'FETCH_COMMENTS_ACTION',
  async ({offerId}, {dispatch, extra: api}) => {
    const {data} = await api.get<Comment[]>(`${APIRoute.Comments}/${offerId}`);
    dispatch(loadCommentsList({commentsList: data}));
  }
);

const checkAuthAction = createAsyncThunk<void, undefined, {dispatch: AppDispatch; state: State; extra: AxiosInstance}>(
  'CHECK_AUTH_ACTION',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

const loginAction = createAsyncThunk<void, AuthData, {dispatch: AppDispatch; state: State; extra: AxiosInstance}>(
  'LOGIN_ACTION',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  }
);

const logoutAction = createAsyncThunk<void, undefined, {dispatch: AppDispatch; state: State; extra: AxiosInstance}>(
  'LOGIN_ACTION',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
);

export {fetchOffersAction, fetchCommentsAction, checkAuthAction, loginAction, logoutAction};
