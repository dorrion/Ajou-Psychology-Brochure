import styled from 'styled-components';
import { rem } from 'polished';

export const CarouselContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBox}
  width: ${rem(3920)};
  height: ${rem(600)};
`;

export const CarouselBox = styled.div`
  width: ${rem(1280)};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bgElement1};
  border-radius: ${rem(20)};
  margin: 0 ${rem(20)};
  margin-top: ${rem(40)};

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
