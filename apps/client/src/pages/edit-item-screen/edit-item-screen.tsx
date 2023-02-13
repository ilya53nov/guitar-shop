import { useParams } from 'react-router-dom';
import EditItemSubmitForm from '../../components/edit-item-submit-form/edit-item-submit-form';
import PageFooter from '../../components/page-footer/page-footer'
import PageHeader from '../../components/page-header/page-header';
import { useGetProductQuery } from '../../store/product-api';


export default function EditItemScreen():JSX.Element {
  const params = useParams<string>();

  const productId = params.id;


  const {data: product, isSuccess} = useGetProductQuery(productId!);

  if (!isSuccess) {
    return(<div>not success</div>)
  }

  return(
    <div className="wrapper">
      <PageHeader user={null} />
      <main className="page-content">
        <section className="edit-item">
          <div className="container">
            <h1 className="edit-item__title">{product.title}</h1>
            <ul className="breadcrumbs">
              <li className="breadcrumbs__item"><a className="link" href="./main.html">Каталог</a>
              </li>
              <li className="breadcrumbs__item"><a className="link" href="./main.html">Товары</a>
              </li>
              <li className="breadcrumbs__item"><a className="link">{product.title}</a>
              </li>
            </ul>
            <EditItemSubmitForm product={product}/>
          </div>
        </section>
      </main>
      <PageFooter />
    </div>    
  );
}