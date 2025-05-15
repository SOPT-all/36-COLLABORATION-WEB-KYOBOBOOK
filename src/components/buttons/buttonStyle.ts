import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

export const buttonVariantStyles = {
  mainFilled: css`
    width: 17.625rem;
    height: 3rem;
    background-color: ${theme.colors.purple6};
    color: ${theme.colors.white};
    font-family: 'Pretendard', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 140%;
    border: none;
    border-radius: 0.375rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.125rem;
  `,
  mainOutlined: css`
    width: 17.625rem;
    height: 3rem;
    background-color: ${theme.colors.white};
    color: ${theme.colors.purple6};
    font-family: 'Pretendard', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 140%;
    border: 1px solid ${theme.colors.purple7};
    border-radius: 0.375rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.125rem;
  `,
  iconOutlinedPurple: css`
    width: 17.625rem;
    height: 2.625rem;
    background-color: ${theme.colors.white};
    color: ${theme.colors.purple7};
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 140%;
    border: 1px solid ${theme.colors.purple7};
    border-radius: 0.375rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.125rem;
  `,
  iconFilledPurple: css`
    width: 17.625rem;
    height: 2.625rem;
    background-color: ${theme.colors.purple6};
    color: ${theme.colors.white};
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 140%;
    border: none;
    border-radius: 0.375rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.125rem;
  `,
  iconFilledLightPurple: css`
    width: 17.625rem;
    height: 2.625rem;
    background-color: ${theme.colors.purple2};
    color: ${theme.colors.black1};
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 140%;
    border: none;
    border-radius: 0.375rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.125rem;
  `,
  iconOutlinedGray: css`
    width: 17.625rem;
    height: 2.625rem;
    background-color: ${theme.colors.white};
    color: ${theme.colors.black1};
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 140%;
    border: 1px solid ${theme.colors.gray3};
    border-radius: 0.375rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.125rem;
  `,
  iconOnlyHeart: css`
    width: 3rem;
    height: 3rem;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray3};
    border-radius: 0.375rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `,
  iconOnlyExcel: css`
    width: 1.75rem;
    height: 1.75rem;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray3};
    border-radius: 0.25rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `,
};