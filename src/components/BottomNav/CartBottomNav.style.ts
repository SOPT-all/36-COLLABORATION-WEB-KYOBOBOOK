import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

const wrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding: 1.75rem;
  background-color: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.gray3};
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 73rem;
  min-width: 37.5rem;
  z-index: 100;
`;

const priceWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const label = (theme: Theme) => css`
  ${theme.fonts.subtitle4};
  color: ${theme.colors.black1};
`;

const amount = (theme: Theme) => css`
  ${theme.fonts.subtitle1};
  color: ${theme.colors.black1};
`;

const purchaseButton = (theme: Theme) => css`
  width: 100%;
  text-align: center;
  height: 6rem;
  background-color: ${theme.colors.purple6};
  color: ${theme.colors.white};
  font: ${theme.fonts.body1};
  border-radius: 0.8rem;
  border: none;
  cursor: pointer;
`;

export const CartBottomNavStyle = {
  wrapper,
  priceWrapper,
  label,
  amount,
  purchaseButton,
};
