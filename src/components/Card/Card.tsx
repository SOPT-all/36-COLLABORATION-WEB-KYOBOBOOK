import { useTheme } from '@emotion/react';

import type { CardType } from '@/types/CardType';
import { cardStyle, imgStyle, titleStyle } from '@/components/Card/Card.styles';

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
