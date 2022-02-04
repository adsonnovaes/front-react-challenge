import { ReactNode } from 'react';
import ReactModal from 'react-modal';

import { IoCloseSharp } from 'react-icons/io5';

import { Omdb } from '../../services/resources/omdb';
import './styles.scss';

type ModalParams = {
  data: Omdb;
  isOpen: boolean;
  setVisibility: () => void,
  children?: ReactNode,
}

ReactModal.setAppElement('#root');
export function Modal({
  data,
  isOpen,
  setVisibility,
  children
}: ModalParams) {

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={setVisibility}
      className="Modal"
    >
      <div className="header-container">
        <div id="header-title">
          <h2>{children}</h2>
          <span>{data.Released}</span>
        </div>

        <div id="icon-closer">
          <IoCloseSharp
            color="var(--green)"
            size={24}
            onClick={setVisibility}
          />
        </div>
      </div>
      <div className="footer-container">
        <div id="info-omdb-container">
          <div id="left-container">
            <span>
              <strong>
                Ano de Lançamento:
              </strong>
              {data.Released}
            </span>
            <br />
            <span>
              <strong>
                Classificação:
              </strong>
              {data.Rated}
            </span>
            <br />
            <span>
              <strong>
                Duração:
              </strong>
              {data.Runtime}
            </span>
            <br />
            <span>
              <strong>
                Gênero:
              </strong>
              {data.Genre}
            </span>
          </div>

          <div id="right-container">
            <span>
              <strong>
                Diretor:
              </strong>
              {data.Director}
            </span>
            <br />
            <span>
              <strong>
                Roteiro:
              </strong>
              {data.Writer}
            </span>
            <br />
            <span>
              <strong>
                Premiações:
              </strong>
              {data.Awards}
            </span>
          </div>
        </div>
        <br />
        <div id="description">
          <span>
            <strong>
              Descrição:
            </strong>{data.Plot}
          </span>
        </div>

      </div>
    </ReactModal>
  );
}