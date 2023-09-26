import {
  ChangeEvent,
  InputHTMLAttributes,
  OptionHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import { TClassValueProps } from './react';
import { UseFormRegister } from 'react-hook-form';

export type TInputElementUnion = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
export type TChangeEvent = ChangeEvent<TInputElementUnion>;
export type TChangeHandler = (event: TChangeEvent) => void;
export type TChangeHandlerProps = { onChange: TChangeHandler };
export type TRegisterProps = { register: UseFormRegister<any> };
export type TNameValue = {
  name: string;
  value: string;
};

export type TInputControlProps = (TChangeHandlerProps | TRegisterProps) & {
  disabled?: boolean;
} & TClassValueProps;

export type TInputProps<N extends string = string> = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'name'
> &
  TClassValueProps & {
    name: N;
    label?: string;
  };
export type TTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & TClassValueProps;
export type TSelectProps = SelectHTMLAttributes<HTMLSelectElement> & TClassValueProps;
export type TOptionProps = OptionHTMLAttributes<HTMLOptionElement>;
