import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

export const wrapper = css`
  padding-bottom: 3.2rem;
`;

export const titleRow = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
  padding: 0 2.4rem;
`;

export const titleText = css`
  ${theme.fonts.title1};
  padding: 0.8rem 0;
  color: ${theme.colors.black1};
`;

export const moreButton = css`
  width: 5.7rem;
  background: none;
  border: none;
  cursor: pointer;
  ${theme.fonts.subtitle4};
  color: ${theme.colors.black1};
  white-space: nowrap;
`;

export const overrideImageSize = css`
  img {
    width: 12.8rem !important;
    height: 12.8rem !important;
    object-fit: cover !important;
    border: 1px solid ${theme.colors.gray2};
  }
`;

