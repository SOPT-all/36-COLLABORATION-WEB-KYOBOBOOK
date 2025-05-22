import { css, type Theme } from '@emotion/react';

const container = (theme: Theme) => css`
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
  gap: 0.2rem;
  min-width: 0;
`;

const topRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const rankBadgeBase = (theme: Theme) => css`
  padding: 0.2rem 0.6rem;
  height: 2.1rem;
  border-radius: 4px;
  ${theme.fonts.caption2};
`;

const rankBadgeTop3 = (theme: Theme) => css`
  background-color: ${theme.colors.green1};
  color: ${theme.colors.white};
`;

const rankBadgeOther = (theme: Theme) => css`
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
  margin-bottom: 0.6rem;
`;

const title = (theme: Theme) => css`
  width: 100%;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${theme.fonts.subtitle4};
`;

const subtitle = (theme: Theme) => css`
  color: ${theme.colors.gray4};
  ${theme.fonts.caption3};
`;

const priceRow = css`
  display: flex;
  gap: 0.6rem;
  margin-bottom: 0.8rem;
`;

const discount = (theme: Theme) => css`
  color: ${theme.colors.green1};
  ${theme.fonts.caption1};
`;

const price = (theme: Theme) => css`
  ${theme.fonts.caption1};
`;

const won = (theme: Theme) => css`
  ${theme.fonts.caption3};
`;

const point = (theme: Theme) => css`
  display: flex;
  align-items: center;
  color: ${theme.colors.gray4};
  ${theme.fonts.caption4};
`;

const reviewRow = css`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  margin-bottom: 0.6rem;
`;

const rating = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  ${theme.fonts.caption1};

  svg {
    fill: ${theme.colors.green1};
    margin-right: 0.2rem;
  }
`;

const separator = (theme: Theme) => css`
  color: ${theme.colors.gray3};
  ${theme.fonts.caption4};
`;

const review = (theme: Theme) => css`
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

const deliveryBadge = (theme: Theme) => css`
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

const deliveryDate = (theme: Theme) => css`
  ${theme.fonts.caption1};
`;

const deliveryText = (theme: Theme) => css`
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
