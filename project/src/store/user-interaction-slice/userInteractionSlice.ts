import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReducerNameSpaces } from '../../const/reducer-name-spaces';
import { Offer } from '../../types/offerTypes';
import { fetchCurrentOfferAction } from '../apiActions';

type InitialState = {
  currentOffer: Offer | null;
  activeOfferId: number;
}

export const initialStateUserInteractionSlice: InitialState = {
  currentOffer: null,
  activeOfferId: -1,
};

export const userInteractionSlice = createSlice({
  name: ReducerNameSpaces.userInteraction,
  initialState: initialStateUserInteractionSlice,
  reducers: {
    setActiveOfferId: (state, action: PayloadAction<{activeOfferId: number}>) => {
      state.activeOfferId = action.payload.activeOfferId;
    },
    setCurrentOffer: (state, action: PayloadAction<{currentOffer: Offer | null}>) => {
      state.currentOffer = action.payload.currentOffer;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCurrentOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
      });
  },
});

export const {setActiveOfferId, setCurrentOffer} = userInteractionSlice.actions;
