import { css } from '@emotion/react';

import { theme } from '@/styles/theme';
export const headerContainer = css`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.gray1};
`;

export const searchContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1.8rem 0 2.4rem;
  gap: 0.6rem;
  width: 100%;
  background-color: ${theme.colors.white};
`;

export const searchInputWrapper = css`
  display: flex;
  align-items: center;
  flex: 1 0 0;
  gap: 0.6rem;
  padding: 0.8rem 1.2rem;

  border-radius: 100px;
  border: none;
  background-color: ${theme.colors.gray1};
`;

export const searchInput = css`
  flex: 1;
  border: none;
  outline: none;

  ${theme.fonts.body2}
  background-color: ${theme.colors.gray1};
  color: ${theme.colors.gray4};
`;

export const cartIconWrapper = css`
  padding: 0.8rem 0.4rem;
`;

export const headerTabWrapper = css`
  display: flex;
  padding: 0.8rem 2.4rem;
  height: 5rem;
  gap: 1.6rem;
  background-color: ${theme.colors.white};
`;
