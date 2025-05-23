import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

export const wrapper = css`
  max-width: 37.5rem;
  margin: 0 auto;
`;

export const titleRow = css`
  padding: 0 2.4rem;
  margin-bottom: 1.6rem;
`;

export const titleText = css`
  ${theme.fonts.title1};
  color: ${theme.colors.black1};
`;
