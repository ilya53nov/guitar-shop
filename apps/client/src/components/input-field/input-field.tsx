import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

export type InputFieldProps = {
  className: string,
  value: string | number,
  type: HTMLInputTypeAttribute,
  name: string,
  placeholder: string,
  description: string,
  readOnly: boolean;
  minLength?: number;
  maxLength?: number;
  onChange(evt: ChangeEvent<HTMLInputElement>): void,
}

export type InputProps = {
  value: string | number;
  setValue(evt: ChangeEvent<HTMLInputElement>): void;
}

export default function InputField({className, description, name, onChange, placeholder, type, value, readOnly, minLength, maxLength}: InputFieldProps):JSX.Element {
  return (
    <div className={className}>
    <label><span>{description}</span>
      <input onChange={onChange} type={type} name={name} value={value} placeholder={placeholder} readOnly={readOnly} minLength={minLength} maxLength={maxLength}/>
    </label>
    <p>Заполните поле</p>
  </div>
  );
}



