import TextAreaField, { TextAreaFieldProps, TextAreaProps } from '../../input-field/text-area';

export default function DescriptionInput({setValue, value}: TextAreaProps):JSX.Element {
  const inputFieldProps: TextAreaFieldProps = {
    className: "custom-textarea add-item__form-textarea",
    description: 'Введите описание товара',
    name: 'description',
    placeholder: '',
    readOnly: false,
    value: value,
    onChange: setValue
  }

  return (
    <TextAreaField 
      description={inputFieldProps.description}
      className={inputFieldProps.className}
      name={inputFieldProps.name}
      onChange={inputFieldProps.onChange}
      placeholder={inputFieldProps.placeholder}
      value={inputFieldProps.value}
      readOnly={inputFieldProps.readOnly}
    />
  );
}
