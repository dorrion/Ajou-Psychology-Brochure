import styled from 'styled-components';
import { rem } from 'polished';

export const Box = styled.div`
  width: ${rem(290)};
  height: ${rem(290)};
  border-radius: ${rem(20)};
  box-shadow: ${rem(4)} ${rem(4)} ${rem(20)} ${({ theme }) => theme.colors.shadow};
`;

export const Title = styled.div`
  font-size: ${rem(24)};
`;
export const SubTitle = styled.div`
  font-size: ${rem(15)};
`;
