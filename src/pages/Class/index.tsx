import { BannerClass } from "../../components/BannerClass";
import { Input } from "../../components/Input";
import { NextActivity } from "../../components/NextActivity";
import { ProgressBar } from "../../components/ProgressBar";

import './styles.scss';

export function Class() {

  const urlImg = 'https://1.bp.blogspot.com/-vmumZoALtkg/YUFnFPXFspI/AAAAAAABGjM/sZdA_IBhI0ULXfnyB9HPaB08xBiFf_-0QCLcBGAsYHQ/s2560/Papel%2Bde%2BParede%2BPC%2BTumblr.jpg';

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

      <div id="progress-content">
        <span>Continuar de onde você parou</span>

        <ProgressBar />
      </div>

      <NextActivity />

      <div id="container-course">
        <div>
          <h2>Thilha do Curso</h2>
          <span>Veja em detalhes todos os conteudos que você irá aprender</span>
        </div>

        <Input 
          placeholder="Pesquisar por curso"
        />
      </div>
    </div>

  );
}