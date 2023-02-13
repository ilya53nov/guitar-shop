import { ClientRoute } from "@project/shared-types";

export default function UserMainNavList():JSX.Element {
  return(
    <>
      <li className="main-nav__item"><a className="link main-nav__link link--current" href={ClientRoute.Main}>Каталог</a></li>
      <li className="main-nav__item"><a className="link main-nav__link" href="#">Где купить?</a></li>
      <li className="main-nav__item"><a className="link main-nav__link" href="#">О компании</a></li>
    </>
  );
}