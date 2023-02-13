import { CreateProductDto } from "@project/core";
import { GuitarString, GuitarType } from "@project/shared-types";
import { FormEvent } from "react";
import { async } from "rxjs";
import AddItemSubmitForm from '../../components/add-item-submit-form/add-item-submit-form';
import PageFooter from '../../components/page-footer/page-footer';
import PageHeader from "../../components/page-header/page-header";
import { useAddNewProductMutation } from "../../store/api";

export default function AddItemScreen():JSX.Element {

  return (
    <div className="wrapper">
      <PageHeader user={null} />
      <main className="page-content">
        <section className="add-item">
          <div className="container">
            <h1 className="add-item__title">Новый товар</h1>
            <ul className="breadcrumbs">
              <li className="breadcrumbs__item"><a className="link" href="./main.html">Каталог</a>
              </li>
              <li className="breadcrumbs__item"><a className="link" href="./main.html">Товары</a>
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