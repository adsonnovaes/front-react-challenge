import { BannerClass } from "../../components/BannerClass";
import { ProgressBar } from "../../components/ProgressBar";

import './styles.scss';

export function Class() {

  const urlImg = 'https://lupadigital.info/wp-content/uploads/2018/05/imagens-gratis.jpg';

  return (
    <div id="container-class">
      <div className="header-title">
        <h1>Curso</h1>

        <h3>breadcrumb</h3>
      </div>

      <BannerClass
        urlImg={urlImg}
        title="Ações interpessoais no atendimento de escritorio"
      />

      <div>
        <span>Continuar de onde você parou</span>

        <ProgressBar/>
      </div>
    </div>

  );
}