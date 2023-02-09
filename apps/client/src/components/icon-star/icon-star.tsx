export enum Star {
  Full = '#icon-full-star',
  Empty = '#icon-star',
}

type IconStarProps = {
  star: Star,

}

export default function IconStar({star}: IconStarProps):JSX.Element {
  return(
  <svg width="12" height="11" aria-hidden="true">
    <use xlinkHref={star}></use>
  </svg>
  );  
}