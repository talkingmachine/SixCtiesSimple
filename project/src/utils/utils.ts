import dayjs from 'dayjs';
import { Point } from '../types/mapTypes';
import { Offer } from '../types/offerTypes';

const parseRatingToStars = (number:number):string => (`${Math.round(number) * 20}%`);

const firstLetterToUpperCase = (word:string):string => (word ? word[0].toUpperCase() + word.slice(1) : '');

const getCommentDate = (dateString:string):string => dayjs(dateString).format('MMMM YYYY'); // April 2019

const getDateTimePropertyDate = (dateString:string):string => dayjs(dateString).format('YYYY-DD-MM'); //2019-04-24

const convertOffersToPoints = (offersList: Offer[]):Point[] => offersList.map(({location, id})=>({
  lat: location.latitude,
  lng: location.longitude,
  zoom: location.zoom,
  id: id
}));

export {parseRatingToStars, firstLetterToUpperCase, getCommentDate, getDateTimePropertyDate, convertOffersToPoints};
