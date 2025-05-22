import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

import { multilineEllipsis } from '@/styles/textStyles';

const cardWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 12.8rem;
  gap: 0.7rem;
`;

const imgStyle = (imgHeight: string) => css`
  width: 100%;
  height: ${imgHeight};
`;

const cartButton = (theme: Theme) => css`
  width: 100%;
  padding: 0.3rem 2rem;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray2};
  border-radius: 4px;
  font: ${theme.fonts.caption2};
  color: ${theme.colors.gray6};
  cursor: pointer;
`;

const title = (theme: Theme) => css`
  font: ${theme.fonts.caption2};
  color: ${theme.colors.black1};
  ${multilineEllipsis(2)};
`;

const price = (theme: Theme) => css`
  font: ${theme.fonts.caption1};
  color: ${theme.colors.black1};
`;

const won = (theme: Theme) => css`
  margin-left: 0.2rem;
  ${theme.fonts.caption3};
  color: ${theme.colors.black1};
`;

export const CartCardStyle = {
  cardWrapper,
  imgStyle,
  cartButton,
  title,
  price,
  won,
};
