import { css, useTheme } from '@emotion/react';

import type { CardType } from '@/types/CardType';

export default function Card({ imgUrl, title, type = 'rectangular' }: CardType) {
  const theme = useTheme();
  const imgHeight = type === 'rectangular' ? '18.8rem' : '12.8rem';

  return (
    <div css={cardStyle}>
      <img css={imgStyle(imgHeight)} src={imgUrl} />
      <p css={titleStyle(theme)}>{title}</p>
    </div>
  );
}

const cardStyle = css`
  width: 12.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const imgStyle = (imgHeight: string) => css`
  width: 100%;
  height: ${imgHeight};
  object-fit: cover;
`;

const titleStyle = (theme: any) => css`
  ${theme.fonts.body1}
`;
