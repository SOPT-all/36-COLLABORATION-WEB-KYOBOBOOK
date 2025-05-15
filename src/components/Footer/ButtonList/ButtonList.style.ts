import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

export const legalButtonBorder = css`
  position: relative;
  padding: 1rem 0.6rem 1rem 0.5rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 8px;
    border-left: 1px solid ${theme.colors.gray3};
  }
`;
