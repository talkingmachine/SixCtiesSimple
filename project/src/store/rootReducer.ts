import { combineReducers } from '@reduxjs/toolkit';
import { ReducerNameSpaces } from '../const/reducer-name-spaces';
import { dataSlice } from './data-slice/dataSlice';
import { userDataSlice } from './user-data-slice/userDataSlice';
import { userInteractionSlice } from './user-interaction-slice/userInteractionSlice';

export const rootReducer = combineReducers({
  [ReducerNameSpaces.userData]: userDataSlice.reducer,
  [ReducerNameSpaces.userInteraction]: userInteractionSlice.reducer,
  [ReducerNameSpaces.data]: dataSlice.reducer,
});
