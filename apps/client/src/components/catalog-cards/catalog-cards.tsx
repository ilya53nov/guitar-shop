import { ProductRdo } from '@project/core';
import CatalogItem from './catalog-item';

type CatalogCardsProps = {
  products: ProductRdo[];
}

export default function CatalogCards({ products }: CatalogCardsProps):JSX.Element {
  const productList = products.map((product) => <CatalogItem key={product.id} product={product} />);

  return (
    <div className="catalog-cards">
      <ul className="catalog-cards__list">
        {productList}
      </ul>
    </div>    
  );
}