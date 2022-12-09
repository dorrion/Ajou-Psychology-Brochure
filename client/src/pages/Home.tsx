import Carousel from 'components/Carousel';
import Potato from 'components/Potato';
import styled from 'styled-components';
const Home = () => {
  return (
    <HomeContainer>
      <Carousel />
      <Potato />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBox('column', 'center', 'flex-start')}
`;
