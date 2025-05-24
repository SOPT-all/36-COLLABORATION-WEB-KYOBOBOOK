import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

export const wrapper = css`
  width: 100%;
  padding: 0 2.4rem;
`;

// ===== [1] 베스트/스테디/더보기+ =====
export const titleRow = css`
  display: flex;
  justify-content: space-between;
  height: auto;
`;

export const titleTabs = css`
  display: flex;
  gap: 1.6rem;
`;

export const best = css`
padding: 0.8rem 0 0.8rem 0.8rem;
  ${theme.fonts.title1};
  color: ${theme.colors.black1};
`;

export const steady = css`
padding: 0.8rem 0.8rem 0.8rem 0;
  ${theme.fonts.title1};
  color: ${theme.colors.gray3};
`;

export const moreButton = css`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  width: 5.7rem;
  height: 2rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const moreText = css`
  ${theme.fonts.subtitle4};
  color: ${theme.colors.black1};
  white-space: nowrap;
`;

// ===== [2] 탭 버튼 =====
export const tabButton = (isSelected: boolean) => css`
  ${isSelected ? theme.fonts.subtitle4 : theme.fonts.body2};
  color: ${isSelected ? theme.colors.purple7 : theme.colors.gray4};
  background: none;
  border: none;
  height: 4.4rem;
  padding: 0;
  cursor: pointer;
`;

export const tabItem = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const tabDivider = css`
  width: 1px;
  height: 1.4rem;
  background-color: ${theme.colors.gray4};
  margin: 0 0.6rem;
`;

// ===== [3] 책 리스트 공통 =====
export const bookList = css`
  display: flex;
  flex-direction: column;
  max-width: 37.5rem;
`;

export const bookItem = css`
  display: flex;
  gap: 1.4rem;
  width: 100%;
  padding: 1.2rem 0;
  border-bottom: 1px solid ${theme.colors.gray2};
`;

export const thumbnail = css`
  width: 6rem;
  height: 8.6rem;
  object-fit: cover;
  flex-shrink: 0;
`;

export const rightSection = css`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const chipWrapper = css`
  display: inline-block;
  max-width: 4.6rem;
  height: 2.1rem;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 0.2rem;
`;

export const absoluteChipWrapper = css`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
`;

export const textContainer = css`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
`;

export const bookTitleRow = css`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const title = css`
  ${theme.fonts.subtitle4};
  color: ${theme.colors.black1};
`;

export const author = css`
  ${theme.fonts.caption3};
  color: ${theme.colors.gray4};
`;

export const loadingContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  ${theme.fonts.body1};
  color: ${theme.colors.gray4};
`;

export const errorContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  padding: 2rem;
  text-align: center;
  ${theme.fonts.body1};
  color: ${theme.colors.black1};
`;

export const errorMessage = css`
  margin-top: 1rem;
  ${theme.fonts.caption1};
  color: ${theme.colors.red};
`;
