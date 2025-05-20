import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const headerWrapper = (theme: Theme, scrollState: number) => css`
  padding: 0.9rem 1.4rem;
  width: 100%;
  position: fixed;
  background-color: ${scrollState === 1 ? 'transparent' : theme.colors.white};
`;

export const iconWrapper = css`
  padding: 0.6rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
