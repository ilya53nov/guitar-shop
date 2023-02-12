import InputField, { InputFieldProps, InputProps } from '../input-field/input-field';

export default function TitleInput({setValue, value, description, inputFieldEvent, typeField}: InputProps):JSX.Element {
  const inputFieldProps: InputFieldProps = {
    className: `custom-input ${inputFieldEvent}-item__form-input`,
    description: description,
    name: 'title',
    placeholder: 'Наименование',
    readOnly: false,
    type: 'text',
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
