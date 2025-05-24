import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

import {
  flexBetweenCenter,
  flexCenter,
  flexColumn,
  flexVerticalCenter,
} from '@/styles/sharedStyles';

export const imageBackground = (theme: Theme) => css`
  ${flexCenter};
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
  width: 17rem;
  height: 25rem;
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

export const imageSkeleton = css`
  width: 17rem;
  height: 25rem;
  background: #eee;
  background: #ddd;
  background-image: linear-gradient(
    90deg,
    #ddd 0%,
    #eaeaea 40%,
    #f5f5f5 50%,
    #eaeaea 60%,
    #ddd 100%
  );

  background-size: 200% 100%;
  animation: shimmer 1.8s linear infinite;

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

export const imageHidden = css`
  opacity: 0;
  position: absolute;
  pointer-events: none;
`;
