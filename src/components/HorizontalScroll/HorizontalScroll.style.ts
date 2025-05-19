import { css } from '@emotion/react';

const rowScrollStyle = (gap: string) => css`
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

const classItemStyle = css`
  flex-shrink: 0;
`;

const firstClassItemStyle = (sidePadding: string) => css`
  padding-left: ${sidePadding};
`;

const lastClassItemStyle = (sidePadding: string) => css`
  padding-right: ${sidePadding};
`;

export { rowScrollStyle, classItemStyle, firstClassItemStyle, lastClassItemStyle };
