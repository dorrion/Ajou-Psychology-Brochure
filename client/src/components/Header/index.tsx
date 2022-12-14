import { useNavigate } from 'react-router-dom';
import * as S from './style';

const Index = () => {
  let navigate = useNavigate();
  const navigateIntroduce = () => {
    navigate('/Introduce');
  };
  const navigateGraduate = () => {
    navigate('/Graduate');
  };
  const navigateEmployment = () => {
    navigate('/Employment');
  };
  const navigateAbroad = () => {
    navigate('/Abroad');
  };

  return (
    <S.HeaderContainer>
      <S.HeaderMenu onClick={navigateIntroduce}>소개</S.HeaderMenu>
      <S.HeaderMenu onClick={navigateGraduate}>대학원</S.HeaderMenu>
      <S.HeaderMenu onClick={navigateEmployment}>취업</S.HeaderMenu>
      <S.HeaderMenu onClick={navigateAbroad}>유학</S.HeaderMenu>
    </S.HeaderContainer>
  );
};

export default Index;
