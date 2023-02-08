import React from 'react';
import { useProductsQuery } from 'src/store/api';

export default function ProductCard():JSX.Element {


  return(
    <div className="product-card"><img src="img/content/catalog-product-1.png" srcSet="img/content/catalog-product-1@2x.png 2x" width="75" height="190" alt="Честер Bass" />
      <div className="product-card__info">
        <div className="rate product-card__rate">
          <svg width="12" height="11" aria-hidden="true">
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use xlinkHref="#icon-star"></use>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use xlinkHref="#icon-star"></use>
          </svg>
          <p className="visually-hidden">Рейтинг: Хорошо</p>
          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>15</p>
        </div>
        <p className="product-card__title">Честер Bass</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>17 500 ₽</p>
      </div>
      <div className="product-card__buttons"><a className="button button--mini" href="#">Подробнее</a><a className="button button--red-border button--mini button--in-cart" href="#">В Корзине</a>
      </div>
    </div>
  );
}
