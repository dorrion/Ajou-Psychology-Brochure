import { rem } from 'polished';
import React from 'react';
import styled from 'styled-components';

interface TagProps {
  /** 태그 내용 */
  content: string;
}

/**
 * `Tag` 컴포넌트는 내용을 요약해서 보여줄 때 사용합니다.
 */
function index({ content }: TagProps) {
  return (
    <TagContainer>
      <p>{content}</p>
    </TagContainer>
  );
}

export default index;

const TagContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBox}
  width: fit-content;
  height: ${rem(28)};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${rem(20)};

  font-size: ${rem(15)};
  line-height: ${rem(22)};

  p {
    color: ${({ theme }) => theme.colors.line};
    margin: ${rem(10)};
  }
`;
