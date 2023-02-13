import { ProductRdo } from '@project/core';
import { useNavigate } from 'react-router-dom';
import { useDeleteProductMutation } from '../../store/product-api';

type CatalogItemProps = {
  product: ProductRdo
}

export default function CatalogItem({ product }: CatalogItemProps):JSX.Element {
  const [deleteProduct] = useDeleteProductMutation();

  const navigate = useNavigate();

  const handleClickDeleteProduct = async () => {
    await deleteProduct(product.id);
  }

  const handleClickEditProduct = () => {
    navigate(`/edit-item/${product.id}`);
  }

  return(
    <li className="catalog-item">
      <div className="catalog-item__data"><img src={product.image} srcSet={product.image} width="36" height="93" alt="Картинка гитары" />
        <div className="catalog-item__data-wrapper">
          <p className="catalog-item__data-title">{product.title}</p>
          <div className="rate catalog-item__data-rate">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-full-star"></use>
            </svg>
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-full-star"></use>
            </svg>
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-full-star"></use>
            </svg>
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-full-star"></use>
            </svg>
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-star"></use>
            </svg>
            <p className="visually-hidden">Оценка: Хорошо</p>
          </div>
          <p className="catalog-item__data-date">Дата добавления {product.createdAt.toLocaleString()}</p>
          <p className="catalog-item__data-price">{product.price.toLocaleString()} ₽</p>
        </div>
      </div>
      <div className="catalog-item__buttons">
        <button onClick={handleClickEditProduct} className="button button--small button--black-border" aria-label="Редактировать товар">Редактировать</button>
        <button onClick={handleClickDeleteProduct} className="button button--small button--black-border" type="submit" aria-label="Удалить товар">Удалить</button>
      </div>
    </li>
  );
}