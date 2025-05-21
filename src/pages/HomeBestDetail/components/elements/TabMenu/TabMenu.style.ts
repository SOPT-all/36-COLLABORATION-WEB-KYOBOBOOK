import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const tabMenuContainer = (type: string, theme: Theme) => css`
  display: flex;
  height: 5rem;
  align-items: center;
  padding: 0 1.5rem;
  border-bottom: 1px solid ${theme.colors.gray3};
  background-color: ${theme.colors.white};
  position: sticky;
  top: 0;
  z-index: ${type === 'default' ? theme.zIndex.two : theme.zIndex.one};
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
