import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { BsCircleFill } from 'react-icons/bs';
import './styles.scss';
import { useState } from 'react';
import { InputRadio } from '../InputRadio';
import { Item } from '../../pages/Class';

type Props = {
  item: Item;
}

export function ItemLesson({ item }: Props) {

  return (
    <div id="item-container">
      <InputRadio
        steps={item.steps}
      />

      <div id="center-items">
        <div id="button-title">
          <span>{item.buttonTitle}</span>
          <Link to="/">{item.title}</Link>
        </div>

        <div id="steps-icon">
          <span>Passos {item.steps}</span>
          <FiChevronRight
            color="#a7a6a9"
            size={24}
          />
        </div>
      </div>

    </div>
  )
}