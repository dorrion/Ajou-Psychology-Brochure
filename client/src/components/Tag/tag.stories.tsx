import React from 'react';
import Tag from 'components/Tag';

export default {
  title: 'component|Home', // 스토리북에서 보여질 그룹과 경로를 명시
  component: Tag, // 어떤 컴포넌트를 문서화 할지 명시
};

export const grayTag = () => <Tag theme='gray' content='이수학점' />;
export const yellowTag = () => <Tag theme='yellow' content='이수학점' />;
