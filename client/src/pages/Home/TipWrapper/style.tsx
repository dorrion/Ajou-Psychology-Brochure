import { rem } from 'polished';
import styled from 'styled-components';

export const TipContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'center', 'wrap')}
`;
