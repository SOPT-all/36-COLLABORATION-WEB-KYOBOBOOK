import { css, type Theme } from '@emotion/react';

const keywordSection = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const titleSection = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0 2.4rem;
  ${theme.fonts.title1};
`;

const filterButtonSection = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  padding: 0 2.4rem;
`;

export { keywordSection, titleSection, filterButtonSection };
