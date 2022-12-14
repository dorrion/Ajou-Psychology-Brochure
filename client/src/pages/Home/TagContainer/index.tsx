import React from 'react';
import * as S from './style';
import Tag from 'components/Tag';

import { HomeDataType } from 'data/DataType';
function index({ category, tag }: HomeDataType) {
  const TagList: JSX.Element[] = tag!.map((el, idx) => (
    <Tag key={idx} content={el} theme='gray' />
  ));
  return (
    <>
      <S.TagContainer>
        {category && <Tag content={category} theme='yellow' />}
        {TagList}
      </S.TagContainer>
    </>
  );
}

export default index;
