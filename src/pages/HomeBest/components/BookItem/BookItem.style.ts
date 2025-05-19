import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

export const container = css`
  display: flex;
  border-bottom: 1px solid ${theme.colors.gray2};
  padding: 2.4rem 0;
  gap: 1.4rem;
`;

export const imageWrapper = css`
  flex-shrink: 0;
  width: 10rem;
  height: 14.4rem;
`;

export const bookImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const content = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const topRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const rankBadgeBase = css`
  padding: 0.2rem 0.6rem;
  height: 2.1rem;
  border-radius: 4px;
  ${theme.fonts.caption2};
`;

export const rankBadgeTop3 = css`
  background-color: ${theme.colors.green1};
  color: ${theme.colors.white};
`;

export const rankBadgeOther = css`
  background-color: ${theme.colors.gray2};
  color: ${theme.colors.gray6};
`;

export const likeButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 1.2rem;
  line-height: 0;
  border: none;
  background: none;
`;

export const titleContainer = css`
  display: flex;
  flex-direction: column;
  gap: 0.2px;
  margin-bottom: 0.4rem;
`;

export const title = css`
  ${theme.fonts.subtitle4};
`;

export const subtitle = css`
  color: ${theme.colors.gray4};
  ${theme.fonts.caption3};
`;

export const priceRow = css`
  display: flex;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
`;

export const discount = css`
  color: ${theme.colors.green1};
  ${theme.fonts.caption1};
`;

export const price = css`
  ${theme.fonts.caption1};
`;

export const won = css`
  ${theme.fonts.caption3};
`;

export const point = css`
  color: ${theme.colors.gray4};
  ${theme.fonts.caption4};
`;

export const reviewRow = css`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  margin-bottom: 0.4rem;
`;

export const rating = css`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  ${theme.fonts.caption1};

  svg {
    fill: ${theme.colors.green1};
    margin-right: 0.2rem;
  }
`;

export const separator = css`
  color: ${theme.colors.gray3};
  ${theme.fonts.caption4};
`;

export const review = css`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  color: ${theme.colors.purple7};
  ${theme.fonts.caption2};

  svg {
    margin-right: 0.2rem;
  }
`;

export const deliveryRow = css`
  display: flex;
  gap: 0.2rem;
  align-items: center;
`;

export const deliveryBadge = css`
  display: flex;
  align-items: center;
  height: 2rem;
  padding: 0 0.8rem;
  margin-right: 0.2rem;

  background-color: ${theme.colors.purple1};
  color: ${theme.colors.purple7};
  border-radius: 40px;
  ${theme.fonts.caption3};
`;

export const deliveryDate = css`
  ${theme.fonts.caption1};
`;

export const deliveryText = css`
  ${theme.fonts.caption3};
`;
