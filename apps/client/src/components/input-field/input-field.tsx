import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

export enum InputFieldEvent {
  Add = 'add',
  Edit = 'edit',
}

export enum TypeField {
  Input,
  TextArea
}

export type InputFieldProps = {
  typeField: TypeField,  
  description: string,
  className: string,
  value: string | number,
  type?: HTMLInputTypeAttribute,
  name: string,
  placeholder: string,
  readOnly: boolean;
  minLength?: number;
  maxLength?: number;
  onChange(evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void,
}

export type InputProps = {
  value: string | number;
  setValue(evt: ChangeEvent<HTMLInputElement>): void;
  inputFieldEvent: InputFieldEvent,
  description: string,
  typeField: TypeField,
}

export default function InputField({
  className,
  description,
  name,
  onChange,
  placeholder,
  type,
  value,
  readOnly,
  minLength,
  maxLength,
  typeField,
}: InputFieldProps):JSX.Element {

  return (
    <div className={className}>
    <label>
      <span>{description}</span>
      {typeField === TypeField.Input
      ?
      <input
        onChange={onChange}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        readOnly={readOnly}
        minLength={minLength}
        maxLength={maxLength}
      />
      :
      <textarea
        onChange={onChange}
        name={name}
        value={value}
        placeholder={placeholder}
        readOnly={readOnly}
      />    
    }          
    </label>
    <p>Заполните поле</p>
  </div>
  );
}



