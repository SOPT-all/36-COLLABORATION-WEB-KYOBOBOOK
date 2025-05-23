import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

export const wrapper = css`
  width: 100%;
  max-width: 32.7rem;
  border-radius: 1rem;
  background-color: ${theme.colors.gray1};
  padding: 2.4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;   
`;

export const titleRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4.4rem;
  padding: 0 2.4rem;
`;

export const titleTextBox = css`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const titleText = css`
  ${theme.fonts.title1};
  color: ${theme.colors.green1};
`;

export const badge = css`
  width: 5.6rem;
  height: 2.6rem;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4rem;
  border: 1px solid ${theme.colors.gray2};
  background-color: white;
  font-weight: 700;
  font-size: 1.2rem;
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

export const description = css`
  width: 100%;
  padding: 0 2.4rem;
  ${theme.fonts.body2};
  color: ${theme.colors.black1};
  white-space: pre-line;
`;

export const cardGrid = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
  padding: 1.6rem 2.4rem;
`;

export const buttonCustomStyle = css`
  width: 28.2rem;
  height: 4.2rem;
  border-radius: 0.6rem;
  border: 1px solid ${theme.colors.purple7};
  gap: 0.2rem;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`;

