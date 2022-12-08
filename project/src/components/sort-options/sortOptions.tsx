import classNames from 'classnames';
import SortTypes from '../../const/sortTypes';
import { useDispatchTyped } from '../../hooks/typedWrappers';
import { sortByPriceHTL, sortByPriceLTH, sortByRating, sortByPopular } from '../../store/action';

type SortOptionsProps = {
  isOpened: boolean;
  setSortType: React.Dispatch<React.SetStateAction<SortTypes>>;
  sortType: string;
}

function SortOptions({isOpened, sortType, setSortType}: SortOptionsProps):JSX.Element {
  const dispatch = useDispatchTyped();

  const sortPriceHTLHandle = () => {
    dispatch(sortByPriceHTL());
    setSortType(SortTypes.priceHTL);
  };

  const sortPriceLTHHandle = () => {
    dispatch(sortByPriceLTH());
    setSortType(SortTypes.priceLTH);
  };

  const sortByRatingHandle = () => {
    dispatch(sortByRating());
    setSortType(SortTypes.rating);
  };

  const sortByPopularHandle = () => {
    dispatch(sortByPopular());
    setSortType(SortTypes.popular);
  };

  return (
    <ul className={classNames('places__options', 'places__options--custom', {'places__options--opened': isOpened})}>
      <li onClick={sortByPopularHandle} className={classNames('places__option', {'places__option--active': sortType === SortTypes.popular})} tabIndex={0}>Popular</li>
      <li onClick={sortPriceLTHHandle} className={classNames('places__option', {'places__option--active': sortType === SortTypes.priceLTH})} tabIndex={0}>Price: low to high</li>
      <li onClick={sortPriceHTLHandle} className={classNames('places__option', {'places__option--active': sortType === SortTypes.priceHTL})} tabIndex={0}>Price: high to low</li>
      <li onClick={sortByRatingHandle} className={classNames('places__option', {'places__option--active': sortType === SortTypes.rating})} tabIndex={0}>Top rated first</li>
    </ul>
  );
}

export default SortOptions;
