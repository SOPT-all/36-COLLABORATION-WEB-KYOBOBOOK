import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const tabMenuContainer = (theme: Theme) => css`
  display: flex;
  align-items: center;
  height: 5rem;
  padding: 0 1.2rem;
  border-bottom: 1px solid ${theme.colors.gray3};

  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${theme.colors.white};
`;

export const sortButton = (theme: Theme) => css`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  padding: 0 1.2rem;
  margin-left: auto;
  background-color: transparent;
  border: none;
  ${theme.fonts.body3}
`;
