import IntroBox from 'components/IntroBox';
import { rem } from 'polished';
import styled from 'styled-components';
export default function index() {
  return (
    <IntroContainer>
      <IntroBox>
        <Info>
          <h1>구르는 감자단 소개</h1>
          <div>프로젝트 사용 설명 및 팀 소개</div>
        </Info>
      </IntroBox>
    </IntroContainer>
  );
}

const IntroContainer = styled.div`
  margin-top: ${rem(40)};
  ${({ theme }) => theme.mixins.flexBox('column', 'center', 'center')}
`;

const Info = styled.div`
  ${({ theme }) => theme.mixins.flexBox('column', 'center', 'center')}
`;
