import styled from 'styled-components';
import { rem } from 'polished';

export const PotatoContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBox('column', 'flex-start')}
  width: ${rem(1280)};
  height: ${rem(150)};
  background-color: ${({ theme }) => theme.colors.yellow_002};
  border-radius: ${rem(20)};
  margin-top: ${rem(150)};
`;

export const IntroBox = styled.div`
  margin-left: ${rem(54)};
`;

export const PotatoIntro = styled.h1`
  font-size: ${rem(30)};
`;

export const PotatoSub = styled.div`
  font-size: ${rem(15)};
`;
