import styled, { keyframes } from 'styled-components';
import { rem } from 'polished';

export const PotatoContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'flex-start')}
  width: ${rem(1280)};
  height: ${rem(150)};
  background-color: ${({ theme }) => theme.colors.yellow_002};
  border-radius: ${rem(20)};
  margin-top: ${rem(150)};
  position: relative;
  overflow: hidden;
`;

export const IntroBox = styled.div`
  border: 3px solid red;
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
  position: absolute; /* 부모 요소 기준으로 absolute */
  right: 0;
  width: ${rem(495)};
  height: ${rem(150)};
`;

const DownToUp = keyframes`
  0% {
    transform: translateY(${rem(50)});
  }
  to {
    transform: none;
  }
`;

export const ImgBox = styled.img`
  position: absolute;

  /* &:hover {
    animation: ${DownToUp} 1s linear;
  } */
  &.s158 {
    width: ${rem(158)};
    height: ${rem(158)};
    left: ${rem(247)};
    bottom: ${rem(-60)};
  }
  &.s116 {
    width: ${rem(116)};
    height: ${rem(116)};
  }
  &.s81 {
    width: ${rem(81)};
    height: ${rem(81)};
  }

  &.center {
    left: ${rem(233)};
    top: ${rem(52)};
  }
  &.lefttop {
    left: ${rem(245)};
    top: ${rem(-41)};
  }
  &.leftbottom {
    left: ${rem(114)};
    bottom: ${rem(-42)};
  }

  &.rightcorner {
    right: 0;
    top: ${rem(3)};
  }

  &.rightbottom {
    left: ${rem(402)};
    bottom: ${rem(-39)};
  }
  &.righttop {
    left: ${rem(326)};
    top: ${rem(-64)};
  }

  &.s28 {
    width: ${rem(28)};
    height: ${rem(28)};
  }
  &.thin {
    width: ${rem(100)};
    height: ${rem(100)};
  }
`;
