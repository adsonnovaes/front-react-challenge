import { ItemLesson } from '../ItemLesson';
import './styles.scss';

export function LessonCardList() {
  return (
    <>
      <details className="collapse">
        <summary className="title">
          Caracterização da cultura empresarial
        </summary>
        <ItemLesson/>
        <ItemLesson/>
        <ItemLesson/>
        <ItemLesson/>
      </details>

      <details className="collapse">
        <summary className="title">Titulo</summary>
        <div className="description">Texto</div>
      </details>

      <details className="collapse">
        <summary className="title">Titulo</summary>
        <div className="description">Texto</div>
      </details>
    </>
  )
}