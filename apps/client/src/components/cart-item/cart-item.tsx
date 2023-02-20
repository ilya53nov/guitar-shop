import { useEffect, useRef, useState } from "react";
import { useGetProductQuery } from "../../store/product-api";
import { useDecrementProductCountMutation, useDeleteProductFromCartMutation, useIncrementProductCountMutation } from "../../store/user-api";

type CartItemProps = {
  productId: string;
  onCartProductIncrement: (value: number) => void;
  onCartProductDecrement: (value: number) => void;
}

export default function CartItem({productId, onCartProductDecrement, onCartProductIncrement}: CartItemProps):JSX.Element {
  const {data: product, isSuccess} = useGetProductQuery(productId);
  const [count, setCount] = useState(1);
  const inputValueRef = useRef<HTMLInputElement | null>(null);

  const [deleteProductFromCart] = useDeleteProductFromCartMutation();

  const [decrementProductCount] = useDecrementProductCountMutation();
  const [incrementProductCount] = useIncrementProductCountMutation();

  useEffect(() => {

    if (isSuccess) {
      setCount(product.cart.count);
      handleInitSumCart();
      return
    }
  }, [setCount, isSuccess, product])

  if (!isSuccess) {
    return(<div>not success</div>)
  } 

  //incrementSumCart(product.price); 

  const handleDeleteProduct = () => {
    deleteProductFromCart(product.id);
  }

  const handleInitSumCart = () => onCartProductIncrement(product.price * product.cart.count);

  const handleIncrementProductCount = () => {
    if (count > 0) {
      incrementProductCount(product.id).unwrap();
      setCount(count + 1);    
      onCartProductIncrement(product.price); 
    }
  }

  const handleDecrementProductCount = () => {
    if (count > 1) {    
      decrementProductCount(product.id);
      setCount(count - 1);
      onCartProductDecrement(product.price);
    }
  }

  return(
    <div className="cart-item">
      <button onClick={handleDeleteProduct} className="cart-item__close-button button-cross" type="button" aria-label="Удалить"><span className="button-cross__icon"></span><span className="cart-item__close-button-interactive-area"></span>
      </button>
      <div className="cart-item__image"><img src={product.image} srcSet={product.image} width="55" height="130" alt={product.title} />
      </div>
      <div className="product-info cart-item__info">
        <p className="product-info__title">{product.title}</p>
        <p className="product-info__info">Артикул: {product.article}</p>
        <p className="product-info__info">{product.type}, {product.stringCount} струнная</p>
      </div>
      <div className="cart-item__price">{product.price.toLocaleString()} ₽</div>
      <div className="quantity cart-item__quantity">
        <button onClick={handleDecrementProductCount} className="quantity__button" aria-label="Уменьшить количество">
          <svg width="8" height="8" aria-hidden="true">
            <use xlinkHref="#icon-minus"></use>
          </svg>
        </button>
        <input ref={inputValueRef} value={count} className="quantity__input" type="number" placeholder="1" id="1-count" name="1-count" min="1" max="99" />
        <button onClick={handleIncrementProductCount} className="quantity__button" aria-label="Увеличить количество">
          <svg width="8" height="8" aria-hidden="true">
            <use xlinkHref="#icon-plus"></use>
          </svg>
        </button>
      </div>
      <div className="cart-item__price-total">{(count * product.price).toLocaleString()} ₽</div>
    </div>
  );
}
