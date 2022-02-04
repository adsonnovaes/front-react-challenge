import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { BsCircleFill } from 'react-icons/bs';
import './styles.scss';
import { useState } from 'react';
import { InputRadio } from '../InputRadio';

export function ItemLesson() {

  return (
    <div id="item-container">
      <InputRadio />

      <div id="center-items">
        <div id="button-title">
          <span>Leitura</span>
          <Link to="/">Como funciona o em Marketin digital</Link>
        </div>

        <div id="steps-icon">
          <span>Passos 100</span>
          <FiChevronRight
            color="#a7a6a9"
            size={24}
          />
        </div>
      </div>

    </div>
  )
}