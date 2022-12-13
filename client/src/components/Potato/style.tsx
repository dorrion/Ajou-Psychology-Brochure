import styled, { keyframes } from 'styled-components';
import { rem } from 'polished';

export const PotatoContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'flex-start')}
  width: ${rem(1280)};
  height: ${rem(150)};
  background-color: ${({ theme }) => theme.colors.colorSecondary};
  border-radius: ${rem(20)};
  margin-top: ${rem(150)};
  position: relative;
  .righttop {
    right: ${rem(53)};
    top: ${rem(-64)};
  }
  &:hover {
    .downtoup {
      animation: DownToUp 1s ease-in-out;
    }
  }

  @keyframes DownToUp {
    0% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const IntroBox = styled.div`
  margin-left: ${rem(54)};
  color: ${({ theme }) => theme.colors.text1};
  filter: none;
`;

export const PotatoIntro = styled.h1`
  font-size: ${rem(30)};
  color: ${({ theme }) => theme.colors.text1};
`;

export const PotatoSub = styled.div`
  font-size: ${rem(15)};
`;

export const PotatoBox = styled.div`
  position: absolute; /* 부모 요소 기준으로 absolute */
  right: 0;
  width: ${rem(495)};
  height: ${rem(150)};
  overflow: hidden;
`;

export const ImgBox = styled.img`
  position: absolute;

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
  &.s28 {
    width: ${rem(28)};
    height: ${rem(28)};
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
`;
