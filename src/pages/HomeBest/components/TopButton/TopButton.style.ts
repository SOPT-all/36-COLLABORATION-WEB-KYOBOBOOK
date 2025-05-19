import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

export const buttonStyle = (active: boolean) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 7.4rem;
  height: 6.4rem;
  gap: 0.333rem;
  border: ${active ? `1px solid ${theme.colors.green1}` : `1px solid ${theme.colors.gray2}`};
  background-color: ${active ? theme.colors.green1 : theme.colors.white};
  color: ${active ? theme.colors.white : theme.colors.gray6};

  ${theme.fonts.caption3};
`;
