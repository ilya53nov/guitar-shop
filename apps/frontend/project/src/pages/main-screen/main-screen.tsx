import React from 'react';
import CatalogFilter from 'src/components/catalog-filter/catalog-filter';
import CatalogSort from 'src/components/catalog-sort/catalog-sort';
import PageFooter from 'src/components/page-footer/page-footer';
import PageHeader from 'src/components/page-header/page-header';
import PaginationList from 'src/components/pagination/pagination-list';
import ProductCard from 'src/components/product-card/product-card';

export default function MainScreen():JSX.Element {
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