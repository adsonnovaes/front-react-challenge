import { ButtonHTMLAttributes } from "react";

import './styles.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <button
      id="button-description"
      {...rest}
    >
      {title}
    </button>
  );
}