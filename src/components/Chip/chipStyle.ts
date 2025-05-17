import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

// 공통 스타일 추출
const baseChipStyle = ({
  padding = '0.125rem 0.375rem',
  width,
  height,
  color,
  backgroundColor,
  border,
  borderRadius = '0.25rem',
  fontSize = '0.75rem',
  fontWeight = 600,
}: {
  padding?: string;
  width?: string;
  height?: string;
  color: string;
  backgroundColor: string;
  border?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: number;
}) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pretendard', sans-serif;
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  line-height: 140%;
  padding: ${padding};
  color: ${color};
  background-color: ${backgroundColor};
  border: ${border ?? 'none'};
  border-radius: ${borderRadius};
  ${width ? `width: ${width};` : ''}
  ${height ? `height: ${height};` : ''}
`;

export const chipVariantStyles = {
  // 1. 테두리 칩 (보라 & 회색)
  outlinedPurple: baseChipStyle({
    padding: '0.125rem 0.375rem',
    color: theme.colors.purple7,
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.purple7}`,
    fontSize: '0.625rem',
    fontWeight: 500,
  }),
  outlinedGray: baseChipStyle({
    padding: '0.125rem 0.375rem',
    color: theme.colors.gray4,
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.gray3}`,
    fontSize: '0.625rem',
    fontWeight: 500,
  }),

  // 2. 라운드형 칩
  filledRoundPurple: baseChipStyle({
    padding: '0 0.5rem',
    color: theme.colors.purple7,
    backgroundColor: theme.colors.purple1,
    borderRadius: '2.5rem',
    fontSize: '0.75rem',
    fontWeight: 500,
  }),

  // 3. 카운트 칩
  filledGreenText: baseChipStyle({
    padding: '0.125rem 0.375rem',
    height: '1.3125rem',
    color: theme.colors.white,
    backgroundColor: theme.colors.green1,
  }),
  filledGreenCount: baseChipStyle({
    width: '1.3125rem',
    height: '1.3125rem',
    color: theme.colors.white,
    backgroundColor: theme.colors.green1,
  }),
  filledGrayCount: baseChipStyle({
    width: '1.3125rem',
    height: '1.3125rem',
    color: theme.colors.gray6,
    backgroundColor: theme.colors.gray2,
  }),
};
