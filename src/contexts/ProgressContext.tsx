import { createContext, useState, ReactNode, useContext } from 'react';

type ProgressContextData = {
  steps: number;
  progress: number;
}

export const ProgressContext = createContext({} as ProgressContextData);

type ProgressContextProviderProps = {
  children: ReactNode;
}

export function ProgressContextProvider({ children }: ProgressContextProviderProps) {

  const [steps, setSteps] = useState(0);
  const [progress, setProgress] = useState(0);

  return (
    <ProgressContext.Provider
      value={{ steps, progress }}
    >
      {children}
    </ProgressContext.Provider>
  )

}