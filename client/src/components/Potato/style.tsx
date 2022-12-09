import styled from 'styled-components';
import { rem } from 'polished';

export const PotatoContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'flex-start')}
  width: ${rem(1280)};
  height: ${rem(150)};
  background-color: ${({ theme }) => theme.colors.yellow_002};
  border-radius: ${rem(20)};
  margin-top: ${rem(150)};
`;

export const IntroBox = styled.div`
  margin-left: ${rem(54)};
  color: ${({ theme }) => theme.colors.black_001};
  filter: none;
`;

export const PotatoIntro = styled.h1`
  font-size: ${rem(30)};
  color: ${({ theme }) => theme.colors.black_001};
`;

export const PotatoSub = styled.div`
  font-size: ${rem(15)};
`;

export const PotatoBox = styled.div`
  width: ${rem(495)};
  height: ${rem(150)};
`;

export const ImgBox = styled.img`
  &.black {
    width: ${rem(158)};
    height: ${rem(158)};
  }
  &.medium {
    width: ${rem(116)};
    height: ${rem(116)};
  }
  &.regular {
    width: ${rem(81)};
    height: ${rem(81)};
  }
  &.light {
    width: ${rem(28)};
    height: ${rem(28)};
  }
  &.thin {
    width: ${rem(100)};
    height: ${rem(100)};
  }
`;
