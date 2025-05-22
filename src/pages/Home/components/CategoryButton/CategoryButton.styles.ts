import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

export const Row = css`
  display: flex;
  justify-content: space-between; 
  gap: 1.2rem;
  width: 100%;                  
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;  
`;

export const Item = css`
  width: 6.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    fill: ${theme.colors.purple6}; 
  }

  button {
    all: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
  }
`;

export const Label = css`
  ${theme.fonts.caption3};
  color: ${theme.colors.gray5};
  text-align: center;
`;
