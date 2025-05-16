import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

import { multilineEllipsis } from '@/styles/textStyles';

export const reviewCardStyle = {
  cardContainer: (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    width: 26.4rem;
    height: 39.3rem;
    border: 1px solid ${theme.colors.gray1};
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: ${theme.effects.shadow2};
  `,

  imgSection: css`
    height: 18.8rem;
    object-fit: cover;
  `,

  contentContainer: css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.8rem 1.6rem;
  `,

  topSection: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  writerText: (theme: Theme) => css`
    ${theme.fonts.subtitle2}
  `,

  iconWrapper: css`
    padding: 0.9rem;
  `,

  metaSection: css`
    display: flex;
    align-items: center;
    gap: 0.4rem;
  `,

  dateText: (theme: Theme) => css`
    ${theme.fonts.caption4}
    color: ${theme.colors.gray4}
  `,

  descriptionSection: css`
    height: 4rem;
  `,

  descriptionText: (theme: Theme) => css`
    ${multilineEllipsis(2)};
    ${theme.fonts.body2}
    color: ${theme.colors.gray5}
  `,
  emotionTagSection: css`
    display: flex;
    gap: 0.4rem;
  `,

  seeMore: (theme: Theme) => css`
    ${theme.fonts.caption3}
    padding: 0.8rem;
    margin-top: 2rem;
    text-align: center;
    border-top: 1px solid ${theme.colors.gray1};
    color: ${theme.colors.gray6};
  `,
};
