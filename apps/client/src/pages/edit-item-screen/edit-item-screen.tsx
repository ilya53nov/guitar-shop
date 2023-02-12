import { useParams } from 'react-router-dom';
import EditItemSubmitForm from '../../components/edit-item-submit-form/edit-item-submit-form';
import PageFooter from '../../components/page-footer/page-footer'
import { useGetProductQuery } from '../../store/api';

export default function EditItemScreen():JSX.Element {
  const params = useParams<string>();

  const productId = params.id;


  const {data: product, isSuccess} = useGetProductQuery(productId!);

  if (!isSuccess) {
    return(<div>not success</div>)
  }

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
        <section className="edit-item">
          <div className="container">
            <h1 className="edit-item__title">{product.title}</h1>
            <ul className="breadcrumbs">
              <li className="breadcrumbs__item"><a className="link" href="./main.html">Каталог</a>
              </li>
              <li className="breadcrumbs__item"><a className="link" href="./main.html">Товары</a>
              </li>
              <li className="breadcrumbs__item"><a className="link">{product.title}</a>
              </li>
            </ul>
            <EditItemSubmitForm product={product}/>
          </div>
        </section>
      </main>
      <PageFooter />
    </div>    
  );
}