import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const wrapper = css`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 0 2.4rem;
  margin-bottom: 4.4rem;
`;

export const title = css`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.6rem;
`;

export const titleText = (theme: Theme) => css`
  ${theme.fonts.title1};
`;

export const description = (theme: Theme) => css`
  color: ${theme.colors.gray5};
  ${theme.fonts.body3};
`;

export const ratingTitle = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.6rem;
  color: ${theme.colors.gray4};
  ${theme.fonts.subtitle2};
`;

export const ratingText = (theme: Theme) => css`
  padding-right: 0.2rem;
  color: ${theme.colors.green1};
  ${theme.fonts.header1};
`;

export const reviewText = (theme: Theme) => css`
  text-align: center;
  ${theme.fonts.subtitle2};
  margin-bottom: 1.6rem;
`;

export const response = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const perfect = (theme: Theme) => css`
  margin-right: 0.4rem;
  color: ${theme.colors.purple7};
  ${theme.fonts.subtitle2};
`;

export const barWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
export const buttonContainer = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  height: 4.2rem;
  background-color: ${theme.colors.purple6};
  border: none;
  border-radius: 6px;
`;

export const buttonText = (theme: Theme) => css`
  color: ${theme.colors.white};
  ${theme.fonts.subtitle4};
`;

export const cardWrapper = css`
  padding: 2.4rem;
  margin-bottom: 0.8rem;
`;

export const moreWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
`;

export const moreText = (theme: Theme) => css`
  ${theme.fonts.subtitle4};
  color: ${theme.colors.gray4};
`;
