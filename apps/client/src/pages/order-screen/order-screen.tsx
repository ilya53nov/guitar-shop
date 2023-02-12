import PageFooter from '../../components/page-footer/page-footer';

export default function OrderScreen():JSX.Element {
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
      <main className="page-content">
        <section className="order">
          <div className="container">
            <h1 className="order__title">Заказ № 00-000-000</h1>
            <ul className="breadcrumbs">
              <li className="breadcrumbs__item"><a className="link" href="./main.html">Каталог</a>
              </li>
              <li className="breadcrumbs__item"><a className="link" href="#"> Заказы</a>
              </li>
              <li className="breadcrumbs__item"><a className="link">Заказ № 00-000-000</a>
              </li>
            </ul>
            <table className="order-table">
              <tbody>
                <tr>
                  <td>Общее количество товаров</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Дата заказа</td>
                  <td>13.09.2022</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>К оплате</td>
                  <td>70 000 <span>₽</span></td>
                </tr>
              </tfoot>
            </table>
            <ul className="order__list order-list">
              <li className="order-list__item">
                <div className="order-list__data"><img src="img/content/catalog-product-1.png" srcSet="img/content/catalog-product-1@2x.png 2x" width="60" height="130" alt="Картинка гитары" />
                  <div className="order-list__container">
                    <p className="order-list__name">ЭлектроГитара Честер bass</p>
                    <p className="order-list__lot">Артикул: SO757575</p>
                    <p className="order-list__parameters">Электрогитара, 6 струнная</p>
                  </div>
                </div><span className="order-list__quantity">1</span><span className="order-list__price">17 500 ₽</span>
                <button className="order-list__button button-cross" type="button" aria-label="Закрыть"><span className="button-cross__icon"></span>
                </button>
              </li>
              <li className="order-list__item">
                <div className="order-list__data"><img src="img/content/catalog-product-1.png" srcSet="img/content/catalog-product-1@2x.png 2x" width="60" height="130" alt="Картинка гитары" />
                  <div className="order-list__container">
                    <p className="order-list__name">ЭлектроГитара Честер bass</p>
                    <p className="order-list__lot">Артикул: SO757575</p>
                    <p className="order-list__parameters">Электрогитара, 6 струнная</p>
                  </div>
                </div><span className="order-list__quantity">2</span><span className="order-list__price">35 000 ₽</span>
                <button className="order-list__button button-cross" type="button" aria-label="Закрыть"><span className="button-cross__icon"></span>
                </button>
              </li>
              <li className="order-list__item">
                <div className="order-list__data"><img src="img/content/catalog-product-1.png" srcSet="img/content/catalog-product-1@2x.png 2x" width="60" height="130" alt="Картинка гитары" />
                  <div className="order-list__container">
                    <p className="order-list__name">ЭлектроГитара Честер bass</p>
                    <p className="order-list__lot">Артикул: SO757575</p>
                    <p className="order-list__parameters">Электрогитара, 6 струнная</p>
                  </div>
                </div><span className="order-list__quantity">1</span><span className="order-list__price">17 500 ₽</span>
                <button className="order-list__button button-cross" type="button" aria-label="Закрыть"><span className="button-cross__icon"></span>
                </button>
              </li>
            </ul>
            <button className="button order__button button--small button--black-border">Вернуться к списку заказов</button>
          </div>
        </section>
      </main>
      <PageFooter />
    </div>    
  );
}