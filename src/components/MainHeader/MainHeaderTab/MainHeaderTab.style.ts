import { css, type Theme } from '@emotion/react';

const tabButtonStyle = ({
  active,
  isStatic,
  theme,
}: {
  active: boolean;
  isStatic: boolean;
  theme: Theme;
}) => css`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  border: none;
  ${isStatic ? theme.fonts.subtitle1 : active ? theme.fonts.subtitle1 : theme.fonts.subtitle2};
  background: none;
  color: ${isStatic ? theme.colors.green1 : active ? theme.colors.black1 : theme.colors.gray5};
  white-space: nowrap;
`;

const iconStyle = css`
  display: flex;
  align-items: center;
  padding-bottom: 1.2rem;
`;

export { tabButtonStyle, iconStyle };
