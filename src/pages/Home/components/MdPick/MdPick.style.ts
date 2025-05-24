import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

export const wrapper = css`
  width: 100%;
`;

export const titleRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4.4rem;
  padding: 0 2.4rem;
  margin-bottom: 0.8rem;
`;

export const best = css`
  ${theme.fonts.title1};
  color: ${theme.colors.black1};
`;

export const moreButton = css`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  width: 5.7rem;
  background: none;
  border: none;
  cursor: pointer;
`;

export const moreText = css`
  ${theme.fonts.subtitle4};
  color: ${theme.colors.black1};
  white-space: nowrap;
  line-height: 1.4rem;
`;

export const tabBlock = css`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

export const tabButton = (isSelected: boolean) => css`
  ${isSelected ? theme.fonts.subtitle4 : theme.fonts.body2};
  color: ${isSelected ? theme.colors.purple7 : theme.colors.gray4};
  background: none;
  border: none;
  height: 2rem;
  padding: 0;
  cursor: pointer;
`;

export const tabDivider = css`
  width: 0.1rem;
  height: 1rem;
  background-color: ${theme.colors.gray3};
  margin: 0 1.2rem;
`;

export const tabWrapper = css`
  width: 100%;
`;

export const cardWrapper = css`
  width: 100%;
  padding: 2.4rem 0 0 0;
`;