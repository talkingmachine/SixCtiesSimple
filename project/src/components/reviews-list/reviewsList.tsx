import { useSelectorTyped } from '../../hooks/typedWrappers';
import { commentsListSelector } from '../../store/selectors';
import ReviewsItem from '../reviews-item/reviewsItem';


function ReviewsList():JSX.Element {
  const commentsList = useSelectorTyped(commentsListSelector);

  return (
    <ul className="reviews__list">
      {commentsList.map((comment) => <ReviewsItem key={comment.id} commentData={comment}/>)}
    </ul>
  );
}

export default ReviewsList;
