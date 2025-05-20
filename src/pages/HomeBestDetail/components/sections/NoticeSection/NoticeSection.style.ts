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

const buttonStyle = (theme: Theme) => css`
  display: flex;
  gap: 0.5rem;
  height: 4rem;
  ${theme.fonts.subtitle4};
`;

const sharedButtonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-radius: 6px;
`;

const leftButtonStyle = (theme: Theme) => css`
  ${sharedButtonStyle};
  border: 1px solid ${theme.colors.gray3};
  background-color: ${theme.colors.white};
  color: ${theme.colors.black1};
`;

const rightButtonStyle = (theme: Theme) => css`
  ${sharedButtonStyle};
  border: 1px solid ${theme.colors.purple6};
  background-color: ${theme.colors.purple6};
  color: ${theme.colors.white};
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

const numberStyle = css`
  white-space: nowrap;
`;

export {
  noticeSection,
  titleSection,
  buttonStyle,
  leftButtonStyle,
  rightButtonStyle,
  divider,
  textSection,
  subTitleSection,
  textStyle,
  numberStyle,
};
