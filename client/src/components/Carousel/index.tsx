import * as S from './style';

const index = () => {
  return (
    <S.CarouselContainer>
      <S.CarouselBox className='school' />
      <S.CarouselBox className='company' />
      <S.CarouselBox className='abroad' />
    </S.CarouselContainer>
  );
};

export default index;
