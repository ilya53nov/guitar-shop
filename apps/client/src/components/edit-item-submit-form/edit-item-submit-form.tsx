import { ProductRdo, UpdateProductDto } from '@project/core';
import { ClientRoute, GuitarString, GuitarType, ParametrKey } from '@project/shared-types';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddImageMutation, useUpdateProductMutation } from '../../store/product-api';

import { InputFieldEvent, TypeField } from '../input-field/input-field';
import DescriptionInput from '../input-fields/description-input';
import PriceInput from '../input-fields/price-input';
import SkuInput from '../input-fields/sku-input';
import TitleInput from '../input-fields/title-input';

type EditItemSubmitFormProps = {
  product: ProductRdo,
}

export default function EditItemSubmitForm({product}: EditItemSubmitFormProps):JSX.Element {
  const [updateProduct] = useUpdateProductMutation();
  const [addImage] = useAddImageMutation();

  const [title, setTitle] = useState(product.title);
  const [sku, setSku] = useState(product.article);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [imageUrl, setImageUrl] = useState(product.image);
  const [file, setFile] = useState<FormData>();

  const filePickerRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const goProductsScreen = () => {
    navigate(ClientRoute.Products);
  }

  const handleClick = () => {
    filePickerRef.current?.click();
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();

    if (!evt.target.files) {
      return;
    }

    setImageUrl(URL.createObjectURL(evt.target.files[0]));
    
    const formData = new FormData();
    formData.append(ParametrKey.File, evt.target.files[0]);

    setFile(formData);
  }

  const onSubmit = async (updateProductDto: UpdateProductDto) => {
    await updateProduct({id: product.id, updateProductDto: updateProductDto});
  }
  
  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    let imagePath: string;

    file ? imagePath = await addImage(file).unwrap() : imagePath = imageUrl;

    onSubmit({
      article: sku,
      description: description,
      image: imagePath,
      price: +price,
      stringCount: GuitarString.Four,
      title: title,
      type: GuitarType.Electro,
    })
  }

  return (
    <form className="edit-item__form" action="#" onSubmit={handleSubmit}>
      <div className="edit-item__form-left">
        <div className="edit-item-image edit-item__form-image">
          <div className="edit-item-image__image-wrap">
            <img src={imageUrl} alt={title} />
            
          </div>
          <input className='visually-hidden' type='file' ref={filePickerRef} onChange={handleChange} />

          <div className="edit-item-image__btn-wrap">
            <button onClick={handleClick} className="button button--small button--black-border edit-item-image__btn">????????????????
            </button>
            <button className="button button--small button--black-border edit-item-image__btn">??????????????</button>
          </div>
        </div>
        <div className="input-radio edit-item__form-radio"><span>???????????????? ?????? ????????????</span>
          <input type="radio" id="guitar" name="item-type" value="guitar" />
          <label htmlFor="guitar">???????????????????????? ????????????</label>
          <input type="radio" id="el-guitar" name="item-type" value="el-guitar" checked />
          <label htmlFor="el-guitar">??????????????????????????</label>
          <input type="radio" id="ukulele" name="item-type" value="ukulele" />
          <label htmlFor="ukulele">??????????????</label>
        </div>
        <div className="input-radio edit-item__form-radio"><span>???????????????????? ??????????</span>
          <input type="radio" id="string-qty-4" name="string-qty" value="4" checked />
          <label htmlFor="string-qty-4">4</label>
          <input type="radio" id="string-qty-6" name="string-qty" value="6" />
          <label htmlFor="string-qty-6">6</label>
          <input type="radio" id="string-qty-7" name="string-qty" value="7" />
          <label htmlFor="string-qty-7">7</label>
          <input type="radio" id="string-qty-12" name="string-qty" value="12" />
          <label htmlFor="string-qty-12">12</label>
        </div>
      </div>
      <div className="edit-item__form-right">
        <div className="custom-input edit-item__form-input">
          <label><span>???????? ???????????????????? ????????????</span>
            <input type="text" name="date" value="12.01.1111" placeholder="???????? ?? ?????????????? 00.00.0000" readOnly={false} />
          </label>
          <p>?????????????????? ????????</p>
        </div>
        <TitleInput description='???????????????????????? ????????????' inputFieldEvent={InputFieldEvent.Edit} typeField={TypeField.Input} setValue={(evt) => setTitle(evt.target.value)} value={title} />
        <PriceInput description='???????? ????????????' inputFieldEvent={InputFieldEvent.Edit} typeField={TypeField.Input} setValue={(evt) => setPrice(+evt.target.value)} value={price} />
        <SkuInput description='?????????????? ????????????' inputFieldEvent={InputFieldEvent.Edit} typeField={TypeField.Input} setValue={(evt) => setSku(evt.target.value)} value={sku} />
        <DescriptionInput description='???????????????? ????????????' inputFieldEvent={InputFieldEvent.Edit} typeField={TypeField.TextArea} setValue={(evt) => setDescription(evt.target.value)} value={description} />

      </div>
      <div className="edit-item__form-buttons-wrap">
        <button className="button button--small add-item__form-button" type="submit">?????????????????? ??????????????????</button>
        <button onClick={goProductsScreen} className="button button--small add-item__form-button" type="button">?????????????????? ?? ???????????? ??????????????</button>
      </div>
    </form>    
  );
}