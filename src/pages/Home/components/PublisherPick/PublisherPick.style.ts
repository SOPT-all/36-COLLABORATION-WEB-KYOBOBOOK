import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

export const Wrapper = css`
display: flex;
  width: 100%;
  padding: 0.8rem 2.4rem 1.6rem;
  background-color: ${theme.colors.white};
  justify-content: space-between;
  align-items:center;
`;

export const TitleText = css`
  ${theme.fonts.title1};
  color: ${theme.colors.black1};
`;

export const AdBadge = css`
display:flex;

  height: 1.4rem;
  padding: 0 0.6rem;
  border-radius: 10px; 
  background-color: ${theme.colors.gray3};
  color: ${theme.colors.white};
  ${theme.fonts.caption4};
`;

export const ScrollWrapper = css`
  width: 100%;
`;
