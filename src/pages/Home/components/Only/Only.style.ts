import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

export const wrapper = css`
  width: 100%;
`;

export const titleRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem auto;
  padding: 0 2.4rem;
  height: 4.4rem;
`;

export const titleText = css`
  ${theme.fonts.title1};
  color: ${theme.colors.black1};
  flex-shrink: 0;
  white-space: nowrap;
`;

export const moreButton = css`
  width: 3.7rem;
  height: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  ${theme.fonts.subtitle4};
  color: ${theme.colors.black1};
  white-space: nowrap;
  flex-shrink: 0;
`;

export const moreText = css`
  ${theme.fonts.subtitle4};
  color: ${theme.colors.black1};
  white-space: nowrap;
  line-height: 1.4rem;
`;

export const overrideImageSize = css`
  img {
    width: 12.8rem !important;
    height: 12.8rem !important;
    object-fit: cover !important;
    border: 1px solid ${theme.colors.gray2};
  }
`;
