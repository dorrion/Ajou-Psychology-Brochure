import styled from 'styled-components';
import { rem } from 'polished';

export const TagContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'flex-start', 'wrap')}
  margin-top: ${rem(14)};
`;
