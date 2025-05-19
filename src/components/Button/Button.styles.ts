import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

export const buttonVariantStyles = {
  mainFilled: css`
    width: 28.2rem;
    height: 4.8rem;
    background-color: ${theme.colors.purple6};
    color: ${theme.colors.white};
    ${theme.fonts.body1};
    border: none;
    border-radius: 0.6rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
  `,
  mainOutlined: css`
    width: 28.2rem;
    height: 4.8rem;
    background-color: ${theme.colors.white};
    color: ${theme.colors.purple6};
    ${theme.fonts.body1};
    border: 1px solid ${theme.colors.purple7};
    border-radius: 0.6rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
  `,
  iconOutlinedPurple: css`
    width: 28.2rem;
    height: 4.2rem;
    background-color: ${theme.colors.white};
    color: ${theme.colors.purple7};
    ${theme.fonts.body1};
    border: 1px solid ${theme.colors.purple7};
    border-radius: 0.6rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
  `,
  iconFilledPurple: css`
    width: 28.2rem;
    height: 4.2rem;
    background-color: ${theme.colors.purple6};
    color: ${theme.colors.white};
    ${theme.fonts.body1};
    border: none;
    border-radius: 0.6rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
  `,
  iconFilledLightPurple: css`
    width: 28.2rem;
    height: 4.2rem;
    background-color: ${theme.colors.purple2};
    color: ${theme.colors.black1};
    ${theme.fonts.body1};
    border: none;
    border-radius: 0.6rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
  `,
  iconOutlinedGray: css`
    width: 28.2rem;
    height: 4.2rem;
    background-color: ${theme.colors.white};
    color: ${theme.colors.black1};
    ${theme.fonts.body1};
    border: 1px solid ${theme.colors.gray3};
    border-radius: 0.6rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
  `,
  iconOnlyHeart: css`
    width: 4.8rem;
    height: 4.8rem;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray3};
    border-radius: 0.6rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `,
  iconOnlyExcel: css`
    width: 2.8rem;
    height: 2.8rem;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray3};
    border-radius: 0.4rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `,
};


