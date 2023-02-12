import { ClientRoute } from '@project/shared-types';
import { useNavigate } from 'react-router-dom';
import CatalogCards from '../../components/catalog-cards/catalog-cards';
import PageFooter from '../../components/page-footer/page-footer';
import { useGetProductsQuery } from '../../store/api';


export default function ProductListScreen():JSX.Element {
  const {data: products, isSuccess} = useGetProductsQuery({});

  const navigate = useNavigate();

  if (!isSuccess) {
    return(<div>not success</div>)
  }

  

  const goAddProductScreen = () => {
    navigate(ClientRoute.AddProduct);
  }

  return (
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
        <section className="product-list">
          <div className="container">
            <h1 className="product-list__title">Список товаров</h1>
            <ul className="breadcrumbs">
              <li className="breadcrumbs__item"><a className="link" href="./main.html">Каталог</a>
              </li>
              <li className="breadcrumbs__item"><a className="link">Товары</a>
              </li>
            </ul>
            <div className="catalog">
              <form className="catalog-filter" action="#" method="post">
                <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
                <fieldset className="catalog-filter__block">
                  <legend className="catalog-filter__block-title">Тип гитар</legend>
                  <div className="form-checkbox catalog-filter__block-item">
                    <input className="visually-hidden" type="checkbox" id="acoustic" name="acoustic" />
                    <label htmlFor="acoustic">Акустические гитары</label>
                  </div>
                  <div className="form-checkbox catalog-filter__block-item">
                    <input className="visually-hidden" type="checkbox" id="electric" name="electric" checked /> 
                    <label htmlFor="electric">Электрогитары</label>
                  </div>
                  <div className="form-checkbox catalog-filter__block-item">
                    <input className="visually-hidden" type="checkbox" id="ukulele" name="ukulele" checked />
                    <label htmlFor="ukulele">Укулеле</label>
                  </div>
                </fieldset>
                <fieldset className="catalog-filter__block">
                  <legend className="catalog-filter__block-title">Количество струн</legend>
                  <div className="form-checkbox catalog-filter__block-item">
                    <input className="visually-hidden" type="checkbox" id="4-strings" name="4-strings" checked />
                    <label htmlFor="4-strings">4</label>
                  </div>
                  <div className="form-checkbox catalog-filter__block-item">
                    <input className="visually-hidden" type="checkbox" id="6-strings" name="6-strings" checked />
                    <label htmlFor="6-strings">6</label>
                  </div>
                  <div className="form-checkbox catalog-filter__block-item">
                    <input className="visually-hidden" type="checkbox" id="7-strings" name="7-strings" />
                    <label htmlFor="7-strings">7</label>
                  </div>
                  <div className="form-checkbox catalog-filter__block-item">
                    <input className="visually-hidden" type="checkbox" id="12-strings" name="12-strings" disabled />
                    <label htmlFor="12-strings">12</label>
                  </div>
                </fieldset>
                <button className="catalog-filter__reset-btn button button--black-border button--medium" type="reset">Очистить</button>
              </form>
              <div className="catalog-sort">
                <h2 className="catalog-sort__title">Сортировать:</h2>
                <div className="catalog-sort__type">
                  <button className="catalog-sort__type-button catalog-sort__type-button--active" aria-label="по цене">по дате</button>
                  <button className="catalog-sort__type-button" aria-label="по цене">по цене</button>
                  <button className="catalog-sort__type-button" aria-label="по популярности">по популярности</button>
                </div>
                <div className="catalog-sort__order">
                  <button className="catalog-sort__order-button catalog-sort__order-button--up" aria-label="По возрастанию"></button>
                  <button className="catalog-sort__order-button catalog-sort__order-button--down catalog-sort__order-button--active" aria-label="По убыванию"></button>
                </div>
              </div>
              <CatalogCards products={products}/>
            </div>
            <button onClick={goAddProductScreen} className="button product-list__button button--red button--big">Добавить новый товар</button>
            <div className="pagination product-list__pagination">
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