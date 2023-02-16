import { MAX_RATING } from '../../constants/common';
import IconStar, { Star } from '../icon-star/icon-star';

type ProductCardRateProps = {
  rating: number,
}

export default function ProductCardRate({rating}: ProductCardRateProps):JSX.Element {
  const fullStars = Array.from({length: rating}).map((_item, index) => <IconStar key={index} star={Star.Full} />);

  const emptyStars = Array.from({length: MAX_RATING - rating}).map((_item, index) => <IconStar key={index} star={Star.Empty} />);

  const iconStars = [...fullStars, ...emptyStars];

  return(
    
    <div className="rate product-card__rate">
      {iconStars}
      <p className="visually-hidden">Рейтинг: Хорошо</p>
      <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>0</p>
    </div>

  );
}