import styled from 'styled-components';
import { rem } from 'polished';

export const HeaderContainer = styled.ul`
  ${({ theme }) => theme.mixins.flexBox}
  /* width: ${rem(1920)}; */
  width: 100vw;
  height: ${rem(100)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
`;

export const HeaderMenu = styled.li`
  cursor: pointer;
  font-size: ${rem(18)};
  margin-right: ${rem(78)};
`;
