import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

import { multilineEllipsis } from '@/styles/textStyles';

export const authorStyles = {
  wrapper: css`
    padding: 0 2.4rem;
    width: 100%;
    overflow-x: auto;
  `,

  titleText: (theme: Theme) => css`
    padding: 2rem 0;
    ${theme.fonts.title1}
  `,

  container: (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1.6rem;
    padding: 2rem 2rem 4rem 2rem;
    border-radius: 20px;
    background-color: ${theme.colors.gray1};
  `,

  image: css`
    border-radius: 50%;
  `,

  authorWrapper: (theme: Theme) => css`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-bottom: 0.7rem;
    color: ${theme.colors.gray5};
    ${theme.fonts.subtitle3};
  `,

  authorName: (theme: Theme) => css`
    color: ${theme.colors.black1};
    ${theme.fonts.subtitle2};
  `,

  iconWrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;
    border: none;
  `,

  authorMeta: (theme: Theme) => css`
    display: flex;
    align-items: center;
    gap: 0.2rem;
    color: ${theme.colors.gray5};
    ${theme.fonts.caption3};
  `,

  authorType: (theme: Theme) => css`
    width: fit-content;
    padding: 0.4rem 1.2rem;
    margin: 2rem 0;
    background-color: ${theme.colors.white};
    border-radius: 40px;
    color: ${theme.colors.gray5};
    ${theme.fonts.body3};
  `,

  authInfo: (theme: Theme) => css`
    ${multilineEllipsis(4)};
    color: ${theme.colors.gray5};
    ${theme.fonts.body3};
  `,

  moreText: (theme: Theme) => css`
    display: flex;
    align-items: center;
    gap: 0.2rem;
    padding: 0.6rem 0;
    color: ${theme.colors.gray4};
    ${theme.fonts.body3};
  `,

  bookContainer: css`
    display: flex;
  `,

  publishWrapper: css`
    position: relative;
    padding: 4.2rem 0;
  `,

  contentText: (theme: Theme) => css`
    ${multilineEllipsis(5)};
    color: ${theme.colors.gray5};
    ${theme.fonts.body3};
  `,

  addText: (theme: Theme) => css`
    position: absolute;
    bottom: 0.2rem;
    right: 0;
    color: ${theme.colors.green1};
    ${theme.fonts.body3};
  `,
};
