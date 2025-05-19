import { css, type Theme } from '@emotion/react';

const eventSection = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const titleSection = (theme: Theme) => css`
  display: flex;
  padding: 0 2.4rem;
  ${theme.fonts.title1};
`;
export { eventSection, titleSection };
