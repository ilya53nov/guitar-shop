import {ProductRdo} from '@project/core';
import { ClientRoute } from '@project/shared-types';
import { useNavigate } from 'react-router-dom';
import { useAddProductToCartMutation } from '../../store/user-api';
import ProductCardRate from '../product-card-rate/product-card-rate';

export type ProductProps = {
  product: ProductRdo;
  userId?: string;
}

export default function ProductCard({product, userId}: ProductProps):JSX.Element {
  const navigate = useNavigate();

  const [addProductToCart] = useAddProductToCartMutation();

  const goProductScreen = (id: string) => navigate(`${ClientRoute.Product}/${id}`) ;
  const goCartScreen = () => navigate(ClientRoute.Cart) ;

  const handleClickDetail = () => {
    goProductScreen(product.id);
  }

  const handleClickCart = () => {
    goCartScreen();
  }

  const handleClickBuyProduct = () => {
    addProductToCart(product.id);
  }

  return(
    <div className="product-card"><img src={product.image} srcSet={product.image} width="75" height="190" alt={product.title} />
      <div className="product-card__info">
        <ProductCardRate rating={product.rating} />
        <p className="product-card__title">{product.title}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{product.price.toLocaleString()} ₽</p>
      </div>
      <div className="product-card__buttons">
        <button onClick={handleClickDetail} className="button button--mini" >Подробнее</button>
        {product.cart && product.cart.userId === userId
        ? <button onClick={handleClickCart} className="button button--red-border button--mini button--in-cart">В Корзине</button>
        : <button onClick={handleClickBuyProduct} className="button button--red button--mini button--add-to-cart">Купить</button>      
        }       
        
      </div>
    </div>
  );
}
