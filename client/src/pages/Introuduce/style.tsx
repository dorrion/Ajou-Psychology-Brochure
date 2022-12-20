import { rem } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.mixins.flexBox('column', 'center', 'center')}
`;

export const IntroContainer = styled.div`
  width: ${rem(1280)};
  margin-top: ${rem(40)};

  h1 {
    display: flex;
    font-size: ${rem(40)};
    margin-top: ${rem(83)};
    .green {
      margin-left: ${rem(10)};
      color: ${({ theme }) => theme.colors.colorPrimary};
    }
  }
`;

export const Info = styled.div`
  ${({ theme }) => theme.mixins.flexBox('column', 'center', 'center')}
`;

export const AboutUs = styled.p`
  font-size: ${rem(15)};
  margin-top: ${rem(20)};
`;
