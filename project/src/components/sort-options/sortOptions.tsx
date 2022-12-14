import classNames from 'classnames';
import { offersSortTypes } from '../../const/sortTypes';
import { useDispatchTyped } from '../../hooks/typedWrappers';
import { sortByPriceHTL, sortByPriceLTH, sortByRating, sortByPopular } from '../../store/data-slice/dataSlice';

type SortOptionsProps = {
  isOpened: boolean;
  setOffersSortType: React.Dispatch<React.SetStateAction<string>>;
  currentSortType: string;
}

function SortOptions({isOpened, currentSortType, setOffersSortType}: SortOptionsProps):JSX.Element {
  const dispatch = useDispatchTyped();

  const sortSelectHandle = (sortOption: string) => {
    switch (sortOption) {
      case offersSortTypes.popular:
        dispatch(sortByPopular());
        setOffersSortType(offersSortTypes.popular);
        break;
      case offersSortTypes.priceHTL:
        dispatch(sortByPriceHTL());
        setOffersSortType(offersSortTypes.priceHTL);
        break;
      case offersSortTypes.priceLTH:
        dispatch(sortByPriceLTH());
        setOffersSortType(offersSortTypes.priceLTH);
        break;
      case offersSortTypes.rating:
        dispatch(sortByRating());
        setOffersSortType(offersSortTypes.rating);
        break;
    }
  };

  return (
    <ul className={classNames('places__options', 'places__options--custom', {'places__options--opened': isOpened})}>
      {Object.values(offersSortTypes).map((sortOption) => (
        <li key={sortOption} onClick={() => sortSelectHandle(sortOption)} className={classNames('places__option', {'places__option--active': currentSortType === sortOption})} tabIndex={0}>
          {sortOption}
        </li>
      ))}
    </ul>
  );
}
// на стриме говорили не перебарщивать с оптимизацией)
// я сделаю если останется время, но типо ускорение перерисовки списка.. не знаю

export default SortOptions;
