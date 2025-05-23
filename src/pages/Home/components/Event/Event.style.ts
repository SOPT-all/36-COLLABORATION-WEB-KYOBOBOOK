import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

export const wrapper = css`
  max-width: 37.5rem;
  margin: 0 auto;
  padding: 0 2.4rem;
`;

export const titleRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
`;

export const titleText = css`
  ${theme.fonts.title1};
  color: ${theme.colors.black1};
`;

export const moreButton = css`
  background: none;
  border: none;
  cursor: pointer;
  ${theme.fonts.subtitle4};
  color: ${theme.colors.black1};
`;

export const tabRow = css`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
`;

export const tabBlock = css`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const tabButton = (selected: boolean, isFirst: boolean) => css`
  ${isFirst ? theme.fonts.subtitle4 : theme.fonts.body2};
  color: ${selected ? theme.colors.purple7 : theme.colors.gray4};
  background: none;
  border: none;
  cursor: pointer;
`;

export const tabDivider = css`
  width: 1px;
  height: 1.2rem;
  background-color: ${theme.colors.gray3};
`;

export const bannerImage = css`
  width: 32.7rem;
  height: 13.9rem;
  object-fit: cover;
  border-radius: 0.8rem;
`;


