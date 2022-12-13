import * as S from './style';
import React from 'react';

interface TipProps {
  /** Tip 제목 */
  title: string;
  /** Tip 부제목 */
  subtitle: string;
  /** 태그 */
  tag?: React.ReactNode;
  /** 클릭 시 모달창 열림 */
  onClick?: () => void;
}

/**
 * 심리학과에서 살아남기 모달로 연결시킬 때 `HomeTip` 컴포넌트를 사용합니다.
 *
 * - 아직 안했지만 `isOpen`을 `true`로 설정하면 **모달창**이 나타납니다.
 * - `onClick`을 props로 설정하여 버튼이 클릭했을 때 모달 창을 열리고 닫히게 하는 함수를 호출합니다.
 */
function Hello({ title, subtitle, tag, onClick }: TipProps) {
  return (
    <S.Box onClick={onClick}>
      <S.TitleBox>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subtitle}</S.SubTitle>
      </S.TitleBox>
      <div>{tag}</div>
    </S.Box>
  );
}

export default Hello;
