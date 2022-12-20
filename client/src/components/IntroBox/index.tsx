import { ReactNode } from 'react';
import * as S from './style';

type MyComponentProps = {
  children: ReactNode;
};

function index({ children }: MyComponentProps) {
  return <S.PotatoContainer>{children}</S.PotatoContainer>;
}

export default index;
