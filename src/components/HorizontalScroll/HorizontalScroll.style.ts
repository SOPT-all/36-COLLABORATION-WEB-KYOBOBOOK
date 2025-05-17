import { css } from '@emotion/react';

export const rowScrollStyle = (gap: string) => css`
  display: flex;
  flex-direction: row;
  gap: ${gap};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const classItemStyle = css`
  flex-shrink: 0;
`;

export const firstClassItemStyle = (sidePadding: string) => css`
  padding-left: ${sidePadding};
`;

export const lastClassItemStyle = (sidePadding: string) => css`
  padding-right: ${sidePadding};
`;
