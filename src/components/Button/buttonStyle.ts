import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

// 공통 버튼 스타일 추출
const baseButtonStyle = ({
  width = '17.625rem',
  height,
  bg,
  color,
  border,
  fontWeight = 600,
  radius = '0.375rem',
}: {
  width?: string;
  height: string;
  bg: string;
  color: string;
  border: string;
  fontWeight?: number;
  radius?: string;
}) => css`
  width: ${width};
  height: ${height};
  background-color: ${bg};
  color: ${color};
  font-family: 'Pretendard', sans-serif;
  font-weight: ${fontWeight};
  font-size: 0.875rem;
  line-height: 140%;
  border: ${border};
  border-radius: ${radius};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.125rem;
`;

export const buttonVariantStyles = {
  //1. 기본 버튼
  mainFilled: baseButtonStyle({
    height: '3rem',
    bg: theme.colors.purple6,
    color: theme.colors.white,
    border: 'none',
  }),
  mainOutlined: baseButtonStyle({
    height: '3rem',
    bg: theme.colors.white,
    color: theme.colors.purple7,
    border: `1px solid ${theme.colors.purple7}`,
  }),

  //2. 아이콘 + 텍스트 버튼
  iconOutlinedPurple: baseButtonStyle({
    height: '2.625rem',
    bg: theme.colors.white,
    color: theme.colors.purple7,
    border: `1px solid ${theme.colors.purple7}`,
    fontWeight: 700,
  }),
  iconFilledPurple: baseButtonStyle({
    height: '2.625rem',
    bg: theme.colors.purple6,
    color: theme.colors.white,
    border: 'none',
    fontWeight: 700,
  }),
  iconFilledLightPurple: baseButtonStyle({
    height: '2.625rem',
    bg: theme.colors.purple2,
    color: theme.colors.black1,
    border: 'none',
    fontWeight: 700,
  }),
  iconOutlinedGray: baseButtonStyle({
    height: '2.625rem',
    bg: theme.colors.white,
    color: theme.colors.black1,
    border: `1px solid ${theme.colors.gray3}`,
    fontWeight: 700,
  }),

  // 별도 스타일 (width/height 독립적)
  //3. 아이콘만 있는 버튼
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
