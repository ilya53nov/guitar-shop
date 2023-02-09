import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../constants/app-route.enum';
import MainScreen from '../../pages/main-screen/main-screen';


function App(): JSX.Element {
  return (
    <Routes>
      
      <Route path={AppRoute.Main} element={<MainScreen/>} />

    </Routes>
  );
}

export default App;
