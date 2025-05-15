import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

export const tabButtonStyle = ({ active, isStatic }: { active: boolean; isStatic: boolean }) => css`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  border: none;
  ${isStatic ? theme.fonts.subtitle1 : active ? theme.fonts.subtitle1 : theme.fonts.subtitle2};
  font-weight: ${isStatic ? 600 : active ? 700 : 600};
  background: none;
  color: ${isStatic ? theme.colors.green1 : active ? theme.colors.black1 : theme.colors.gray5};
  white-space: nowrap;
`;

export const iconStyle = css`
  display: flex;
  align-items: center;
  padding-bottom: 1.2rem;
`;
