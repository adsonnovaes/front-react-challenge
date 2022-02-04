import { useState } from 'react';
import useProgress from '../../hooks/useProgress';
import { Button } from '../Button';
import { Modal } from '../Modal';

import './styles.scss';

export function BannerClass() {

  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const { classOmdb } = useProgress();

  return (
    <div id="banner-container">
      <div id="teste" />

      <img
        src={classOmdb.Poster}
        alt="Banner do Curso"
      />


      <div id="info-banner">
        <h2>{classOmdb.Title}</h2>

        <Button
          title="Ver Descrição"
          onClick={() => setIsVisibleModal(!isVisibleModal)}
        />
      </div>

      <Modal
        data={classOmdb}
        isOpen={isVisibleModal}
        setVisibility={() => {
          setIsVisibleModal(false)
        }}
      // handleConfirmed={() => handleDeleteCompany(idCompany)}
      >
        {classOmdb.Title}
      </Modal>
    </div>
  )
}