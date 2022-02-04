import { LessonProps } from '../../pages/Class';
import { ItemLesson } from '../ItemLesson';

import './styles.scss';

type Props = {
  data: LessonProps[];
}

export function LessonCardList({ data }: Props) {

  return (
    <>
      {data.map(lesson => (
        <details className="collapse" key={lesson.id}>
          <summary className="title">
            {lesson.title}
          </summary>
          {lesson.items.map(item => (
            <ItemLesson
              key={item.id}
              item={item}
            />
          ))}
        </details>
      ))}
    </>
  )
}