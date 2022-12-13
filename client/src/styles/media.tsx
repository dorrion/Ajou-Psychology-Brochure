// 최대폭 입력하면 문자열 내보냄
const customMediaQuery = (maxWidth: number): string => {
  return `@media (max-width: ${maxWidth}px)`;
};

// 사용법 : import 하고 ${media.large, medium, small} {} 해서 안에 반응형별 코드
const media = {
  custom: customMediaQuery,
  large: customMediaQuery(922),
  medium: customMediaQuery(768),
  small: customMediaQuery(576),
};

export { media };
