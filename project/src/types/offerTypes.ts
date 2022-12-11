type Comment = {
  'comment': string;
  'date': string;
  'id': number;
  'rating': number;
  'user': {
    'avatarUrl': string;
    'id': number;
    'isPro': boolean;
    'name': string;
  };
}
type Offer = {
  'bedrooms': number;
  'city': {
    'location': {
      'latitude': number;
      'longitude': number;
      'zoom': number;
    };
    'name': string;
  };
  'description': string;
  'goods': string[];
  'host': {
    'avatarUrl': string;
    'id': number;
    'isPro': boolean;
    'name': string;
  };
  'id': number;
  'images': string[];
  'isPremium': boolean;
  'location': {
    'latitude': number;
    'longitude': number;
    'zoom': number;
  };
  'maxAdults': number;
  'previewImage': string;
  'price': number;
  'rating': number;
  'title': string;
  'type': string;
}
type PropertyData = {
  offersList: Offer[];
  commentsList: Comment[];
}
type NewComment = {
  comment: string;
  rating: number;
}

export type {Comment, Offer, PropertyData, NewComment};
