import InputField, { InputFieldProps, InputProps } from '../input-field/input-field';

export default function DescriptionInput({setValue, value, description, inputFieldEvent, typeField}: InputProps):JSX.Element {
  const inputFieldProps: InputFieldProps = {
    className: `custom-textarea ${inputFieldEvent}-item__form-textarea`,
    description: description,
    name: 'description',
    placeholder: '',
    readOnly: false,
    value: value,
    onChange: setValue,
    typeField: typeField,
  }

  return (
    <InputField 
      description={inputFieldProps.description}
      className={inputFieldProps.className}
      name={inputFieldProps.name}
      onChange={inputFieldProps.onChange}
      placeholder={inputFieldProps.placeholder}
      value={inputFieldProps.value}
      readOnly={inputFieldProps.readOnly}
      typeField={typeField}
    />
  );
}
