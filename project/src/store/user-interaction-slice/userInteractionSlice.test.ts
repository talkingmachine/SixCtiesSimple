import { getFakeOffer } from '../../utils/mocks';
import { initialStateUserInteractionSlice, setActiveOfferId, setCurrentOffer, userInteractionSlice } from './userInteractionSlice';

describe('Reducer: user interaction slice', () => {
  it('should return default state when action type is uknown', () => {
    expect(userInteractionSlice.reducer(undefined, {type: 'UKNOWN_STATE'}))
      .toEqual(initialStateUserInteractionSlice);
  });
  it('should update active offer id', () => {
    const newActoveOfferId = 365;
    const state = {
      currentOffer: null,
      activeOfferId: 0,
    };
    expect(userInteractionSlice.reducer(state, {type: setActiveOfferId.type, payload: {activeOfferId: newActoveOfferId}}))
      .toEqual({
        currentOffer: null,
        activeOfferId: newActoveOfferId,
      });
  });
  it('should update current offer', () => {
    const newCurrentOffer = getFakeOffer();
    const state = {
      currentOffer: null,
      activeOfferId: 0,
    };
    expect(userInteractionSlice.reducer(state, {type: setCurrentOffer.type, payload: {currentOffer: newCurrentOffer}}))
      .toEqual({
        currentOffer: newCurrentOffer,
        activeOfferId: 0,
      });
  });
});
