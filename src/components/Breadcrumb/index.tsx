import { Link } from 'react-router-dom';
import './styles.scss';

export function Breadcrumb() {
  return (
    <div id="breadcrumb-container">
      <nav>
        <ol>
          <li>
            <Link to="/Academia" className="list-link">
              Academia
            </Link>
          </li>
          <li>
            <Link to="/Escola" className="list-link">
              Escola
            </Link>
          </li>
          <li>
            <Link to="/Programa-treino" className="list-link">
              Programa de Treino
            </Link>
          </li>
          <li>
            <Link to="/" className="list-link active" >
              Detalhes do curso
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}