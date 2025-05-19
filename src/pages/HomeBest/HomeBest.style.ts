import { css, type Theme } from '@emotion/react';

const titleStyle = (theme: Theme) => css`
  padding: 2.4rem 0 0.8rem 2.4rem;
  ${theme.fonts.title3};
`;

const wrapper = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem 2.4rem 1.2rem 2.4rem;
  border-bottom: 1px solid ${theme.colors.gray2};
`;

const leftGroup = css`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const date = (theme: Theme) => css`
  color: ${theme.colors.gray6};
  ${theme.fonts.caption2};
`;

const rightGroup = css`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const label = (theme: Theme) => css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;

  color: ${theme.colors.black1};
  ${theme.fonts.body3};
`;

const iconButton = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.8rem;

  background: none;
  border: 1px solid ${theme.colors.gray3};
  border-radius: 4px;
`;

export { titleStyle, wrapper, leftGroup, date, rightGroup, label, iconButton };
