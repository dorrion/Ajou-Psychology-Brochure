import styled from 'styled-components';
import { rem } from 'polished';

export const Container = styled.div`
  /* margin: 0 auto; */
  margin-top: ${rem(40)};
`;

export const CarouselContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'center')}
  width: ${rem(3920)};
  /* margin: 0 auto; */
  height: 600px;
  overflow: hidden;
`;

export const CarouselBox = styled.div`
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'center')}
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bgElement1};
  border-radius: ${rem(20)};
  margin: 0 ${rem(20)};

  &.school {
    background-image: url('https://images.unsplash.com/photo-1613899209236-ea0496f96180?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
    background-size: 100%;
    background-position: center;
  }
  &.company {
    background-image: url('https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80');
    background-size: 100%;
    background-position: center;
  }
  &.abroad {
    background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80');
    background-size: 100%;
    background-position: center;
  }
`;

export const BtnContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBox}
`;

export const ContentBox = styled.div`
  ${({ theme }) => theme.mixins.flexBox('column', 'center', 'center')}
  width: ${rem(475)};
  height: ${rem(300)};
  background-color: rgba(255, 255, 255, 0.6);

  h1 {
    font-size: ${rem(50)};
  }

  .content {
    font-size: ${rem(15)};
    font-weight: 400;
  }
  .tag {
    font-size: ${rem(12)};
  }
`;

export const Line = styled.div`
  width: ${rem(66)};
  height: ${rem(1)};
  background-color: ${({ theme }) => theme.colors.text1};
  margin: ${rem(18)} 0;
`;
