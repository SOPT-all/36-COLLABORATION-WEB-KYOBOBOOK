import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

import { multilineEllipsis } from '@/styles/textStyles';

export const cardStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 12.8rem;
`;

export const imgStyle = (imgHeight: string) => css`
  width: 100%;
  height: ${imgHeight};
  object-fit: cover;
`;

export const titleStyle = (theme: Theme) => css`
  width: 100%;
  height: 4rem;
  ${theme.fonts.body1}
  // 두 줄 말줄임 처리 스타일
  ${multilineEllipsis(2)}
`;
