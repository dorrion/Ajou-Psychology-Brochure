import { DefaultTheme } from 'styled-components';

const colors = {
  black_001: '#252525',
  black_002: '#5C5C5C',
  black_003: '#C3C3C3',
  black_004: '#D9D9D9',

  yellow_001: '#FFC05C',
  yellow_002: '#F2E2C6',

  green_001: '#8EB695',
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
