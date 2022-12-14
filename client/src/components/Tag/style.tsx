import { rem } from 'polished';
import styled from 'styled-components';

export const TagContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBox}
  width: fit-content;
  height: ${rem(28)};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${rem(20)};

  font-size: ${rem(15)};
  line-height: ${rem(22)};
  margin-right: ${rem(5)};
  margin-bottom: ${rem(5)};

  p {
    color: ${({ theme }) => theme.colors.line};
    margin: ${rem(8)};
  }

  &.gray {
  }
  &.yellow {
    border: 1px solid ${({ theme }) => theme.colors.yellow_001};
    p {
      color: ${({ theme }) => theme.colors.yellow_001};
    }
  }
`;
