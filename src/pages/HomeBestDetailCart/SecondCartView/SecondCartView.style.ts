import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

const Wrapper = (theme: Theme) => css`
  width: 100%;
  max-width: 73rem;
  min-width: 37.5rem;
  background-color: ${theme.colors.white};
  flex-direction: column;
  padding: 2.6rem 2.4rem 0;
`;

const Title = (theme: Theme) => css`
  font: ${theme.fonts.subtitle4};
  color: ${theme.colors.black1};
`;

const cardWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.2rem 0rem;
`;

const cartButton = (theme: Theme) => css`
  padding: 0.6rem 2rem;
  background-color: ${theme.colors.purple6};
  color: ${theme.colors.gray6};
  border: 1px solid ${theme.colors.gray2};
  border-radius: 4px;
  font: ${theme.fonts.caption2};
  cursor: pointer;
`;

const title = (theme: Theme) => css`
  font: ${theme.fonts.caption2};
  color: ${theme.colors.black1};
`;

const price = (theme: Theme) => css`
  font: ${theme.fonts.caption1};
  color: ${theme.colors.black1};
`;

export const SecondCartViewStyle = {
  Wrapper,
  Title,
  cardWrapper,
  cartButton,
  title,
  price,
};
