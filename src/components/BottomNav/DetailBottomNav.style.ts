import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

const wrapper = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.875rem;
  padding: 1.75rem;
  background-color: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.gray3};
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 73rem;
  min-width: 37.5rem;
  z-index: ${theme.zIndex.three};
`;

const iconButton = (theme: Theme) => css`
  display: flex;
  width: 4.8rem;
  height: 4.8rem;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray3};
  border-radius: 0.8rem;
  align-items: center;
  justify-content: center;
`;

const cartButton = (theme: Theme) => css`
  flex: 1;
  height: 4.8rem;
  background-color: ${theme.colors.white};
  color: ${theme.colors.purple7};
  font: ${theme.fonts.body1};
  border: 1px solid ${theme.colors.purple7};
  border-radius: 0.8rem;
  cursor: pointer;
`;

const purchaseButton = (theme: Theme) => css`
  flex: 1;
  height: 4.8rem;
  background-color: ${theme.colors.purple6};
  color: ${theme.colors.white};
  font: ${theme.fonts.body1};
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
`;

export const DetailBottomNavStyle = {
  wrapper,
  iconButton,
  cartButton,
  purchaseButton,
};
