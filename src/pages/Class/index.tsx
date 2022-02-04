import { useEffect, useState } from "react";

import { BannerClass } from "../../components/BannerClass";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Input } from "../../components/Input";
import { LessonCardList } from "../../components/LessonCardList";
import { NextActivity } from "../../components/NextActivity";
import { NotFound } from "../../components/NotFound";
import { ProgressBar } from "../../components/ProgressBar";

import db from '../../data/fakeData.json';

import './styles.scss';

export type Item = {
  id: string;
  buttonTitle: string;
  title: string;
  steps: number;
  completed: boolean;
}

export type LessonProps = {
  id: string;
  title: string;
  items: Item[];
}

export function Class() {
  const [data, setData] = useState<LessonProps[]>(db);
  const [search, setSearch] = useState('');

  useEffect(() => {
    let filtered: LessonProps[];

    if (search === "") {
      filtered = db;
    } else {
      let lowerSearch = search.toLowerCase();

      filtered = db.filter(lesson => {
        return lesson.title.toLowerCase().includes(lowerSearch);
      });
    }

    setData(filtered);
  }, [search]);

  return (
    <div id="container-class">
      <div className="header-title">
        <h1>Curso</h1>

        <Breadcrumb />
      </div>

      <BannerClass />

      <div id="progress-content">
        <span>Continuar de onde você parou</span>

        <ProgressBar />
      </div>

      <NextActivity />

      <div id="container-course">
        <div>
          <h2>Thilha do Curso</h2>
          <span>Veja em detalhes todos os conteudos que você irá aprender</span>
        </div>

        <Input
          placeholder="Pesquisar por curso"
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
      </div>

      {data.length <= 0
        ? <NotFound />
        : <LessonCardList
          data={data}
        />
      }
    </div>
  );
}