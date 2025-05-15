import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

export const chipVariantStyles = {
  outlinedPurple: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.125rem 0.375rem;
    font-family: 'Pretendard', sans-serif;
    font-size: 0.625rem;
    font-weight: 500;
    line-height: 140%;
    color: ${theme.colors.purple7};
    border: 1px solid ${theme.colors.purple7};
    border-radius: 0.25rem;
    background-color: ${theme.colors.white};
  `,
  outlinedGray: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.125rem 0.375rem;
    font-family: 'Pretendard', sans-serif;
    font-size: 0.625rem;
    font-weight: 500;
    line-height: 140%;
    color: ${theme.colors.gray4};
    border: 1px solid ${theme.colors.gray3};
    border-radius: 0.25rem;
    background-color: ${theme.colors.white};
  `,
  filledRoundPurple: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.5rem;
    font-family: 'Pretendard', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 140%;
    color: ${theme.colors.purple7};
    background-color: ${theme.colors.purple1};
    border-radius: 2.5rem;
  `,
  filledGreenText: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.125rem 0.375rem;
    font-family: 'Pretendard', sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 140%;
    color: ${theme.colors.white};
    background-color: ${theme.colors.green1};
    border-radius: 0.25rem;
  `,
  filledGreenCount: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.3125rem;
    height: 1.3125rem;
    font-family: 'Pretendard', sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 140%;
    color: ${theme.colors.white};
    background-color: ${theme.colors.green1};
    border-radius: 0.25rem;
  `,
  filledGrayCount: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.3125rem;
    height: 1.3125rem;
    font-family: 'Pretendard', sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 140%;
    color: ${theme.colors.gray6};
    background-color: ${theme.colors.gray2};
    border-radius: 0.25rem;
  `,
};