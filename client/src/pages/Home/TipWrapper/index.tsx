import InfoBox from 'components/InfoBox';
import Tag from 'components/Tag';
import HomeData from 'data/HomeData.json';
import TagContainer from '../TagContainer';
import * as S from './style';

function index() {
  // map활용 컴포넌트 반복하기
  // map함수로 배열을 새로 생성한 후 return으로 컴포넌트를 반환할 수 있습니다.
  const TipList: JSX.Element[] = HomeData.map((tip) => (
    <InfoBox key={tip.tipId} title={tip.title!} subtitle={tip.subtitle!}>
      <TagContainer category={tip.category} tag={tip.tag} />
    </InfoBox>
  ));
  return <S.TipContainer>{TipList}</S.TipContainer>;
}

export default index;
