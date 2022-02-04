import { useState } from 'react';
import useProgress from '../../hooks/useProgress';
import './styles.scss';

type Props = {
  steps: number;
}

export function InputRadio({ steps }: Props) {

  const [isChecked, setIsChecked] = useState(false);
  const { addingSteps, removeSteps } = useProgress();

  function handleStep() {
    if (isChecked) {
      removeSteps(steps);
    } else {
      addingSteps(steps);
    }
    setIsChecked(!isChecked)
  }

  return (
    <button id="button-check" onClick={handleStep} >
      <span
        className={isChecked ? "checkedBox" : ""}
      />
    </button>
  );
}