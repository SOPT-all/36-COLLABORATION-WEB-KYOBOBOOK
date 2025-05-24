import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

const Wrapper = (theme: Theme) => css`
  width: 100%;
  max-width: 73rem;
  min-width: 37.5rem;
  background-color: ${theme.colors.white};
  padding: 2.8rem 1.6rem;
`;

const title = (theme: Theme) => css`
  font: ${theme.fonts.subtitle1};
  color: ${theme.colors.black1};
`;

const itemList = css`
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;
  gap: 0.8rem;
`;

const item = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.gray1};
  padding: 1.3rem 1.6rem;
  border-radius: 0.75rem;
  font: ${theme.fonts.body2};
  color: ${theme.colors.black2};
`;

const cartBox = (theme: Theme) => css`
  background-color: ${theme.colors.gray1};
  padding: 1.6rem;
  border-radius: 0.75rem;
  line-height: 1.6;
  margin-top: 2.6rem;

  h3 {
    font: ${theme.fonts.subtitle4};
    color: ${theme.colors.black1};
    margin-bottom: 1rem;
  }
`;

const list = (theme: Theme) => css`
  font: ${theme.fonts.body2};
  color: ${theme.colors.gray4};
  flex-direction: column;
  gap: 0.8rem;

  span {
    font: ${theme.fonts.body2};
    color: ${theme.colors.gray4};
  }
`;

const foldButton = css`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const FourthCartViewStyle = {
  Wrapper,
  title,
  itemList,
  item,
  cartBox,
  list,
  foldButton,
};
