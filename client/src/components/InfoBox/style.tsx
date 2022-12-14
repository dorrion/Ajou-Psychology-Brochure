import styled from 'styled-components';
import { rem } from 'polished';

export const Box = styled.div`
  width: ${rem(290)};
  height: ${rem(290)};
  border-radius: ${rem(20)};
  box-shadow: ${rem(4)} ${rem(4)} ${rem(20)} ${({ theme }) => theme.colors.shadow};
  display: flex;
  flex-direction: column;
  padding: ${rem(25)};
  margin: ${rem(20)};
`;

export const TitleBox = styled.div``;

export const Title = styled.h1`
  font-size: ${rem(24)};
  font-weight: 400;
`;
export const SubTitle = styled.h2`
  font-size: ${rem(15)};
  font-weight: 300;
  text-align: left;
  margin-top: ${rem(5)};
`;
