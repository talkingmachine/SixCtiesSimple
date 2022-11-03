/* eslint-disable jsx-a11y/img-redundant-alt */

function MainPageCard ():JSX.Element {
  return (
    <article className="cities__card place-card">
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/#">
          <img className="place-card__image" src="img/apartment-02.jpg" alt="Place image" width={260} height={200} />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€132</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/#">Canal View Prinsengracht</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>);
}

export default MainPageCard;
