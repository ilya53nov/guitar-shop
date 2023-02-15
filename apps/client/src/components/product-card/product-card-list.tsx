import {ProductRdo} from '@project/core';
import ProductCard from './product-card';

type ProductsProps = {
  products: ProductRdo[];
  userId?: string;
}

export default function ProductCardList({products, userId}: ProductsProps):JSX.Element {
  const productList = products.map((product) => <ProductCard key={product.id} product={product} userId={userId} />);

  return(
    <div className="cards catalog__cards">
      {productList}
    </div>
  );
}
