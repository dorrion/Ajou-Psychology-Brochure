import * as S from './style';
import { Arrow } from 'assets/icon';
import Potato from 'assets/icon/Potato.svg';

const index = () => {
  return (
    <S.PotatoContainer>
      <S.IntroBox>
        <S.PotatoIntro>구르는 감자단 소개</S.PotatoIntro>
        <S.PotatoSub>
          프로젝트 사용 설명 및 팀 소개 <Arrow />
        </S.PotatoSub>
      </S.IntroBox>
      <S.PotatoBox>
        <S.ImgBox className='black' src={Potato} />
        <S.ImgBox className='medium' src={Potato} />
        <S.ImgBox className='medium' src={Potato} />
        <S.ImgBox className='regular' src={Potato} />
        <S.ImgBox className='regular' src={Potato} />
        <S.ImgBox className='regular' src={Potato} />
        <S.ImgBox className='light' src={Potato} />
      </S.PotatoBox>
    </S.PotatoContainer>
  );
};

export default index;
