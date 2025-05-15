import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

export const dropdownWrapper = css`
  display: inline-block;
  position: relative;
  width: 100%;
`;

export const triggerButton = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;
  padding: 1.2rem 2rem;
  width: 100%;

  border-radius: 20px;
  border: 1px solid ${theme.colors.gray3};

  ${theme.fonts.caption3};
  background: ${theme.colors.white};
  color: ${theme.colors.black1};
`;

export const dropdownMenu = css`
  position: absolute;
  bottom: 100%;
  left: 0;
  margin-bottom: 0.8rem;
  width: 100%;

  overflow: hidden;
  ${theme.fonts.caption3};
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray3};
  border-radius: 20px;
  padding: 0.4rem 0;
  li {
    padding: 1.2rem 2rem;
    ${theme.fonts.caption2};
  }
`;
