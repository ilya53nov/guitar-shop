import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../constants/app-route.enum';
import AddItemScreen from '../../pages/add-item/add-item-screen';
import MainScreen from '../../pages/main-screen/main-screen';


function App(): JSX.Element {
  return (
    <Routes>
      
      <Route path={AppRoute.Main} element={<MainScreen/>} />
      <Route path={'/add-item'} element={<AddItemScreen/>} />

    </Routes>
  );
}

export default App;
