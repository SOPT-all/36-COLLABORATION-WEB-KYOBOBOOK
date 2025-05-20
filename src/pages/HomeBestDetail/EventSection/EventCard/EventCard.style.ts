import { css, type Theme } from '@emotion/react';

const card = css`
  display: flex;
  flex-direction: column;
  width: 26rem;
  flex-shrink: 0;
`;

const image = css`
  margin-bottom: 1.2rem;
  width: 100%;
  height: 14rem;
  border-radius: 12px;
  object-fit: cover;
`;

const title = (theme: Theme) => css`
  margin-bottom: 0.6rem;
  ${theme.fonts.body1};
`;

const date = (theme: Theme) => css`
  color: ${theme.colors.gray4};
  ${theme.fonts.caption3};
`;

export { card, image, title, date };
