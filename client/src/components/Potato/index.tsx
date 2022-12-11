import * as S from './style';
import { Arrow } from 'assets/icon';
import Potato from 'assets/icon/Potato.svg';

const index = () => {
  return (
    <>
      <S.PotatoContainer>
        <S.IntroBox>
          <S.PotatoIntro>구르는 감자단 소개</S.PotatoIntro>
          <S.PotatoSub>
            프로젝트 사용 설명 및 팀 소개 <Arrow />
          </S.PotatoSub>
        </S.IntroBox>
        <S.ImgBox className='s116 righttop visible' src={Potato} />
        <S.PotatoBox>
          <S.ImgBox className='s158 hidden' src={Potato} />
          <S.ImgBox className='s116 leftbottom hidden' src={Potato} />
          <S.ImgBox className='s81 rightbottom hidden' src={Potato} />
          <S.ImgBox className='s81 rightcorner hidden' src={Potato} />
          <S.ImgBox className='s81 lefttop hidden' src={Potato} />
          <S.ImgBox className='s28 center hidden' src={Potato} />
        </S.PotatoBox>
      </S.PotatoContainer>
    </>
  );
};

export default index;
