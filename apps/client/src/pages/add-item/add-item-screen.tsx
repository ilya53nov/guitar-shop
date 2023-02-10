import { CreateProductDto } from "@project/core";
import { GuitarString, GuitarType } from "@project/shared-types";
import { FormEvent } from "react";
import { async } from "rxjs";
import { useAddNewProductMutation } from "../../store/api";

export default function AddItemScreen():JSX.Element {
  const [addPost] = useAddNewProductMutation();

  const onSubmit = async (createProductDto: CreateProductDto) => {
    await addPost(createProductDto);
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      article: '24234322222sdfsd',
      description: 'dsfdsssdfdjgjhhggggggggggggggggggggggggggggggggjbbnbnmbjbjb',
      image: 'dsfdsfsdf',
      price: 1000,
      stringCount: GuitarString.Four,
      title: 'dsfdsdsfdsf',
      type: GuitarType.Electro,
    })
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
        <section className="add-item">
          <div className="container">
            <h1 className="add-item__title">Новый товар</h1>
            <ul className="breadcrumbs">
              <li className="breadcrumbs__item"><a className="link" href="./main.html">Каталог</a>
              </li>
              <li className="breadcrumbs__item"><a className="link" href="./main.html">Товары</a>
              </li>
              <li className="breadcrumbs__item"><a className="link">Новый товар</a>
              </li>
            </ul>
            <form className="add-item__form" action="#" onSubmit={handleSubmit}>
              <div className="add-item__form-left">
                <div className="edit-item-image add-item__form-image">
                  <div className="edit-item-image__image-wrap">
                  </div>
                  <div className="edit-item-image__btn-wrap">
                    <button className="button button--small button--black-border edit-item-image__btn">Добавить
                    </button>
                    <button className="button button--small button--black-border edit-item-image__btn">Удалить</button>
                  </div>
                </div>
                <div className="input-radio add-item__form-radio"><span>Выберите тип товара</span>
                  <input type="radio" id="guitar" name="item-type" value="guitar" />
                  <label htmlFor="guitar">Акустическая гитара</label>
                  <input type="radio" id="el-guitar" name="item-type" value="el-guitar" checked />
                  <label htmlFor="el-guitar">Электрогитара</label>
                  <input type="radio" id="ukulele" name="item-type" value="ukulele" />
                  <label htmlFor="ukulele">Укулеле</label>
                </div>
                <div className="input-radio add-item__form-radio"><span>Количество струн</span>
                  <input type="radio" id="string-qty-4" name="string-qty" value="4" checked />
                  <label htmlFor="string-qty-4">4</label>
                  <input type="radio" id="string-qty-6" name="string-qty" value="6" />
                  <label htmlFor="string-qty-6">6</label>
                  <input type="radio" id="string-qty-7" name="string-qty" value="7" />
                  <label htmlFor="string-qty-7">7</label>
                  <input type="radio" id="string-qty-12" name="string-qty" value="12" />
                  <label htmlFor="string-qty-12">12</label>
                </div>
              </div>
              <div className="add-item__form-right">
                <div className="custom-input add-item__form-input">
                  <label><span>Дата добавления товара</span>
                    <input type="text" name="date" value="" placeholder="Дата в формате 00.00.0000" readOnly />
                  </label>
                  <p>Заполните поле</p>
                </div>
                <div className="custom-input add-item__form-input">
                  <label><span>Введите наименование товара</span>
                    <input type="text" name="title" value="" placeholder="Наименование" />
                  </label>
                  <p>Заполните поле</p>
                </div>
                <div className="custom-input add-item__form-input add-item__form-input--price is-placeholder">
                  <label><span>Введите цену товара</span>
                    <input type="text" name="price" value="" placeholder="Цена в формате 00 000" />
                  </label>
                  <p>Заполните поле</p>
                </div>
                <div className="custom-input add-item__form-input">
                  <label><span>Введите артикул товара</span>
                    <input type="text" name="sku" value="" placeholder="Артикул товара" />
                  </label>
                  <p>Заполните поле</p>
                </div>
                <div className="custom-textarea add-item__form-textarea">
                  <label><span>Введите описание товара</span>
                    <textarea name="description" placeholder=""></textarea>
                  </label>
                  <p>Заполните поле</p>
                </div>
              </div>
              <div className="add-item__form-buttons-wrap">
                <button className="button button--small add-item__form-button" type="submit">Сохранить изменения</button>
                <button className="button button--small add-item__form-button" type="button">Вернуться к списку товаров</button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer__container">
            <div className="footer__logo-wrapper"><a className="footer__logo logo" href="main.html"><img className="logo__img" width="70" height="70" src="./img/svg/logo.svg" alt="Логотип" /></a>
              <div className="socials footer__socials">
                <ul className="socials__list">
                  <li className="socials-item"><a className="socials__link" href="https://www.skype.com/" aria-label="Мы в skype">
                      <svg className="socials__icon" width="24" height="24" aria-hidden="true">
                        <use xlinkHref="#icon-skype"></use>
                      </svg></a></li>
                  <li className="socials-item"><a className="socials__link" href="https://www.vsco.co/" aria-label="Мы в vsco">
                      <svg className="socials__icon" width="24" height="24" aria-hidden="true">
                        <use xlinkHref="#icon-vsco"></use>
                      </svg></a></li>
                  <li className="socials-item"><a className="socials__link" href="https://www.pinterest.com/" aria-label="Мы в pinterest">
                      <svg className="socials__icon" width="24" height="24" aria-hidden="true">
                        <use xlinkHref="#icon-pinterest"></use>
                      </svg></a></li>
                </ul>
              </div>
            </div>
            <section className="footer__nav-section footer__nav-section--about">
              <h2 className="footer__nav-title footer__nav-title--about">О нас</h2>
              <p className="footer__nav-text footer__nav-text--about">Магазин гитар, музыкальных <br /> инструментов и&nbsp;гитарная мастерская в&nbsp;Санкт-Петербурге.</p>
              <p className="footer__nav-text footer__nav-text--about">Все инструменты проверены, отстроены и&nbsp;доведены до&nbsp;идеала!</p>
            </section>
            <section className="footer__nav-section footer__nav-section--links">
              <h2 className="footer__nav-title footer__nav-title--links">Информация</h2>
              <ul className="footer__nav-list">
                <li className="footer__nav-list-item"><a className="link footer__nav-link" href="#top">Где купить?</a>
                </li>
                <li className="footer__nav-list-item"><a className="link footer__nav-link" href="#top">Блог</a>
                </li>
                <li className="footer__nav-list-item"><a className="link footer__nav-link" href="#top">Вопрос - ответ</a>
                </li>
                <li className="footer__nav-list-item"><a className="link footer__nav-link" href="#top">Возврат</a>
                </li>
                <li className="footer__nav-list-item"><a className="link footer__nav-link" href="#top">Сервис-центры</a>
                </li>
              </ul>
            </section>
            <section className="footer__nav-section footer__nav-section--contacts">
              <h2 className="footer__nav-title footer__nav-title--contacts">Контакты</h2>
              <p className="footer__nav-text footer__nav-text--address">г. Санкт-Петербург,<br /> м. Невский проспект, ул. Казанская 6.</p><a className="link footer__nav-link footer__nav-link--phone" href="tel:88125005050">8-812-500-50-50</a>
              <p className="footer__nav-text footer__nav-text--work-hours-title">Режим работы:<span className="footer__nav-text footer__nav-text--work-hours">с 11:00 до 20:00</span></p>
              <p className="footer__nav-text footer__nav-text--weekends">без выходных</p>
            </section>
          </div>
        </div>
      </footer>
    </div>
  );
}