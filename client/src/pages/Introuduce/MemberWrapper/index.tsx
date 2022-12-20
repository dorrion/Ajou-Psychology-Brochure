import { rem } from 'polished';
import styled from 'styled-components';

import MemberCard from 'components/MemberCard';
import MemberData from 'data/MemberData.json';

export default function index() {
  const MemberList: JSX.Element[] = MemberData.map((member) => (
    <MemberCard
      key={member.memberId}
      name={member.name!}
      profileImg={member.profileImg!}
      role={member.role!}
    />
  ));
  return <Container>{MemberList}</Container>;
}

const Container = styled.div`
  ${({ theme }) => theme.mixins.flexBox('row', 'flex-start', 'center', 'wrap')}
`;
