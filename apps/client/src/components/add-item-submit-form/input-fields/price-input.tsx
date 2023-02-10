import InputField, { InputFieldProps, InputProps } from '../../input-field/input-field';

export default function PriceInput({setValue, value}: InputProps):JSX.Element {
  const inputFieldProps: InputFieldProps = {
    className: "custom-input add-item__form-input add-item__form-input--price is-placeholder",
    description: 'Введите цену товара',
    name: 'price',
    placeholder: 'Цена в формате 00 000',
    readOnly: false,
    type: 'number',
    value: value,
    onChange: setValue
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
