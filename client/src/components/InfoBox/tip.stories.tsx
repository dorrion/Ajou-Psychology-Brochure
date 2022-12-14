import React from 'react';
import HomeTip from './index';

export default {
  title: 'component|Home', // 스토리북에서 보여질 그룹과 경로를 명시
  component: HomeTip, // 어떤 컴포넌트를 문서화 할지 명시
};

export const homeTip = () => (
  <HomeTip
    title='심리학과에서 졸업하기'
    subtitle='아주대학교 심리학과 졸업 규정'
  />
);
