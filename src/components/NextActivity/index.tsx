import './styles.scss';

import { FaBookReader } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useProgress from '../../hooks/useProgress';

export function NextActivity() {

  const { steps } = useProgress();

  return (
    <div id="container-activity">
      <div id="content-title-icon">
        <div id="icon-container">
          <FaBookReader
            color='#fff'
            size={24}
          />
        </div>

        <div id="title-activity">
          <h2>Próxima atividade</h2>
          <span>{steps} passo(s)</span>
        </div>
      </div>

      <Link to="/page-white">
        <FiChevronRight
          color='#fff'
          size={24}
        />
      </Link>
    </div>
  );
}