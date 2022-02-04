import { useState } from 'react';
import './styles.scss';

export function InputRadio() {

  const [isChecked, setIsChecked] = useState(false);

  return (
    <button id="button-check" onClick={() => setIsChecked(!isChecked)} >
      <span
        className={isChecked ? "checkedBox" : ""}
      />
    </button>
  );
}