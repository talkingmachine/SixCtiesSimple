import classNames from 'classnames';
import { useDispatchTyped, useSelectorTyped } from '../../hooks/typedWrappers';
import { setCity } from '../../store/action';

type LocationsListProps = {
  locationNamesList: string[];
}

function LocationsList ({locationNamesList}:LocationsListProps):JSX.Element {
  const selectedCity = useSelectorTyped((state) => state.locationName);
  const dispatch = useDispatchTyped();

  const onLocationClickHandle = (evt: React.MouseEvent) => {
    evt.preventDefault();
    dispatch(setCity({locationName: String(evt.currentTarget.firstChild?.textContent) })); //не знаю как проще.
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locationNamesList.map((locationName) => (
          <li key={locationName} className="locations__item">
            <a onClick={onLocationClickHandle} className={classNames('locations__item-link', 'tabs__item', {'tabs__item--active': selectedCity === locationName})} href="/#">
              <span>{locationName}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default LocationsList;
