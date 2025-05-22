import { css, type Theme } from '@emotion/react';

const menuButtonStyle = (active: boolean, theme: Theme) => css`
  display: flex;
  align-items: center;
  padding: 0.8rem 1.4rem;
  border: none;
  border-radius: 40px;

  background-color: ${active ? theme.colors.green1 : theme.colors.gray1};
  color: ${active ? theme.colors.white : theme.colors.gray6};
  ${active ? theme.fonts.subtitle4 : theme.fonts.body2};
`;

export { menuButtonStyle };
