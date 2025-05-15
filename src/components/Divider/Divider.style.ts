import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const dividerStyle = (theme: Theme) => css`
  width: 100%;
  height: 1rem;
  border: none;
  background-color: ${theme.colors.gray1};
`;
