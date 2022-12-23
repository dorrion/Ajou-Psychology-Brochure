import * as S from './style';
import { Arrow } from 'assets/icon';
import Potato from 'assets/icon/Potato.svg';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  return (
    <>
      <S.PotatoContainer>
        <S.IntroBox>
          <S.PotatoIntro>구르는 감자단 소개</S.PotatoIntro>
          <S.PotatoSub>
            프로젝트 사용 설명 및 팀 소개{' '}
            <Arrow onClick={() => navigate('/Introduce')} />
          </S.PotatoSub>
        </S.IntroBox>
        <S.ImgBox className='s116 righttop downtoup' src={Potato} />
        <S.PotatoBox className='downtoup'>
          <S.ImgBox className='s158' src={Potato} />
          <S.ImgBox className='s116 leftbottom' src={Potato} />
          <S.ImgBox className='s81 rightbottom' src={Potato} />
          <S.ImgBox className='s81 rightcorner' src={Potato} />
          <S.ImgBox className='s81 lefttop' src={Potato} />
          <S.ImgBox className='s28 center' src={Potato} />
        </S.PotatoBox>
      </S.PotatoContainer>
    </>
  );
};

export default Index;
