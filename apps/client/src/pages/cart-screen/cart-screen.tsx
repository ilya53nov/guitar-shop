import { useState } from 'react';
import CartItem from '../../components/cart-item/cart-item';
import PageFooter from '../../components/page-footer/page-footer';
import PageHeader from '../../components/page-header/page-header';
import { useGetMeQuery } from '../../store/user-api';

export default function CartScreen():JSX.Element {
  const {data: userData, isSuccess: isSuccessUser} = useGetMeQuery({});
  const [sumCart, setSumCart] = useState(0);

  const onCartProductIncrement = (value: number) => {
    setSumCart(sumCart + value);
  }

  const onCartProductDecrement = (value: number) => {
    setSumCart(sumCart - value);
  }

  if (!isSuccessUser) {
    return(<div>not success</div>)
  }

  const productsCart = userData.cart.map((item) => <CartItem onCartProductDecrement={onCartProductDecrement} onCartProductIncrement={onCartProductIncrement} productId={item.productId} key={item.productId} />);

  return(
    <div className="wrapper">
      <PageHeader user={userData} />
      <main className="page-content">
        <div className="container">
          <h1 className="title title--bigger page-content__title">Корзина</h1>
          <ul className="breadcrumbs page-content__breadcrumbs page-content__breadcrumbs--on-cart-page">
            <li className="breadcrumbs__item"><a className="link" href="./main.html">Главная</a>
            </li>
            <li className="breadcrumbs__item"><a className="link" href="./main.html">Каталог</a>
            </li>
            <li className="breadcrumbs__item"><a className="link">Корзина</a>
            </li>
          </ul>
          <div className="cart">
            {productsCart}
            <div className="cart__footer">
              <div className="cart__total-info">
                <p className="cart__total-item"><span className="cart__total-value-name">Всего:</span><span className="cart__total-value">{sumCart.toLocaleString()} ₽</span></p>
                <p className="cart__total-item"><span className="cart__total-value-name">К оплате:</span><span className="cart__total-value cart__total-value--payment">{sumCart.toLocaleString()} ₽</span></p>
                <button className="button button--red button--big cart__order-button">Оформить заказ</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <PageFooter />
    </div>    
  );
}