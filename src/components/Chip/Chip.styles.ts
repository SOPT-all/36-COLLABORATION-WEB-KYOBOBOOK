import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

export const chipVariantStyles = {
  outlinedPurple: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.2rem 0.6rem;
    gap: 1rem;
    ${theme.fonts.caption3};
    color: ${theme.colors.purple7};
    border: 1px solid ${theme.colors.purple7};
    border-radius: 4px;
    background-color: ${theme.colors.white};
  `,
  outlinedGray: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.2rem 0.6rem;
    ${theme.fonts.caption3};
    color: ${theme.colors.gray4};
    border: 1px solid ${theme.colors.gray3};
    border-radius: 4px;
    background-color: ${theme.colors.white};
  `,
  filledRoundPurple: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    padding: 0 0.8rem;
    gap: 1rem;
    ${theme.fonts.caption3};
    text-align: right;
    color: ${theme.colors.purple7};
    background-color: ${theme.colors.purple1};
    border-radius: 40px;
  `,
  filledGreenText: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.2rem 0.6rem;
    gap: 1rem;
    ${theme.fonts.caption2};
    color: ${theme.colors.white};
    background-color: ${theme.colors.green1};
    border-radius: 4px;
  `,
  filledGreenCount: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.1rem;
    height: 2.1rem;
    padding: 0.2rem 0.6rem;
    gap: 1rem;
    ${theme.fonts.caption2};
    color: ${theme.colors.white};
    background-color: ${theme.colors.green1};
    border-radius: 4px;
  `,
  filledGrayCount: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.1rem;
    padding: 0.2rem 0.6rem;
    gap: 1rem;
    ${theme.fonts.caption2};
    color: ${theme.colors.gray6};
    background-color: ${theme.colors.gray2};
    border-radius: 4px;
  `,
};
