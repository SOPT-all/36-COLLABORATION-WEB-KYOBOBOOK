import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const tabButton = css`
  height: 100%;
  padding: 0 1.2rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const tabText = (theme: Theme, isActive: boolean) => css`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  height: 100%;
  padding: 1rem 0;
  border-bottom: ${isActive ? `3px solid ${theme.colors.black1}` : 'none'};
  ${isActive ? `${theme.fonts.subtitle2}` : `${theme.fonts.subtitle3}`}
  color:${isActive ? `${theme.colors.black1}` : `${theme.colors.gray4}`}
`;

export const tabCount = (theme: Theme, isActive: boolean) => css`
  color: ${isActive ? `${theme.colors.black1}` : `${theme.colors.gray4}`};
  ${theme.fonts.caption4};
`;
