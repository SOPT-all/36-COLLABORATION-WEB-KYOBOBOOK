import { css } from '@emotion/react';

export const rowScrollStyle = (gap: string) => css`
  display: flex;
  flex-direction: row;
  gap: ${gap};
  overflow-x: auto;
  scrollbar-width: none;
`;

export const classItemStyle = css`
  flex-shrink: 0;
`;

export const firstClassItemStyle = (sideMargin: string) => css`
  padding-left: ${sideMargin};
`;

export const lastClassItemStyle = (sideMargin: string) => css`
  padding-right: ${sideMargin};
`;
