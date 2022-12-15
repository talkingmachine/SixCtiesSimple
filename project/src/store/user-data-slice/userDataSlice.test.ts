import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import createAPI from '../../services/axios-api';
import { State } from '../../types/reduxTypes';
import { initialStateDataSlice, userDataSlice } from './userDataSlice';
import { APIRoutes } from '../../const/APIRoutes';
import { checkAuthAction } from '../apiActions';

describe('Reducer: user data slice', () => {
  it('should return default state when action type is uknown', () => {
    expect(userDataSlice.reducer(undefined, {type: 'UKNOWN_STATE'}))
      .toEqual(initialStateDataSlice);
  });
});

describe('Async actions: user data slice', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action<string>,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should set "auth" authorization status when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoutes.Login())
      .reply(200, []);

    expect(store.getActions()).toEqual([]);
    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type
    ]);
  });
});

