import PageFooter from '../../components/page-footer/page-footer';

export default function OrdersScreen():JSX.Element {
  return(
    <div className="wrapper">
      <header className="header--admin header" id="header">
        <div className="container">
          <div className="header__wrapper"><a className="header__logo logo" href="main.html"><img className="logo__img" width="70" height="70" src="./img/svg/logo.svg" alt="Логотип" /></a>
            <nav className="main-nav">
              <ul className="main-nav__list">
                <li className="main-nav__item"><a className="link main-nav__link" href="main">Каталог</a>
                </li>
                <li className="main-nav__item"><a className="link main-nav__link" href="#">Список заказов</a>
                </li>
                <li className="main-nav__item"><a className="link main-nav__link" href="#">Список товаров</a>
                </li>
              </ul>
            </nav>
            <div className="header__container"><span className="header__user-name">Имя</span><a className="header__link" href="login.html" aria-label="Перейти в личный кабинет">
                <svg className="header__link-icon" width="12" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-account"></use>
                </svg><span className="header__link-text">Вход</span></a><a className="header__cart-link" href="cart.html" aria-label="Перейти в корзину">
                <svg className="header__cart-icon" width="14" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-basket"></use>
                </svg><span className="header__cart-count">2</span></a></div>
          </div>
        </div>
      </header>
      <main className="page-content orders__main">
        <section className="orders">
          <div className="container">
            <h1 className="title title--bigger orders__title">Список заказов</h1>
            <ul className="breadcrumbs orders__breadcrumps">
              <li className="breadcrumbs__item"><a className="link" href="./main.html">Каталог</a>
              </li>
              <li className="breadcrumbs__item"><a className="link" href="#"> Заказы</a>
              </li>
            </ul>
            <div className="catalog-sort">
              <h2 className="catalog-sort__title">Сортировать:</h2>
              <div className="catalog-sort__type">
                <button className="catalog-sort__type-button catalog-sort__type-button--active" aria-label="по дате">по дате</button>
                <button className="catalog-sort__type-button" aria-label="по цене">по цене</button>
              </div>
              <div className="catalog-sort__order">
                <button className="catalog-sort__order-button catalog-sort__order-button--up" aria-label="По возрастанию"></button>
                <button className="catalog-sort__order-button catalog-sort__order-button--down" aria-label="По убыванию"></button>
              </div>
            </div>
            <ul className="orders__list">
              <li className="orders__item">
                <h3 className="orders__number">Заказ №00-000-000</h3><span className="orders__items">товаров&nbsp;<b className="orders__items-qty">4</b></span><span className="orders__date">13.09.2022</span><b className="orders__sum">35 000<span className="orders__rouble">₽</span></b>
                <button className="button button--small orders__remove-button" type="button">Удалить</button>
              </li>
              <li className="orders__item">
                <h3 className="orders__number">Заказ №00-000-000</h3><span className="orders__items">товаров&nbsp;<b className="orders__items-qty">4</b></span><span className="orders__date">13.09.2022</span><b className="orders__sum">35 000<span className="orders__rouble">₽</span></b>
                <button className="button button--small orders__remove-button" type="button">Удалить</button>
              </li>
              <li className="orders__item">
                <h3 className="orders__number">Заказ №00-000-000</h3><span className="orders__items">товаров&nbsp;<b className="orders__items-qty">4</b></span><span className="orders__date">13.09.2022</span><b className="orders__sum">35 000<span className="orders__rouble">₽</span></b>
                <button className="button button--small orders__remove-button" type="button">Удалить</button>
              </li>
              <li className="orders__item">
                <h3 className="orders__number">Заказ №00-000-000</h3><span className="orders__items">товаров&nbsp;<b className="orders__items-qty">4</b></span><span className="orders__date">13.09.2022</span><b className="orders__sum">35 000<span className="orders__rouble">₽</span></b>
                <button className="button button--small orders__remove-button" type="button">Удалить</button>
              </li>
              <li className="orders__item">
                <h3 className="orders__number">Заказ №00-000-000</h3><span className="orders__items">товаров&nbsp;<b className="orders__items-qty">4</b></span><span className="orders__date">13.09.2022</span><b className="orders__sum">35 000<span className="orders__rouble">₽</span></b>
                <button className="button button--small orders__remove-button" type="button">Удалить</button>
              </li>
              <li className="orders__item">
                <h3 className="orders__number">Заказ №00-000-000</h3><span className="orders__items">товаров&nbsp;<b className="orders__items-qty">4</b></span><span className="orders__date">13.09.2022</span><b className="orders__sum">35 000<span className="orders__rouble">₽</span></b>
                <button className="button button--small orders__remove-button" type="button">Удалить</button>
              </li>
            </ul>
            <div className="pagination orders__pagination">
              <ul className="pagination__list">
                <li className="pagination__page pagination__page--active"><a className="link pagination__page-link" href="1">1</a>
                </li>
                <li className="pagination__page"><a className="link pagination__page-link" href="2">2</a>
                </li>
                <li className="pagination__page"><a className="link pagination__page-link" href="3">3</a>
                </li>
                <li className="pagination__page pagination__page--next" id="next"><a className="link pagination__page-link" href="2">Далее</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <PageFooter />
    </div>    
  );
}