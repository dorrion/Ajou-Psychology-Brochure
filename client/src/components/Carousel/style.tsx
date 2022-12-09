import styled from 'styled-components';
import { rem } from 'polished';

export const CarouselContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBox}
  width: ${rem(3920)};
  height: ${rem(600)};
`;

export const CarouselBox = styled.div`
  width: ${rem(1280)};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black_002};
  border-radius: ${rem(20)};
  margin: 0 ${rem(20)};
  margin-top: ${rem(40)};
`;
