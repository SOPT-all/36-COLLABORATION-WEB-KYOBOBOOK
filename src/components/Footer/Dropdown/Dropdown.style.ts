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
  padding: 0.4rem 0;
  width: 100%;

  border: 1px solid ${theme.colors.gray3};
  border-radius: 20px;
  overflow: hidden;
  ${theme.fonts.caption3};
  background: ${theme.colors.white};

  li {
    padding: 1.2rem 2rem;
  }
`;
