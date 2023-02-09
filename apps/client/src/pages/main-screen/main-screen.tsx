import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import CatalogSort from '../../components/catalog-sort/catalog-sort';
import PageFooter from '../../components/page-footer/page-footer';
import PageHeader from '../../components/page-header/page-header';
import PaginationList from '../../components/pagination/pagination-list';
import ProductCard from '../../components/product-card/product-card';
import { useProductsQuery } from '../../store/api';

export default function MainScreen():JSX.Element {
  const {data,isLoading} = useProductsQuery({});

  console.log(data);

  return(
    <>
      <PageHeader />
      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger">Каталог гитар</h1>
          <ul className="breadcrumbs page-content__breadcrumbs">
            <li className="breadcrumbs__item"><a className="link" href="./main.html">Главная</a>
            </li>
            <li className="breadcrumbs__item"><a className="link">Каталог</a>
            </li>
          </ul>
          <div className="catalog">
            <CatalogFilter />
            <CatalogSort />
            <div className="cards catalog__cards">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>

            <PaginationList />
          </div>
        </div>
      </main>  

        <PageFooter />    
    </>

  );
}