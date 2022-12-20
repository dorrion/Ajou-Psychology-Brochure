import styled from 'styled-components';
import { rem } from 'polished';

export const PotatoContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'center')}
  width: ${rem(1280)};
  height: ${rem(248)};
  background-color: ${({ theme }) => theme.colors.colorSecondary};
  background-image: url('/image/감자배경.png');
  background-position: center;
  background-size: cover;
`;
