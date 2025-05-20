import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

import { flexBetweenCenter, flexColumn, flexVerticalCenter } from '@/styles/sharedStyles';

export const imageBackground = (theme: Theme) => css`
  display: flex;
  width: 100%;
  padding: 8.6rem 5.7rem 4.8rem 5.8rem;
  background-color: ${theme.colors.gray4};
`;

export const bookContainer = css`
  ${flexColumn};
  gap: 1.6rem;
`;

export const imageStyle = (theme: Theme) => css`
  box-shadow: ${theme.effects.shadow1};
`;

export const previewContainer = (theme: Theme) => css`
  ${flexBetweenCenter};
  color: ${theme.colors.white};
  ${theme.fonts.caption3}
`;

export const previewText = (theme: Theme) => css`
  padding: 0.45rem 1rem;
  border: 1px solid ${theme.colors.gray3};
  border-radius: 40px;
`;

export const currentPage = (theme: Theme) => css`
  ${theme.fonts.caption2}
`;

export const bookDetail = css`
  padding: 2.8rem 2.4rem;
`;

export const tagContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.2rem;
`;

// 칩 오면 수정
export const tag = css`
  padding: 0.2rem 0.6rem;
  border: 1px solid black;
  border-radius: 4px;
`;

export const titleText = (theme: Theme) => css`
  padding-bottom: 0.8rem;
  ${theme.fonts.header1};
`;

export const publisherText = (theme: Theme) => css`
  padding-bottom: 1.2rem;
  color: ${theme.colors.gray4};
  ${theme.fonts.subtitle3};
`;

export const authorText = (theme: Theme) => css`
  padding-bottom: 0.6rem;
  ${theme.fonts.subtitle3};
`;

export const dateText = (theme: Theme) => css`
  padding-bottom: 1.6rem;
  color: ${theme.colors.gray4};
  ${theme.fonts.body3};
`;

export const bestContainer = css`
  ${flexVerticalCenter};
  gap: 0.2rem;
`;

export const bestText = (theme: Theme) => css`
  ${theme.fonts.subtitle4};
`;

export const rankContainer = (theme: Theme) => css`
  display: flex;
  gap: 0.4rem;
  padding-left: 1.2rem;
  color: ${theme.colors.gray5};
  ${theme.fonts.caption3};
`;

export const rankText = (theme: Theme) => css`
  color: ${theme.colors.black1};
  ${theme.fonts.caption2};
`;
