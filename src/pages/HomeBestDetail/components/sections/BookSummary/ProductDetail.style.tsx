import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

import {
  flexCenter,
  flexVerticalCenter,
  flexBetweenCenter,
  flexColumn,
  flexColumnCenter,
} from '@/styles/sharedStyles';

export const productWrapper = css`
  padding: 0 2.4rem;
`;

export const priceWrapper = css`
  margin: 2.6rem 0 1.6rem 0;
  ${flexVerticalCenter};
  gap: 0.4rem;
`;

export const saleText = (theme: Theme) => css`
  color: ${theme.colors.green1};
  ${theme.fonts.title3};
`;

export const priceText = (theme: Theme) => css`
  ${theme.fonts.title2};
`;

export const priceNumber = (theme: Theme) => css`
  ${theme.fonts.title1};
`;

export const beforeText = (theme: Theme) => css`
  text-decoration: line-through;
  color: ${theme.colors.gray4};
  ${theme.fonts.body3};
`;

export const benefitWrapper = (theme: Theme) => css`
  ${flexBetweenCenter};
  padding: 1.6rem 0;
  border-top: 1px solid ${theme.colors.gray2};
`;

export const benefitText = (theme: Theme) => css`
  ${theme.fonts.subtitle4};
`;

export const pointWrapper = css`
  ${flexBetweenCenter};
  gap: 0.8rem;
`;

export const pointText = (theme: Theme) => css`
  color: ${theme.colors.green1};
  ${theme.fonts.subtitle4};
`;

export const deliverWrapper = (theme: Theme) => css`
  ${flexColumn};
  gap: 1rem;
  padding: 1.6rem 0;
  border-top: 1px solid ${theme.colors.gray2};
`;

export const deliverFistWrapper = css`
  ${flexBetweenCenter};
`;

export const deliverRightWrapper = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.4rem;
`;

// 칩 오면 수정
export const deliverChip = (theme: Theme) => css`
  ${flexVerticalCenter};
  padding: 0 0.8rem;
  height: 2rem;
  border-radius: 4rem;
  background-color: ${theme.colors.purple1};
  color: ${theme.colors.purple7};
  ${theme.fonts.caption3};
`;

export const deliverText = (theme: Theme) => css`
  ${theme.fonts.body2};
`;

export const arriveText = (theme: Theme) => css`
  ${theme.fonts.subtitle4};
`;

export const deliverInfoWrapper = (theme: Theme) => css`
  ${flexColumn};
  gap: 1.4rem;
  padding: 1.6rem 0;
  border-top: 1px solid ${theme.colors.gray2};
`;

export const deliverInfoText = (theme: Theme) => css`
  text-align: right;
  ${theme.fonts.body2};
`;

export const loginText = (theme: Theme) => css`
  text-decoration: underline;
  color: ${theme.colors.green1};
  ${theme.fonts.caption2};
`;

export const infoWrapper = (theme: Theme) => css`
  padding: 1.2rem;
  width: 100%;
  background-color: ${theme.colors.gray1};
  border-radius: 8px;
`;

export const firstLineContainer = css`
  ${flexVerticalCenter};
  display: flex;
  gap: 0.2rem;
`;

export const firstLineText = (theme: Theme) => css`
  ${theme.fonts.body3};
`;

export const moreButton = (theme: Theme) => css`
  ${flexVerticalCenter}
  gap: 0.2rem;
  padding: 0 0.2rem 0 0.6rem;
  margin-left: auto;
  height: 2.4rem;
  background-color: white;
  border: 1px solid ${theme.colors.gray3};
  border-radius: 4px;
`;

export const moreText = (theme: Theme) => css`
  ${theme.fonts.caption2};
`;

export const secondLineText = (theme: Theme) => css`
  color: ${theme.colors.gray4};
  ${theme.fonts.caption3};
`;

export const alarmInfoContainer = css`
  ${flexBetweenCenter};
`;

export const alarmText = (theme: Theme) => css`
  width: 22rem;
  color: ${theme.colors.gray5};
  ${theme.fonts.caption3};
`;

export const alarmButton = (theme: Theme) => css`
  ${flexCenter};
  gap: 0.2rem;
  padding: 0 0.8rem;
  height: 2.8rem;
  border: 1px solid ${theme.colors.purple7};
  border-radius: 4px;
  background-color: ${theme.colors.white};
`;

export const alarmButtonText = (theme: Theme) => css`
  color: ${theme.colors.purple7};
  ${theme.fonts.caption3};
`;

export const alarmSecondLineText = (theme: Theme) => css`
  margin-top: 0.8rem;
  color: ${theme.colors.gray5};
  ${theme.fonts.caption3};
`;

export const reviewWrapper = (theme: Theme) => css`
  ${flexVerticalCenter};
  height: 10.8rem;
  width: 100%;
  margin: auto;
  border: 1px solid ${theme.colors.gray2};
  border-radius: 12px;
`;
export const reviewBox = (theme: Theme) => css`
  flex: 1;
  ${flexColumnCenter};

  position: relative;

  &:first-of-type::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: 1px;
    height: 3.3rem;
    background-color: ${theme.colors.gray2};
  }
`;
export const ratingText = (theme: Theme) => css`
  color: ${theme.colors.green1};
  ${theme.fonts.title3};
`;

export const emotionText = (theme: Theme) => css`
  color: ${theme.colors.purple7};
  ${theme.fonts.subtitle2};
`;

export const reviewText = (theme: Theme) => css`
  padding-top: 0.4rem;
  color: ${theme.colors.gray5};
  ${theme.fonts.caption3};
`;

export const locationButton = (theme: Theme) => css`
  ${flexCenter};
  gap: 0.2rem;
  width: 100%;
  padding: 0.7rem 0;
  margin: 2rem 0;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray3};
  border-radius: 6px;
`;

export const locationText = (theme: Theme) => css`
  ${theme.fonts.body3};
`;

export const buttonWrapper = css`
  ${flexCenter};
  width: 100%;
`;

export const buttonContainer = css`
  flex: 1;
  ${flexCenter};
  gap: 0.4rem;
  padding: 1.2rem 0;
  background-color: transparent;
  border: none;
`;

export const buttonText = (theme: Theme) => css`
  ${theme.fonts.body2};
`;

export const wishCountText = (theme: Theme) => css`
  color: ${theme.colors.gray4};
  ${theme.fonts.caption3};
`;
