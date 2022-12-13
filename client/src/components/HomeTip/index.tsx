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
 * 안녕하세요 라고 보여주고 싶을 땐 `Hello` 컴포넌트를 사용하세요.
 *
 * - `big` 값을 `true`로 설정하면 **크게** 나타납니다.
 * - `onHello` 와 `onBye` props로 설정하여 버튼이 클릭했을 때 호출 할 함수를 지정 할 수 있습니다.
 */
const Hello = ({ title, subtitle, tag, onClick }: TipProps) => {
  return (
    <S.Box onClick={onClick}>
      <div>{title}</div>
      <div>{subtitle}</div>
      <div>{tag}</div>
    </S.Box>
  );
};

export default Hello;
