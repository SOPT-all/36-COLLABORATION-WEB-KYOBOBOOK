import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

export const Wrapper = css`
  position: relative;
  width: 100%;
  max-width: 37.5rem;
  padding: 2.4rem 2.4rem 0;
  margin: 0 auto;
  background-color: ${theme.colors.white};
`;

export const TitleText = css`
  ${theme.fonts.title1};
  color: ${theme.colors.black1};
  margin-bottom: 1.6rem;
  padding-right: 3.6rem;
`;

export const AdBadge = css`
  position: absolute;
  top: 3.1rem;
  right: 2.4rem;
  height: 1.4rem;
  padding: 0 0.6rem;
  border-radius: 1rem; 
  background-color: ${theme.colors.gray3};
  color: ${theme.colors.white};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${theme.fonts.caption4};
`;

export const ScrollWrapper = css`
  width: 100%;
`;
