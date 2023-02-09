import {ProductRdo} from '@project/core';
import ProductCard from './product-card';

type ProductsProps = {
  products: ProductRdo[];
}

export default function ProductCardList({products}: ProductsProps):JSX.Element {
  const productList = products.map((product) => <ProductCard key={product.id} product={product} />);

  return(
    <div className="cards catalog__cards">
      {productList}
    </div>
  );
}
