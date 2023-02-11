import { CreateProductDto } from '@project/core';
import { GuitarString, GuitarType } from '@project/shared-types';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { useAddImageMutation, useAddNewProductMutation } from '../../store/api';
import DescriptionInput from './input-fields/description-input';
import PriceInput from './input-fields/price-input';
import SkuInput from './input-fields/sku-input';
import TitleInput from './input-fields/title-input';

export default function AddItemSubmitForm():JSX.Element {
  const [addPost] = useAddNewProductMutation();
  const [addImage, data] = useAddImageMutation();

  const [title, setTitle] = useState('');
  const [sku, setSku] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [file, setFile] = useState<FormData>();

  const filePickerRef = useRef<HTMLInputElement | null>(null);

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
    formData.append('file', evt.target.files[0]);

    setFile(formData);
  }

  const onSubmit = async (createProductDto: CreateProductDto) => {
    await addPost(createProductDto);
  }
  
  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!file) {
      return;
    }

    const imagePath = await addImage(file);


    

    console.log(imagePath);
    console.log(data);

    onSubmit({
      article: sku,
      description: description,
      image: 'dsfdsfsdf',
      price: +price,
      stringCount: GuitarString.Four,
      title: title,
      type: GuitarType.Electro,
    })
  }



  return (
    <form className="add-item__form" action="#" onSubmit={handleSubmit}>
      <div className="add-item__form-left">
        <div className="edit-item-image add-item__form-image">
          <div className="edit-item-image__image-wrap">
            <img src={imageUrl} />
            
          </div>
          <input className='visually-hidden' type='file' ref={filePickerRef} onChange={handleChange} />

          <div className="edit-item-image__btn-wrap">
            <button onClick={handleClick} className="button button--small button--black-border edit-item-image__btn">Добавить
            </button>
            <button className="button button--small button--black-border edit-item-image__btn">Удалить</button>
          </div>
        </div>
        <div className="input-radio add-item__form-radio"><span>Выберите тип товара</span>
          <input type="radio" id="guitar" name="item-type" value="guitar" />
          <label htmlFor="guitar">Акустическая гитара</label>
          <input type="radio" id="el-guitar" name="item-type" value="el-guitar" checked />
          <label htmlFor="el-guitar">Электрогитара</label>
          <input type="radio" id="ukulele" name="item-type" value="ukulele" />
          <label htmlFor="ukulele">Укулеле</label>
        </div>
        <div className="input-radio add-item__form-radio"><span>Количество струн</span>
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
      <div className="add-item__form-right">
        <div className="custom-input add-item__form-input">
          <label><span>Дата добавления товара</span>
            <input type="text" name="date" value="12.01.1111" placeholder="Дата в формате 00.00.0000" readOnly={false} />
          </label>
          <p>Заполните поле</p>
        </div>
        <TitleInput setValue={(evt) => setTitle(evt.target.value)} value={title} />
        <PriceInput setValue={(evt) => setPrice(evt.target.value)} value={price} />
        <SkuInput setValue={(evt) => setSku(evt.target.value)} value={sku} />
        <DescriptionInput setValue={(evt) => setDescription(evt.target.value)} value={description} />

      </div>
      <div className="add-item__form-buttons-wrap">
        <button className="button button--small add-item__form-button" type="submit">Сохранить изменения</button>
        <button className="button button--small add-item__form-button" type="button">Вернуться к списку товаров</button>
      </div>
    </form>    
  );
}