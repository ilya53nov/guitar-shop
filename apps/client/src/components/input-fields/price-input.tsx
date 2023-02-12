import InputField, { InputFieldProps, InputProps } from '../input-field/input-field';

export default function PriceInput({setValue, value, inputFieldEvent, description, typeField}: InputProps):JSX.Element {
  const inputFieldProps: InputFieldProps = {
    className: `custom-input ${inputFieldEvent}-item__form-input ${inputFieldEvent}-item__form-input--price is-placeholder`,
    description: description,
    name: 'price',
    placeholder: 'Цена в формате 00 000',
    readOnly: false,
    type: 'number',
    value: value,
    onChange: setValue,
    typeField: typeField,
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
      typeField={typeField}
    />
  );
}
