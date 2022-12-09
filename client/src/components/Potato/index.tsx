import * as S from './style';
import { Arrow } from 'assets/icon';

const index = () => {
  return (
    <S.PotatoContainer>
      <S.IntroBox>
        <S.PotatoIntro>구르는 감자단 소개</S.PotatoIntro>
        <S.PotatoSub>
          프로젝트 사용 설명 및 팀 소개 <Arrow />
        </S.PotatoSub>
      </S.IntroBox>
    </S.PotatoContainer>
  );
};

export default index;
