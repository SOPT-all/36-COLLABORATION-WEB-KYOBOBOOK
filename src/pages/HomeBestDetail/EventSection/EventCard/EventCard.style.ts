import { css, type Theme } from '@emotion/react';

export const card = css`
  display: flex;
  flex-direction: column;
  width: 26rem;
  flex-shrink: 0;
`;

export const image = css`
  margin-bottom: 1.2rem;
  width: 100%;
  height: 14rem;
  border-radius: 12px;
  object-fit: cover;
`;

export const title = (theme: Theme) => css`
  margin-bottom: 0.6rem;
  ${theme.fonts.body1};
`;

export const date = (theme: Theme) => css`
  color: ${theme.colors.gray4};
  ${theme.fonts.caption3};
`;
