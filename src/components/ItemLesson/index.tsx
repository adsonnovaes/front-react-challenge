import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import { InputRadio } from '../InputRadio';
import { Item } from '../../pages/Class';

import './styles.scss';

type Props = {
  item: Item;
  idLesson: string;
}

export function ItemLesson({ item, idLesson }: Props) {

  return (
    <div id="item-container">
      <InputRadio
        steps={item.steps}
        idLesson={idLesson}
        idItem={item.id}
        completed={item.completed}
      />

      <div id="center-items">
        <div id="button-title">
          <span>{item.buttonTitle}</span>
          <Link to="/page-white">{item.title}</Link>
        </div>

        <div id="steps-icon">
          <span>{item.steps} Passos</span>
          <FiChevronRight
            color="#a7a6a9"
            size={24}
          />
        </div>
      </div>

    </div>
  )
}