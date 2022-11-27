import type { Comment } from '../types/offerCommentTypes';

const getCommentsList:Comment[] = [
  {
    'comment': 'COMMENT 1 - A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'date': 'San Aug 15 2021 13:44:00 GMT+0300 (Москва, стандартное время)',
    'id': 1,
    'rating': 2,
    'user': {
      'avatarUrl': 'img/1.png',
      'id': 1,
      'isPro': true,
      'name': 'Santa.Claus'
    }
  },
  {
    'comment': 'COMMENT 2 - A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'date': 'Tue Nov 15 2022 18:49:32 GMT+0300 (Москва, стандартное время)',
    'id': 2,
    'rating': 4,
    'user': {
      'avatarUrl': 'img/1.png',
      'id': 1,
      'isPro': false,
      'name': 'Oliver.Queen'
    }
  },
  {
    'comment': 'COMMENT 3 - A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'date': 'Mon Sep 29 2022 10:46:33 GMT+0300 (Москва, стандартное время)',
    'id': 3,
    'rating': 5,
    'user': {
      'avatarUrl': 'img/1.png',
      'id': 1,
      'isPro': true,
      'name': 'Dr.Martens'
    }
  }
  ,
  {
    'comment': 'COMMENT 4 - A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'date': 'Tue Feb 19 2007 18:49:32 GMT+0300 (Москва, стандартное время)',
    'id': 4,
    'rating': 3,
    'user': {
      'avatarUrl': 'img/1.png',
      'id': 1,
      'isPro': false,
      'name': 'Fly.Day'
    }
  }
];

export default getCommentsList;
