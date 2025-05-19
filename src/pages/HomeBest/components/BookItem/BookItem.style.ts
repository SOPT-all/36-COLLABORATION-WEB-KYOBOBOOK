import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

const container = css`
  display: flex;
  border-bottom: 1px solid ${theme.colors.gray2};
  padding: 2.4rem 0;
  gap: 1.4rem;
`;

const imageWrapper = css`
  flex-shrink: 0;
  width: 10rem;
  height: 14.4rem;
`;

const bookImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const content = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const topRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const rankBadgeBase = css`
  padding: 0.2rem 0.6rem;
  height: 2.1rem;
  border-radius: 4px;
  ${theme.fonts.caption2};
`;

const rankBadgeTop3 = css`
  background-color: ${theme.colors.green1};
  color: ${theme.colors.white};
`;

const rankBadgeOther = css`
  background-color: ${theme.colors.gray2};
  color: ${theme.colors.gray6};
`;

const likeButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 1.2rem;
  line-height: 0;
  border: none;
  background: none;
`;

const titleContainer = css`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-bottom: 0.4rem;
`;

const title = css`
  ${theme.fonts.subtitle4};
`;

const subtitle = css`
  color: ${theme.colors.gray4};
  ${theme.fonts.caption3};
`;

const priceRow = css`
  display: flex;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
`;

const discount = css`
  color: ${theme.colors.green1};
  ${theme.fonts.caption1};
`;

const price = css`
  ${theme.fonts.caption1};
`;

const won = css`
  ${theme.fonts.caption3};
`;

const point = css`
  color: ${theme.colors.gray4};
  ${theme.fonts.caption4};
`;

const reviewRow = css`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  margin-bottom: 0.4rem;
`;

const rating = css`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  ${theme.fonts.caption1};

  svg {
    fill: ${theme.colors.green1};
    margin-right: 0.2rem;
  }
`;

const separator = css`
  color: ${theme.colors.gray3};
  ${theme.fonts.caption4};
`;

const review = css`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  color: ${theme.colors.purple7};
  ${theme.fonts.caption2};

  svg {
    margin-right: 0.2rem;
  }
`;

const deliveryRow = css`
  display: flex;
  gap: 0.2rem;
  align-items: center;
`;

const deliveryBadge = css`
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

const deliveryDate = css`
  ${theme.fonts.caption1};
`;

const deliveryText = css`
  ${theme.fonts.caption3};
`;

export {
  container,
  imageWrapper,
  bookImage,
  content,
  topRow,
  rankBadgeBase,
  rankBadgeTop3,
  rankBadgeOther,
  likeButton,
  titleContainer,
  title,
  subtitle,
  priceRow,
  discount,
  price,
  won,
  point,
  reviewRow,
  rating,
  separator,
  review,
  deliveryRow,
  deliveryBadge,
  deliveryDate,
  deliveryText,
};
