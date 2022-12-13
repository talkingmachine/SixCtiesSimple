import { useState, FormEvent, memo } from 'react';
import { useDispatchTyped } from '../../hooks/typedWrappers';
import { fetchNewCommentAction } from '../../store/apiActions';

type NewCommentFormProps = {
  id: string | undefined;
}

type fieldChangeHandleEvt = { target:
    { name: string;
      value: string;
    };
}

const initialState = {
  rating: '',
  review: '',
};

function NewCommentForm({id}: NewCommentFormProps):JSX.Element {
  const dispatch = useDispatchTyped();
  const [newCommentFormData, setNewCommentFormData] = useState(initialState);

  const fieldChangeHandle = (evt: fieldChangeHandleEvt) => {
    const {name, value} = evt.target;
    setNewCommentFormData({...newCommentFormData, [name]: value});
  };

  const commentSubmitButtonHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (id) {
      dispatch(fetchNewCommentAction({newComment: {
        rating: +newCommentFormData.rating,
        comment: newCommentFormData.review
      }, offerId: id,}));
      setNewCommentFormData(initialState);
    }
  };

  return (
    <form onSubmit={commentSubmitButtonHandle} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input onChange={fieldChangeHandle}
          className="form__rating-input visually-hidden"
          name="rating"
          checked={newCommentFormData.rating === '5'}
          defaultValue={5}
          id="5-stars"
          type="radio"
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input onChange={fieldChangeHandle}
          className="form__rating-input visually-hidden"
          name="rating"
          checked={newCommentFormData.rating === '4'}
          defaultValue={4}
          id="4-stars"
          type="radio"
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input onChange={fieldChangeHandle}
          className="form__rating-input visually-hidden"
          name="rating"
          checked={newCommentFormData.rating === '3'}
          defaultValue={3}
          id="3-stars"
          type="radio"
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input onChange={fieldChangeHandle}
          className="form__rating-input visually-hidden"
          name="rating"
          checked={newCommentFormData.rating === '2'}
          defaultValue={2}
          id="2-stars"
          type="radio"
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input onChange={fieldChangeHandle}
          className="form__rating-input visually-hidden"
          name="rating"
          checked={newCommentFormData.rating === '1'}
          defaultValue={1}
          id="1-star"
          type="radio"
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea onChange={fieldChangeHandle}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={newCommentFormData.review}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
}

export default memo(NewCommentForm);
