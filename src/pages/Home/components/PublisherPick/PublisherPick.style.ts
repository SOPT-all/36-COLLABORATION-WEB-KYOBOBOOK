import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

export const Wrapper = css`
  position: relative;
  width: 100%;
  padding: 0 2.4rem;
  background-color: ${theme.colors.white};
`;

export const textWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
  margin-bottom: 1.6rem;
`;

export const TitleText = css`
  ${theme.fonts.title1};
  color: ${theme.colors.black1};
`;

export const AdBadge = css`
  top: 3.1rem;
  right: 2.4rem;
  height: 1.4rem;
  padding: 0 0.6rem;
  border-radius: 1rem; 
  background-color: ${theme.colors.gray3};
  color: ${theme.colors.white};
  align-items: center;
  justify-content: center;
  ${theme.fonts.caption4};
`;

export const ScrollWrapper = css`
  width: 100%;
`;
