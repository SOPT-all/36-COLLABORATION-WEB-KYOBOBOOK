import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

const rowScrollStyle = (gap: string, effect: boolean, theme: Theme) => css`
  display: flex;
  flex-direction: row;
  gap: ${gap};
  overflow-x: auto;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  ${effect && `box-shadow: ${theme.effects.shadow2}`};
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
