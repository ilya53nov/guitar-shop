import { ClientRoute, ParametrKey } from '@project/shared-types';
import { Route, Routes } from 'react-router-dom';
import AddItemScreen from '../../pages/add-item-screen/add-item-screen';
import CartScreen from '../../pages/cart-screen/cart-screen';
import EditItemScreen from '../../pages/edit-item-screen/edit-item-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import OrderScreen from '../../pages/order-screen/order-screen';
import OrdersScreen from '../../pages/orders-screen/orders-screen';
import ProductListScreen from '../../pages/product-list-screen/product-list-screen';
import ProductScreen from '../../pages/product-screen/product-screen';
import RegistrationScreen from '../../pages/registration-screen/registration-screen';


function App(): JSX.Element {
  return (
    <Routes>
      <Route path={ClientRoute.Registration} element={<RegistrationScreen/>} />
      <Route path={ClientRoute.Login} element={<LoginScreen/>} />     
      <Route path={ClientRoute.Main} element={<MainScreen/>} />
      <Route path={`${ClientRoute.Product}/${ParametrKey.Rout}`} element={<ProductScreen/>} />
      <Route path={ClientRoute.Cart} element={<CartScreen/>} />

      <Route path={ClientRoute.AddProduct} element={<AddItemScreen/>} />
      <Route path={ClientRoute.Products} element={<ProductListScreen/>} />
      <Route path={`${ClientRoute.EditProduct}/${ParametrKey.Rout}`} element={<EditItemScreen/>} />
      <Route path={ClientRoute.Order} element={<OrderScreen/>} />
      <Route path={ClientRoute.Orders} element={<OrdersScreen/>} />

      <Route path="*" element={<NotFoundScreen />} />

    </Routes>
  );
}

export default App;
