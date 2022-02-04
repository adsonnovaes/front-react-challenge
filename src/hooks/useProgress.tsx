import { useContext } from 'react';
import { ProgressContext } from '../contexts/ProgressContext';

const useProgress = () => {
  const context = useContext(ProgressContext);

  if (!context) {
    throw new Error('Nenhum contexto encontrado');
  }

  return context;
}

export default useProgress;