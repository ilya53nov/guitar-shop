import { ChangeEvent } from 'react';

export type TextAreaFieldProps = {
  className: string,
  value: string | number,
  name: string,
  placeholder: string,
  description: string,
  readOnly: boolean;
  onChange(evt: ChangeEvent<HTMLTextAreaElement>): void,
}

export type TextAreaProps = {
  value: string | number;
  setValue(evt: ChangeEvent<HTMLTextAreaElement>): void;
}


export default function TextAreaField({className, description, name, onChange, placeholder, value, readOnly}: TextAreaFieldProps):JSX.Element {
  return (
    <div className={className}>
    <label><span>{description}</span>
      <textarea onChange={onChange}  name={name} value={value} placeholder={placeholder} readOnly={readOnly} />
    </label>
    <p>Заполните поле</p>
  </div>
  );
}