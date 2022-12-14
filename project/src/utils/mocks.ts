import { address, lorem, image } from 'faker';
import { locationNamesList } from '../const/locationNamesList';
import { InitialState } from '../store/data-slice/dataSlice';
import { Offer } from '../types/offerTypes';

const getRandomNumber = (number = 10) => Math.floor(Math.random() * number);

const getFakeOffer = (): Offer => ({
  'bedrooms': getRandomNumber(),
  'city': {
    'location': {
      'latitude': +address.latitude(),
      'longitude': +address.longitude(),
      'zoom': getRandomNumber(),
    },
    'name': locationNamesList[getRandomNumber(locationNamesList.length)]
  },
  'description': lorem.sentence(5),
  'goods': Array.from({length: 5}, () => lorem.word()),
  'host': {
    'avatarUrl': image.avatar(),
    'id': getRandomNumber(),
    'isPro': Math.random() >= 0.5,
    'name': lorem.word(),
  },
  'id': getRandomNumber(),
  'images': Array.from({length: 5}, () => image.abstract()),
  'isPremium': Math.random() >= 0.5,
  'location': {
    'latitude': +address.latitude(),
    'longitude': +address.longitude(),
    'zoom': getRandomNumber(),
  },
  'maxAdults': getRandomNumber(),
  'previewImage': image.abstract(),
  'price': getRandomNumber(),
  'rating': getRandomNumber(),
  'title': lorem.sentence(5),
  'type': lorem.word(),
});
export const getFakeOffers = (length = 50): Offer[] => Array.from({length: length}, () => getFakeOffer());

export const getFakeState = (): InitialState => ({
  locationName: locationNamesList[getRandomNumber(locationNamesList.length)],
  currentCityOffersList: getFakeOffers(),
  currentCityLocation: {
    lat: +address.latitude(),
    lng: +address.longitude(),
    zoom: getRandomNumber(),
  },
  propertyData: {
    offersList: getFakeOffers(),
    commentsList: []
  },
  nearbyOffers: getFakeOffers(3),
  isDataLoading: Math.random() >= 0.5,
});

