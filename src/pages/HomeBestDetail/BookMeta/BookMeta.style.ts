import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const metaContainer = (theme: Theme, index: number) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
  width: 16rem;
  height: 10rem;
  padding: 2.4rem;
  background-color: ${theme.colors.gray1};
  text-align: center;
  position: relative;
  ${index !== 0 &&
  `
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 25%;
      bottom: 25%;
      width: 1px;
      height: 5.6rem;
      background-color: ${theme.colors.gray2};
    }
  `}
`;

export const titleText = (theme: Theme) => css`
  width: 11.2rem;
  color: ${theme.colors.gray4};
  ${theme.fonts.caption3}
`;

export const contentText = (theme: Theme) => css`
  width: 11.2rem;
  color: ${theme.colors.gray6};
  ${theme.fonts.body1}
`;
