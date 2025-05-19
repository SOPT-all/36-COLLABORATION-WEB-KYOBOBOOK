import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const ratingContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  width: 100%;
`;

export const percentBar = (theme: Theme) => css`
  flex-grow: 1;
  height: 0.4rem;
  background-color: ${theme.colors.gray2};
  border-radius: 10px;
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
