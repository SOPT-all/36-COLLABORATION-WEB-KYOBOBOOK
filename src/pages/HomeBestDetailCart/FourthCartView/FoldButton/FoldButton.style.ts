import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

const foldButton = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.gray1};
  padding: 1.4rem 1.8rem;
  border-radius: 0.75rem;
  cursor: pointer;
`;

const textFirst = (theme: Theme) => css`
  font: ${theme.fonts.body1};
  color: ${theme.colors.black1};
`;

const textSecond = (theme: Theme) => css`
  font: ${theme.fonts.body2};
  color: ${theme.colors.gray6};
`;

export const FoldButtonStyle = {
  foldButton,
  textFirst,
  textSecond,
};
