import { useEffect, useState } from 'react';
import useProgress from '../../hooks/useProgress';

import './styles.scss';

type Props = {
  steps: number;
  idLesson: string;
  idItem: string;
  completed: boolean;
}

export function InputRadio({
  steps,
  idLesson,
  idItem,
  completed
}: Props) {

  const [isChecked, setIsChecked] = useState(false);
  const { addingSteps, removeSteps } = useProgress();

  function handleStep() {
    if (isChecked) {
      removeSteps(steps, idLesson, idItem);
    } else {
      addingSteps(steps, idLesson, idItem);
    }
    setIsChecked(!isChecked)
  }

  useEffect(() => {
    if (completed) {
      setIsChecked(true);
    }
  }, [completed])

  return (
    <button id="button-check" onClick={handleStep} >
      <span
        className={isChecked ? "checkedBox" : ""}
      />
    </button>
  );
}