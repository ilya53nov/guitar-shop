import { ClientRoute } from '@project/shared-types';
import { useNavigate } from 'react-router-dom';
import PageFooter from '../../components/page-footer/page-footer';
import PageHeader from '../../components/page-header/page-header';

export default function NotFoundScreen():JSX.Element {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(ClientRoute.Main);
  }

  return(
    <div className="wrapper">
      <PageHeader user={undefined} />
      <main className="page-content">
        <div className="container">
          <section className="error">
            <h1 className="error__title">404</h1><span className="error__subtitle">Страница не найдена.</span>
            <p className="error__text"> Возможно, страница была удалена или<br />её вовсе не существовало.</p>
            <button onClick={onClick} className="button button__error button--small button--black-border">Продолжить покупки</button>
          </section>
        </div>
      </main>
      <PageFooter />
    </div>    
  );
}