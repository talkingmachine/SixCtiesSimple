import ReviewsItem from '../reviews-item/reviewsItem';
import { Comment } from '../../types/offerTypes';

type ReviewsListProps = {
  commentsList: Comment[];
}

function ReviewsList({commentsList}:ReviewsListProps):JSX.Element {
  return (
    <ul className="reviews__list">
      {commentsList.map((comment) => <ReviewsItem key={comment.id} commentData={comment}/>)}
    </ul>
  );
}

export default ReviewsList;
