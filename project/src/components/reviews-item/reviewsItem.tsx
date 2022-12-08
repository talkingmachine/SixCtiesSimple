import { Comment } from '../../types/offerTypes';
import { getCommentDate, parseRatingToStars, getDateTimePropertyDate } from '../../utils/utils';

type ReviewsItemProps = {
  commentData: Comment;
}

function ReviewsItem ({commentData}: ReviewsItemProps):JSX.Element {
  const {comment, date, rating, user} = commentData;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} alt="Reviews avatar" width={54} height={54} />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: parseRatingToStars(rating)}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={getDateTimePropertyDate(date)}>{getCommentDate(date)}</time>
      </div>
    </li>
  );
}

export default ReviewsItem;
