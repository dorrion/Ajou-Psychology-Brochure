import * as S from './style';
import { MemberDataType } from 'data/DataType';

export default function index({ name, profileImg, role }: MemberDataType) {
  return (
    <S.Card>
      <S.Profile>
        <S.ProfileIcon src={profileImg} />
      </S.Profile>
      <h2>{name}</h2>
      {role?.map((el, idx) => (
        <p>{el}</p>
      ))}
    </S.Card>
  );
}
