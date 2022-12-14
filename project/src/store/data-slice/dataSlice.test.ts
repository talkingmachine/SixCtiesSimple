import { getFakeOffers } from '../../utils/mocks';
import { dataSlice, initialStateDataSlice, setCurrentCityLocation, setLocationName, sortByPopular, sortByPriceHTL, sortByPriceLTH, sortByRating } from './dataSlice';

describe('Reducer: data slice', () => {
  it('should return default state when action type is uknown', () => {
    expect(dataSlice.reducer(undefined, {type: 'UKNOWN_STATE'}))
      .toEqual(initialStateDataSlice);
  });
  it('should update currentCityOffersList, (sort by popular)', () => {
    const fakeOffers = getFakeOffers();
    const state = {
      locationName: 'Paris',
      currentCityOffersList: [],
      currentCityLocation: {
        lat: 0,
        lng: 0,
        zoom: 0,
      },
      propertyData: {
        offersList: fakeOffers,
        commentsList: []
      },
      nearbyOffers: [],
      isDataLoading: false,
    };
    expect(dataSlice.reducer(state, sortByPopular))
      .toEqual({
        locationName: 'Paris',
        currentCityOffersList: fakeOffers.filter((offer)=>offer.city.name === 'Paris'),
        currentCityLocation: {
          lat: 0,
          lng: 0,
          zoom: 0,
        },
        propertyData: {
          offersList: fakeOffers,
          commentsList: []
        },
        nearbyOffers: [],
        isDataLoading: false,
      });
  });
  it('should sort currentCityOffersList by rating', () => {
    const fakeOffers = getFakeOffers();
    const state = {
      locationName: 'Paris',
      currentCityOffersList: fakeOffers,
      currentCityLocation: {
        lat: 0,
        lng: 0,
        zoom: 0,
      },
      propertyData: {
        offersList: [],
        commentsList: []
      },
      nearbyOffers: [],
      isDataLoading: false,
    };
    expect(dataSlice.reducer(state, sortByRating))
      .toEqual({
        locationName: 'Paris',
        currentCityOffersList: fakeOffers.sort((offerA, offerB) => offerB.rating - offerA.rating),
        currentCityLocation: {
          lat: 0,
          lng: 0,
          zoom: 0,
        },
        propertyData: {
          offersList: [],
          commentsList: []
        },
        nearbyOffers: [],
        isDataLoading: false,
      });
  });
  it('should sort currentCityOffersList by price, hight to low', () => {
    const fakeOffers = getFakeOffers();
    const state = {
      locationName: 'Paris',
      currentCityOffersList: fakeOffers,
      currentCityLocation: {
        lat: 0,
        lng: 0,
        zoom: 0,
      },
      propertyData: {
        offersList: [],
        commentsList: []
      },
      nearbyOffers: [],
      isDataLoading: false,
    };
    expect(dataSlice.reducer(state, sortByPriceHTL))
      .toEqual({
        locationName: 'Paris',
        currentCityOffersList: state.currentCityOffersList = state.currentCityOffersList.sort((offerA, offerB) => offerB.price - offerA.price),
        currentCityLocation: {
          lat: 0,
          lng: 0,
          zoom: 0,
        },
        propertyData: {
          offersList: [],
          commentsList: []
        },
        nearbyOffers: [],
        isDataLoading: false,
      });
  });
  it('should sort currentCityOffersList by price, low to hight', () => {
    const fakeOffers = getFakeOffers();
    const state = {
      locationName: 'Paris',
      currentCityOffersList: fakeOffers,
      currentCityLocation: {
        lat: 0,
        lng: 0,
        zoom: 0,
      },
      propertyData: {
        offersList: [],
        commentsList: []
      },
      nearbyOffers: [],
      isDataLoading: false,
    };
    expect(dataSlice.reducer(state, sortByPriceLTH))
      .toEqual({
        locationName: 'Paris',
        currentCityOffersList: state.currentCityOffersList = state.currentCityOffersList.sort((offerA, offerB) => offerA.price - offerB.price),
        currentCityLocation: {
          lat: 0,
          lng: 0,
          zoom: 0,
        },
        propertyData: {
          offersList: [],
          commentsList: []
        },
        nearbyOffers: [],
        isDataLoading: false,
      });
  });
  it('should update location name', () => {
    const fakeOffers = getFakeOffers();
    const newLocation = fakeOffers.filter((offer)=>offer.city.name === 'Hamburg')[0].city.location;
    const state = {
      locationName: 'Paris',
      currentCityOffersList: fakeOffers.filter((offer)=>offer.city.name === 'Paris'),
      currentCityLocation: {
        lat: 0,
        lng: 0,
        zoom: 0,
      },
      propertyData: {
        offersList: fakeOffers,
        commentsList: []
      },
      nearbyOffers: [],
      isDataLoading: false,
    };
    expect(dataSlice.reducer(state, {type: setLocationName.type, payload: {locationName: 'Hamburg'}}))
      .toEqual({
        locationName: 'Hamburg',
        currentCityOffersList: fakeOffers.filter((offer)=>offer.city.name === 'Hamburg'),
        currentCityLocation: {
          lat: newLocation.latitude,
          lng: newLocation.longitude,
          zoom: newLocation.zoom,
        },
        propertyData: {
          offersList: fakeOffers,
          commentsList: []
        },
        nearbyOffers: [],
        isDataLoading: false,
      });
  });
  it('should update currentCityLocation', () => {
    const fakeOffers = getFakeOffers();
    const newCitiesList = fakeOffers.filter((offer)=>offer.city.name === 'Paris');
    const newCityLocation = newCitiesList[0].city.location;
    const state = {
      locationName: 'Paris',
      currentCityOffersList: newCitiesList,
      currentCityLocation: {
        lat: 0,
        lng: 0,
        zoom: 0,
      },
      propertyData: {
        offersList: fakeOffers,
        commentsList: []
      },
      nearbyOffers: [],
      isDataLoading: false,
    };
    expect(dataSlice.reducer(state, setCurrentCityLocation))
      .toEqual({
        locationName: 'Paris',
        currentCityOffersList: newCitiesList,
        currentCityLocation: {
          lat: newCityLocation.latitude,
          lng: newCityLocation.longitude,
          zoom: newCityLocation.zoom,
        },
        propertyData: {
          offersList: fakeOffers,
          commentsList: []
        },
        nearbyOffers: [],
        isDataLoading: false,
      });
  });
});
