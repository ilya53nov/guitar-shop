import { ProductValidation } from '@project/core';
import InputField, { InputFieldProps, InputProps } from '../../input-field/input-field';

export default function TitleInput({setValue, value}: InputProps):JSX.Element {
  const inputFieldProps: InputFieldProps = {
    className: "custom-input add-item__form-input",
    description: 'Введите наименование товара',
    name: 'title',
    placeholder: 'Наименование',
    readOnly: false,
    type: 'text',
    value: value,
    onChange: setValue,
  }

  return (
    <InputField 
      description={inputFieldProps.description}
      className={inputFieldProps.className}
      type={inputFieldProps.type}
      name={inputFieldProps.name}
      onChange={inputFieldProps.onChange}
      placeholder={inputFieldProps.placeholder}
      value={inputFieldProps.value}
      readOnly={inputFieldProps.readOnly}
      
    />
  );
}
