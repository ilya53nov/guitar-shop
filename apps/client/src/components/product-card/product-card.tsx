import {ProductRdo} from '@project/core';
import ProductCardRate from '../product-card-rate/product-card-rate';

type ProductProps = {
  product: ProductRdo;
}

export default function ProductCard({product}: ProductProps):JSX.Element {

  return(
    <div className="product-card"><img src="src/assets/img/content/catalog-product-1.png" srcSet="src/assets/img/content/catalog-product-1@2x.png 2x" width="75" height="190" alt={product.title} />
      <div className="product-card__info">
        <ProductCardRate rating={product.rating} />
        <p className="product-card__title">{product.title}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{product.price.toLocaleString()} ₽</p>
      </div>
      <div className="product-card__buttons"><a className="button button--mini" href="#">Подробнее</a><a className="button button--red-border button--mini button--in-cart" href="#">В Корзине</a>
      </div>
    </div>
  );
}
