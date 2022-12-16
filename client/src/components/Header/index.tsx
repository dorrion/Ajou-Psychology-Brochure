import { useNavigate } from 'react-router-dom';
import * as S from './style';

const Index = () => {
  const navigate = useNavigate();

  return (
    <S.HeaderContainer>
      <S.HeaderMenu onClick={() => navigate('/Introduce')}>소개</S.HeaderMenu>
      <S.HeaderMenu onClick={() => navigate('/Graduate')}>대학원</S.HeaderMenu>
      <S.HeaderMenu onClick={() => navigate('/Employment')}>취업</S.HeaderMenu>
      <S.HeaderMenu onClick={() => navigate('/Abroad')}>유학</S.HeaderMenu>
    </S.HeaderContainer>
  );
};

export default Index;
