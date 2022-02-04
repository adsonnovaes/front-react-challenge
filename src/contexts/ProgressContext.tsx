import { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { LessonProps } from '../pages/Class';
import { classCurrent, Omdb } from '../services/resources/omdb';

import db from '../data/fakeData.json';

type ProgressContextData = {
  steps: number;
  progress: number;
  classOmdb: Omdb;
  addingSteps: (steps: number, idLesson: string, idItem: string) => void;
  removeSteps: (steps: number, idLesson: string, idItem: string) => void;
}

export const ProgressContext = createContext({} as ProgressContextData);

type ProgressContextProviderProps = {
  children: ReactNode;
}

export function ProgressContextProvider({ children }: ProgressContextProviderProps) {

  const [steps, setSteps] = useState(0);
  const [progress, setProgress] = useState(0);
  const [classOmdb, setClassOmdb] = useState<Omdb>({} as Omdb);

  const [totalSteps, setTotalSteps] = useState(0);

  const data: LessonProps[] = db;

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

  useEffect(() => {
    var total = 0;

    for (var i = 0; i < data.length; i++) {
      let items = data[i].items;
      for (var x = 0; x < items.length; x++) {
        total += items[x].steps;
      }
    }

    setTotalSteps(total);
  }, [data]);

  function updateProgress(step: number) {
    let newProgress = Math.round((step / totalSteps) * 100);
    setProgress(newProgress);
  }

  function updateStatus(idLesson: string, idItem: string) {
    let indexLesson = db.findIndex(lesson => {
      return lesson.id === idLesson;
    });

    let indexItem = db[indexLesson].items.findIndex(item => {
      return item.id === idItem
    });
    
    db[indexLesson].items[indexItem].completed = !db[indexLesson].items[indexItem].completed;
  }

  function addingSteps(step: number, idLesson: string, idItem: string) {
    let newSteps = steps + step;
    updateProgress(newSteps);
    updateStatus(idLesson, idItem);
    setSteps(newSteps);
  }

  function removeSteps(step: number, idLesson: string, idItem: string) {
    let newSteps = steps - step;
    updateProgress(newSteps);
    updateStatus(idLesson, idItem);
    setSteps(newSteps);
  }

  return (
    <ProgressContext.Provider
      value={{ steps, progress, classOmdb, addingSteps, removeSteps }}
    >
      {children}
    </ProgressContext.Provider>
  )

}