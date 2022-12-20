import { rem } from 'polished';
import styled from 'styled-components';

export const Card = styled.div`
  ${({ theme }) => theme.mixins.flexBox('column')}
  margin: ${rem(80)} ${rem(65)};

  h2 {
    margin-top: ${rem(40)};
  }

  p {
    margin-top: ${rem(13)};
  }
`;

export const Profile = styled.div`
  ${({ theme }) => theme.mixins.flexBox('column', 'center', 'center')}
  background-image: url('image/땅.png');
  border-radius: 50%;
  width: ${rem(270)};
  height: ${rem(270)};
`;

export const ProfileIcon = styled.img`
  width: 100%;
  height: 100%;
`;
