import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

import { multilineEllipsis } from '@/styles/textStyles';

export const cardContainer = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  width: 26.4rem;
  border: 1px solid ${theme.colors.gray1};
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: ${theme.effects.shadow2};
`;

export const imgSection = css`
  height: 18.8rem;
  object-fit: cover;
`;

export const contentContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.8rem 1.6rem;
`;

export const topSection = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const writerText = (theme: Theme) => css`
  ${theme.fonts.subtitle2}
`;

export const iconWrapper = css`
  padding: 0.9rem;
`;

export const metaSection = css`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const dateText = (theme: Theme) => css`
  ${theme.fonts.caption4}
  color: ${theme.colors.gray4}
`;

export const descriptionSection = css`
  height: 4rem;
`;

export const descriptionText = (theme: Theme) => css`
  ${multilineEllipsis(2)};
  ${theme.fonts.body2}
  color: ${theme.colors.gray5}
`;

export const emotionTagSection = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  height: 2rem;
`;

export const seeMore = (theme: Theme) => css`
  ${theme.fonts.caption3}
  padding: 0.8rem;
  margin-top: 2rem;
  text-align: center;
  border-top: 1px solid ${theme.colors.gray1};
  color: ${theme.colors.gray6};
`;
