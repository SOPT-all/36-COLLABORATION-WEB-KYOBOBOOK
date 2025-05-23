import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

type Position = {
  top: string;
  left: string;
};

export const wrapper = css`
  width: 32.7rem;
  height: 10rem;
  position: relative;
  border-radius: 0.8rem;
  overflow: hidden;
  flex-shrink: 0;
`;

export const image = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const title = ({ top, left }: Position) => css`
  position: absolute;
  top: ${top};
  left: ${left};
  ${theme.fonts.subtitle2};
  color: ${theme.colors.black1};
`;

export const subtitle = ({ top, left }: Position) => css`
  position: absolute;
  top: ${top};
  left: ${left};
  ${theme.fonts.body2};
  color: ${theme.colors.gray4};
`;

