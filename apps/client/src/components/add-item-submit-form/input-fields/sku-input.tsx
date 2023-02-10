import InputField, { InputFieldProps, InputProps } from '../../input-field/input-field';

export default function SkuInput({setValue, value}: InputProps):JSX.Element {
  const inputFieldProps: InputFieldProps = {
    className: "custom-input add-item__form-input",
    description: 'Введите артикул товара',
    name: 'sku',
    placeholder: 'Артикул товара',
    readOnly: false,
    type: 'text',
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
