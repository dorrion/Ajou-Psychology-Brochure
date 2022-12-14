import * as S from './style';
interface TagProps {
  /** 태그 내용 */
  content: string;
  /** 태그 색깔을 설정합니다 */
  theme: 'gray' | 'yellow';
}

/**
 * `Tag` 컴포넌트는 내용을 요약해서 보여줄 때 사용합니다.
 */
function index({ content, theme }: TagProps) {
  return (
    <S.TagContainer className={theme}>
      <p>{content}</p>
    </S.TagContainer>
  );
}

index.defaultProps = {
  content: '',
  theme: 'gray',
};

export default index;
