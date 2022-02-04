import { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { classCurrent, Omdb } from '../services/resources/omdb';

type ProgressContextData = {
  steps: number;
  progress: number;
  classOmdb: Omdb;
  addingSteps: (steps: number) => void;
}

export const ProgressContext = createContext({} as ProgressContextData);

type ProgressContextProviderProps = {
  children: ReactNode;
}

export function ProgressContextProvider({ children }: ProgressContextProviderProps) {

  const [steps, setSteps] = useState(0);
  const [progress, setProgress] = useState(0);
  const [classOmdb, setClassOmdb] = useState<Omdb>({} as Omdb)

  async function getClass() {
    const {
      Poster,
      Title,
      Year,
      Rated,
      Released,
      Runtime,
      Genre,
      Director,
      Writer,
      Plot,
      Awards
    } = await classCurrent();

    setClassOmdb({
      Poster,
      Title,
      Year,
      Rated,
      Released,
      Runtime,
      Genre,
      Director,
      Writer,
      Plot,
      Awards,
    });
  }

  useEffect(() => {
    getClass();
  }, []);

  function addingSteps(step: number) {
    const newSteps = steps + step;
    setSteps(newSteps);
  }

  return (
    <ProgressContext.Provider
      value={{ steps, progress, classOmdb, addingSteps }}
    >
      {children}
    </ProgressContext.Provider>
  )

}