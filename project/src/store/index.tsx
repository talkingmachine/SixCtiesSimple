import { configureStore } from '@reduxjs/toolkit';
import createAPI from '../services/axios-api';
import { rootReducer } from './rootReducer';

const api = createAPI();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
      serializableCheck: false,
    }),
});

export default store;
