import { dataSlice, sortByPopular } from './dataSlice';

describe('Reducer: dataSlice', () => {
  it('should update currentCityOffersList', () => {
    const fakeOffers = [
      {
        'bedrooms': 3,
        'city': {
          'location': {
            'latitude': 52.3909553943508,
            'longitude': 4.85309666406198,
            'zoom': 10
          },
          'name': 'Amsterdam'
        },
        'description': 'DESCRIPTION 1 - A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        'goods': [
          'Heating'
        ],
        'host': {
          'avatarUrl': 'img/1.png',
          'id': 1,
          'isPro': true,
          'name': 'Angelina'
        },
        'id': 0,
        'images': [
          'img/1.png'
        ],
        'isPremium': false,
        'location': {
          'latitude': 52.3909553943508,
          'longitude': 4.85309666406198,
          'zoom': 8
        },
        'maxAdults': 4,
        'previewImage': 'img/2.png',
        'price': 120,
        'rating': 4.8,
        'title': 'TITLE 1 - Beautiful & luxurious studio at great location',
        'type': 'apartment'
      },
      {
        'bedrooms': 5,
        'city': {
          'location': {
            'latitude': 52.3909553943508,
            'longitude': 4.929309666406198,
            'zoom': 10
          },
          'name': 'Paris'
        },
        'description': 'DESCRIPTION 2 - A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        'goods': [
        ],
        'host': {
          'avatarUrl': 'img/4.png',
          'id': 1,
          'isPro': false,
          'name': 'Veorra'
        },
        'id': 1,
        'images': [
          'img/2.png'
        ],
        'isPremium': true,
        'location': {
          'latitude': 52.3609553943508,
          'longitude': 4.85309666406198,
          'zoom': 8
        },
        'maxAdults': 13,
        'previewImage': 'img/4.png',
        'price': 650,
        'rating': 4.0,
        'title': 'TITLE 2 - Beautiful & luxurious studio at great location',
        'type': 'house'
      },
      {
        'bedrooms': 141,
        'city': {
          'location': {
            'latitude': 52.349553943508,
            'longitude': 4.839009666406198,
            'zoom': 10
          },
          'name': 'Cologne'
        },
        'description': 'DESCRIPTION 3 - A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        'goods': [
          'Heating'
        ],
        'host': {
          'avatarUrl': 'img/5.png',
          'id': 1,
          'isPro': true,
          'name': 'Clapp'
        },
        'id': 2,
        'images': [
          'img/3.png'
        ],
        'isPremium': false,
        'location': {
          'latitude': 52.3909553943508,
          'longitude': 4.929309666406198,
          'zoom': 6
        },
        'maxAdults': 876,
        'previewImage': 'img/5.png',
        'price': 13,
        'rating': 2.8,
        'title': 'TITLE 3 - Beautiful & luxurious studio at great location',
        'type': 'room'
      },
      {
        'bedrooms': 125,
        'city': {
          'location': {
            'latitude': 52.56,
            'longitude': 4.25168,
            'zoom': 163
          },
          'name': 'Hamburg'
        },
        'description': 'DESCRIPTION 4 - A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        'goods': [
        ],
        'host': {
          'avatarUrl': 'img/6.png',
          'id': 1,
          'isPro': false,
          'name': 'Groot'
        },
        'id': 3,
        'images': [
          'img/4.png'
        ],
        'isPremium': false,
        'location': {
          'latitude': 52.3809553943508,
          'longitude': 4.939309666406198,
          'zoom': 4
        },
        'maxAdults': 909,
        'previewImage': 'img/7.png',
        'price': 676,
        'rating': 4.5,
        'title': 'TITLE 4 - Beautiful & luxurious studio at great location',
        'type': 'hotel'
      },
    ];
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
  //it('should sort currentCityOffersList by rating', () => {
  //  const state = getFakeState();
  //  expect(dataSlice.reducer(state, sortByRating()))
  //    .toBe(() => state.currentCityOffersList.every((offer, index) => {
  //      if (state.currentCityOffersList[index + 1]) {
  //        return offer.rating > state.currentCityOffersList[index + 1].rating;
  //      }
  //      return true;
  //    }));
  //});
});

