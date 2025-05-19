import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const bookReviewStyles = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    padding: 0 2.4rem;
    margin-bottom: 4.4rem;
  `,

  title: css`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-bottom: 0.6rem;
  `,

  titleText: (theme: Theme) => css`
    ${theme.fonts.title1};
  `,

  description: (theme: Theme) => css`
    color: ${theme.colors.gray5};
    ${theme.fonts.body3};
  `,

  ratingTitle: (theme: Theme) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 1.6rem;
    color: ${theme.colors.gray4};
    ${theme.fonts.subtitle2};
  `,

  ratingText: (theme: Theme) => css`
    padding-right: 0.2rem;
    color: ${theme.colors.green1};
    ${theme.fonts.header1};
  `,

  reviewText: (theme: Theme) => css`
    text-align: center;
    ${theme.fonts.subtitle2};
    margin-bottom: 1.6rem;
  `,

  response: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  perfect: (theme: Theme) => css`
    margin-right: 0.4rem;
    color: ${theme.colors.purple7};
    ${theme.fonts.subtitle2};
  `,

  barWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  `,

  cardWrapper: css`
    padding: 2.4rem;
    margin-bottom: 0.8rem;
  `,

  moreWrapper: css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
  `,

  moreText: (theme: Theme) => css`
    ${theme.fonts.subtitle4}
    color: ${theme.colors.gray4}
  `,
};
