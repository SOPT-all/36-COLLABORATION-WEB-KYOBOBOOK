import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

const wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.8rem;
  position: fixed;
  right: 50%;
  bottom: 12rem;
  transform: translateX(30rem);
  z-index: 100;

  @media (max-width: 375px) {
    right: 1.6rem;
    transform: translateX(0);
  }
`;

const floatingButton = css`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const scrollTopButton = (theme: Theme) => css`
  display: flex;
  width: 4.4rem;
  height: 4.4rem;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray3};
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const FloaterStyle = {
  wrapper,
  floatingButton,
  scrollTopButton,
};
