import { Link } from "react-router-dom";
import './styles.scss';

export function WhitePage() {
  return (
    <div id="container-page">
      <Link to="/" id="white-page">
        Voltar para página inicial
      </Link>
    </div>
  );
}