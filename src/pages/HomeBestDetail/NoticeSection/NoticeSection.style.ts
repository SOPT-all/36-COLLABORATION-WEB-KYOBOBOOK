import { css, type Theme } from '@emotion/react';

const noticeSection = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 2.4rem;
`;

const titleSection = (theme: Theme) => css`
  display: flex;
  ${theme.fonts.title1};
`;

const divider = (theme: Theme) => css`
  display: flex;
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.black1};
`;

const textSection = css`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding-bottom: 2rem;
`;

const subTitleSection = (theme: Theme) => css`
  ${theme.fonts.subtitle2};
`;

const textStyle = (theme: Theme) => css`
  ${theme.fonts.body2};
  word-break: keep-all;
  white-space: normal;
`;

const numbebrStyle = css`
  white-space: nowrap;
`;

export {
  noticeSection,
  titleSection,
  divider,
  textSection,
  subTitleSection,
  textStyle,
  numbebrStyle,
};
