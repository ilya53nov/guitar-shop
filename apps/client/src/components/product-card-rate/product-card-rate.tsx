import IconStar, { Star } from '../icon-star/icon-star';

type ProductCardRateProps = {
  rating: number,
}

export default function ProductCardRate({rating}: ProductCardRateProps):JSX.Element {
  const fullStars = Array.from({length: rating}).map((item, index) => <IconStar key={index} star={Star.Full} />);

  const emptyStars = Array.from({length: 5 - rating}).map((item, index) => <IconStar key={index} star={Star.Empty} />);

  const iconStars = [...fullStars, ...emptyStars];

  return(
    
    <div className="rate product-card__rate">
      {iconStars}
      <p className="visually-hidden">Рейтинг: Хорошо</p>
      <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>15</p>
    </div>

  );
}