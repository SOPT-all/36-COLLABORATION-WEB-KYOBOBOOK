import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const imageBackground = (theme: Theme) => css`
  display: flex;
  width: 100%;
  padding: 8.6rem 5.7rem 4.8rem 5.8rem;
  background-color: ${theme.colors.gray4};
`;

export const bookContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const imageStyle = (theme: Theme) => css`
  box-shadow: ${theme.effects.shadow1};
`;

export const previewContainer = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.white};
  ${theme.fonts.caption3}
`;

export const previewText = (theme: Theme) => css`
  padding: 0.45rem 1rem;
  border: 1px solid ${theme.colors.gray3};
  border-radius: 40px;
`;

export const currentPage = (theme: Theme) => css`
  ${theme.fonts.caption2}
`;
//export const imageBackground = (theme: Theme) => css``;
//export const imageBackground = (theme: Theme) => css``;
//export const imageBackground = (theme: Theme) => css``;
//export const imageBackground = (theme: Theme) => css``;
//export const imageBackground = (theme: Theme) => css``;
//export const imageBackground = (theme: Theme) => css``;
