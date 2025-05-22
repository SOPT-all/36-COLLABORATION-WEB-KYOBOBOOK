import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

const wrapper = (theme: Theme) => css`
  display: flex;
  padding: 1.75rem 1.5rem;
  border-top: 1px solid ${theme.colors.gray3};
  background-color: ${theme.colors.white};
  bottom: 0;
  width: 100%;
  max-width: 73rem;
  min-width: 37.5rem;
  z-index: ${theme.zIndex.three};
  position: fixed;
`;

const Button = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  flex: 1;
  cursor: pointer;
`;
const Label = (theme: Theme, isHome: boolean) => css`
  font: ${theme.fonts.caption3};
  color: ${isHome ? theme.colors.green1 : theme.colors.gray4};
  margin-top: 0.4rem;
`;
export const HomeBottomNavStyle = {
  wrapper,
  Button,
  Label,
};
