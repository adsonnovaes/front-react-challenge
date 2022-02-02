import { Button } from '../Button';

import './styles.scss';

type Props = {
  urlImg: string;
  title: string;
}

export function BannerClass({ urlImg, title }: Props) {
  return (
    <div id="banner-container">
      <img
        src={urlImg}
        alt="Banner do Curso"
      />

      <div id="info-banner">
        <h2>{title}</h2>

        <Button
          title="Ver Descrição"
        />
      </div>
    </div>
  )
}