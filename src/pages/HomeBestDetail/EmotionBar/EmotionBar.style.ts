import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const barWrapper = css`
  position: relative;
  width: 100%;
`;

export const barBackground = (theme: Theme) => css`
  background-color: ${theme.colors.gray1};
  border-radius: 4px;
  width: 100%;
`;

export const barFill = (percent: number, theme: Theme) => css`
  background-color: ${percent >= 70
    ? theme.colors.purple4
    : percent >= 40
      ? theme.colors.purple3
      : theme.colors.purple1};
  width: ${percent}%;
  height: 100%;
  border-radius: 4px 0 0 0.4px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const barContent = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 1.6rem;
  width: 100%;
  border-radius: 0.4rem;
  background-color: ${theme.colors.gray1};
`;

export const emotionText = (theme: Theme) => css`
  ${theme.fonts.body1};
  z-index: 1;
`;

export const percentText = (theme: Theme) => css`
  ${theme.fonts.body1};
  color: ${theme.colors.purple7};
`;
