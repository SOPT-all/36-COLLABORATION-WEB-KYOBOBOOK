import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

import { multilineEllipsis } from '@/styles/textStyles';

export const descriptionWrapper = css`
  margin: 6rem 0 3.8rem 0;
  display: flex;
  flex-direction: column;
  gap: 3.8rem;
`;

export const bookInfoWrapper = css`
  padding: 2.4rem 2.4rem 0 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 3.8rem;
`;

export const titleText = (theme: Theme) => css`
  ${theme.fonts.title1};
  margin-bottom: 2rem;
`;

export const contentText = (theme: Theme) => css`
  ${multilineEllipsis(6)};
  ${theme.fonts.subtitle4};
  position: relative;
`;

export const gradationBar = (theme: Theme) => css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2rem;
  background: ${theme.colors.whiteGr};
  z-index: 1;
`;

export const addText = (theme: Theme) => css`
  margin-top: 1.2rem;
  text-align: right;
  color: ${theme.colors.green1};
  ${theme.fonts.body3};
`;

export const tocWrapper = css`
  padding: 0 2.4rem 2.4rem 2.4rem;
`;

export const tocText = (theme: Theme) => css`
  ${multilineEllipsis(5)};
  color: ${theme.colors.gray5};
  ${theme.fonts.body3};
`;

export const imgWrapper = css`
  padding: 0 2.4rem;
`;
