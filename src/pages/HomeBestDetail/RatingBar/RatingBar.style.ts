import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const ratingContainer = css`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const percentBar = (theme: Theme) => css`
  width: 20.4rem;
  height: 0.4rem;
  background-color: ${theme.colors.gray2};
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
`;

export const fillBar = (percent: number, theme: Theme) => css`
  width: ${percent}%;
  height: 100%;
  background-color: ${percent >= 90 ? theme.colors.green1 : theme.colors.gray4};
  position: absolute;
`;

export const percentText = (theme: Theme) => css`
  ${theme.fonts.caption3}
  color: ${theme.colors.gray5};
`;
