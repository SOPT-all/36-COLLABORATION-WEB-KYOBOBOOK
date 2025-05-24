import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

// ===== [1] Wrapper & Title Row =====
export const wrapper = css`
  width: 100%;
  padding: 0 2.4rem;
`;

export const titleRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.8rem 0;
`;

export const best = css`
  ${theme.fonts.title1};
  color: ${theme.colors.black1};
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

// ===== [2] Tabs =====

export const tabBlock = css`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

export const tabItem = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: auto;              
  padding-bottom: 0.8rem; 
  box-sizing: border-box;
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

// ===== [3] Book Card =====
export const cardWrapper = css`
  width: 30rem;
  height: 41.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const backgroundBlurBox = css`
  width: 30rem;
  height: 27.6rem;
  position: relative;
  background-color: ${theme.colors.black3};
  backdrop-filter: blur(80px);
  -webkit-backdrop-filter: blur(80px);
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  z-index: ${theme.zIndex.one};
`;

export const imageWrapper = css`
  position: absolute;
  top: 3rem;
  left: 8.1rem;
  width: 13.8rem;
  height: 21.6rem;
  object-fit: cover;
  border-radius: 0.4rem;
  z-index: ${theme.zIndex.one};
`;

export const textContainer = css`
  width: 30rem;
  height: 14.2rem;
  background-color: ${theme.colors.gray1};
  padding: 1.2rem 1.6rem;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: ${theme.zIndex.one};
  border-radius: 0 0 8px 8px;
`;

export const cardTitle = css`
  ${theme.fonts.subtitle1};
  color: ${theme.colors.black1};
  margin-top: 0.8rem;
  line-height: 140%;
  text-align: center;
`;

export const cardCaption = css`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 0.4rem;
`;

export const captionInner = css`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
`;

export const captionIcon = css`
  width: 1.3333rem;
  height: 1.3333rem;
  flex-shrink: 0;
`;

export const cardSubtitle = css`
  ${theme.fonts.caption2};
  color: ${theme.colors.purple7};
  width: 100%;
  line-height: 140%;
  word-break: keep-all;
  text-align: center;
`;

export const cardDescription = css`
  ${theme.fonts.caption3};
  color: ${theme.colors.gray4};
  margin-top: 0.8rem;
  line-height: 140%;
  word-break: keep-all;
  text-align: center;
`;
