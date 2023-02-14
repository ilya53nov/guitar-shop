import { UserRdo } from '@project/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import CatalogSort from '../../components/catalog-sort/catalog-sort';
import PageFooter from '../../components/page-footer/page-footer';
import PageHeader from '../../components/page-header/page-header';
import PaginationList from '../../components/pagination/pagination-list';
import ProductCardList from '../../components/product-card/product-card-list';
import { useGetProductsQuery } from '../../store/product-api';
import { useGetMeQuery } from '../../store/user-api';



export default function MainScreen():JSX.Element {
  const {data: products, isSuccess} = useGetProductsQuery({});

  const {data: userData} = useGetMeQuery({});

  if (!isSuccess) {
    return(<div>not success</div>)
  }
  
  return(
    <>
      <PageHeader user={userData} />
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
            <ProductCardList products={products} />
            <PaginationList />
          </div>
        </div>
      </main>  

        <PageFooter />    
    </>

  );
}