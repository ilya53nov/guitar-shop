import { ClientRoute } from '@project/shared-types';
import AddItemSubmitForm from '../../components/add-item-submit-form/add-item-submit-form';
import PageFooter from '../../components/page-footer/page-footer';
import PageHeader from "../../components/page-header/page-header";
import { useGetMeQuery } from '../../store/user-api';

export default function AddItemScreen():JSX.Element {
  const {data: userData} = useGetMeQuery({});

  return (
    <div className="wrapper">
      <PageHeader user={userData} />
      <main className="page-content">
        <section className="add-item">
          <div className="container">
            <h1 className="add-item__title">Новый товар</h1>
            <ul className="breadcrumbs">
              <li className="breadcrumbs__item"><a className="link" href={ClientRoute.Main}>Каталог</a>
              </li>
              <li className="breadcrumbs__item"><a className="link" href={ClientRoute.Products}>Товары</a>
              </li>
              <li className="breadcrumbs__item"><a className="link">Новый товар</a>
              </li>
            </ul>
            <AddItemSubmitForm />
          </div>
        </section>
      </main>
      <PageFooter />
    </div>
  );
}
