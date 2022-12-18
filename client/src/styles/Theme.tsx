import { DefaultTheme } from 'styled-components';

const colors = {
  // 다크모드 생각하고 변수명 짜기
  colorPrimary: '#8EB695',
  colorSecondary: '#F2E2C6',

  bgColor: '#ffffff',

  text1: '#252525',
  line: '#C3C3C3',
  shadow: '#D9D9D9',

  bgElement1: '#5C5C5C',
  yellow_001: '#FFC05C',
};

const mixins = {
  // flex
  flexBox: (
    direction = 'row',
    align = 'center',
    justify = 'center',
    wrap = 'nowrap',
  ) => `
        display: flex;
        flex-direction: ${direction};
        align-items: ${align};
        justify-content: ${justify};
        flex-wrap: ${wrap};
      `,
};

export type ColorsTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
  mixins,
};
