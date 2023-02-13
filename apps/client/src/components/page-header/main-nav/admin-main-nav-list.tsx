import { ClientRoute } from "@project/shared-types";

export default function AdminMainNavList():JSX.Element {
  return(
    <>
      <li className="main-nav__item"><a className="link main-nav__link" href={ClientRoute.Main}>Каталог</a></li>
      <li className="main-nav__item"><a className="link main-nav__link" href={ClientRoute.Orders}>Список заказов</a></li>
      <li className="main-nav__item"><a className="link main-nav__link" href={ClientRoute.Products}>Список товаров</a></li>
    </>
  );
}