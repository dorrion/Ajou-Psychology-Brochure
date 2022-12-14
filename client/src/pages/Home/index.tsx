import Carousel from 'components/Carousel';
import Potato from 'shared/Potato';
import TipWrapper from './TipWrapper';
import { rem } from 'polished';
import styled from 'styled-components';
const Home = () => {
  return (
    <HomeContainer>
      <Carousel />
      <Potato />
      <TipContainer>
        <h1> 심리학과에서 살아남기</h1>
        <div> 아주대학교 심리학과 학생들에게 유용한 정보를 소개합니다.</div>
        <TipWrapper />
      </TipContainer>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBox('column', 'center', 'flex-start')}
`;
const TipContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBox('column', 'center')}
  width: ${rem(1320)};
  margin-top: ${rem(150)};
`;
