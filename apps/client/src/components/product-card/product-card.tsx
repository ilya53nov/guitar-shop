import {ProductRdo} from '@project/core';
import { ClientRoute } from '@project/shared-types';
import { useNavigate } from 'react-router-dom';
import ProductCardRate from '../product-card-rate/product-card-rate';

type ProductProps = {
  product: ProductRdo;
}

export default function ProductCard({product}: ProductProps):JSX.Element {
  const navigate = useNavigate();

  const goProductScreen = (id: string) => navigate(`${ClientRoute.Product}/${id}`) ;

  const handleClick = () => {
    goProductScreen(product.id);
  }

  return(
    <div className="product-card"><img src={product.image} srcSet={product.image} width="75" height="190" alt={product.title} />
      <div className="product-card__info">
        <ProductCardRate rating={product.rating} />
        <p className="product-card__title">{product.title}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{product.price.toLocaleString()} ₽</p>
      </div>
      <div className="product-card__buttons"><button onClick={handleClick} className="button button--mini" >Подробнее</button><a className="button button--red-border button--mini button--in-cart" href="#">В Корзине</a>
      </div>
    </div>
  );
}
