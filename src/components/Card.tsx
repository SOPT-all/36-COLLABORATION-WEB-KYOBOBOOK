import { css, useTheme } from '@emotion/react';
import type { Theme } from '@emotion/react';

import type { CardType } from '@/types/CardType';
import { multilineEllipsis } from '@/styles/textStyles';

export default function Card({ imgUrl, title, type = 'rectangular' }: CardType) {
  const theme = useTheme();
  const imgHeight = type === 'rectangular' ? '18.8rem' : '12.8rem';

  return (
    <div css={cardStyle}>
      <img css={imgStyle(imgHeight)} src={imgUrl} alt={`책 표지 이미지 - ${title}`} />
      <p css={titleStyle(theme)}>{title}</p>
    </div>
  );
}

const cardStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 12.8rem;
`;

const imgStyle = (imgHeight: string) => css`
  width: 100%;
  height: ${imgHeight};
  object-fit: cover;
`;

const titleStyle = (theme: Theme) => css`
  width: 100%;
  height: 4rem;
  ${theme.fonts.body1}
  // 두 줄 말줄임 처리 스타일
  ${multilineEllipsis(2)}
`;
