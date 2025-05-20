import { css, type Theme } from '@emotion/react';

const menuButtonStyle = (active: boolean, theme: Theme) => css`
  padding: 0 1.6rem;
  height: 3rem;
  border: none;
  border-radius: 40px;
  background-color: ${active ? theme.colors.gray5 : theme.colors.gray1};
  color: ${active ? theme.colors.white : theme.colors.gray4};
  ${theme.fonts.caption3};
  white-space: nowrap;
`;

export { menuButtonStyle };
