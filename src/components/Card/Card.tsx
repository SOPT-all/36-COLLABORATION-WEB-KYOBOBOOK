import { useTheme } from '@emotion/react';

import type { CardTypes } from '@/types/cardTypes';
import { cardStyle, imgStyle, titleStyle } from '@/components/Card/Card.styles';

export default function Card({ imgUrl, title, type = 'rectangular' }: CardTypes) {
  const theme = useTheme();
  const imgHeight = type === 'rectangular' ? '18.8rem' : '12.8rem';

  return (
    <div css={cardStyle}>
      <img css={imgStyle(imgHeight)} src={imgUrl} alt={`책 표지 이미지 - ${title}`} />
      {title && <p css={titleStyle(theme)}>{title}</p>}
    </div>
  );
}
