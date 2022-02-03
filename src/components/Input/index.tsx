import { InputHTMLAttributes } from 'react';
import './styles.scss';

type Props = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...rest }: Props) {
  return (
    <input
      {...rest}
    />
  )
}