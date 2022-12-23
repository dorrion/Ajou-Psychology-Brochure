import { useState } from 'react';
import * as S from './style';

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <S.ModalContainer>
      <S.ModalBtn onClick={openModalHandler}>
        {isOpen ? 'Opened !' : 'Open Modal'}
      </S.ModalBtn>
      {isOpen && (
        <S.ModalBackdrop onClick={openModalHandler}>
          <S.ModalView>
            <div onClick={openModalHandler}>&times;</div>
            <div>Hello World</div>
          </S.ModalView>
        </S.ModalBackdrop>
      )}
    </S.ModalContainer>
  );
}
