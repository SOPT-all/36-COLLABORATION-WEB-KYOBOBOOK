import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

const noticeContainer = css`
  display: flex;
  align-items: center;
  gap: 1.7rem;
  padding: 1.6rem 2.4rem;

  border-top: 1px solid ${theme.colors.gray3};
  border-bottom: 1px solid ${theme.colors.gray3};
  background: ${theme.colors.gray1};
`;

const noticeStyle = css`
  ${theme.fonts.subtitle4};
`;

const linkStyle = css`
  ${theme.fonts.body3};
  text-decoration: underline;
  text-decoration-skip-ink: none;
  text-underline-position: from-font;
`;

const logoContainer = css`
  display: flex;
  padding: 2.8rem 2.4rem 2rem;
  justify-content: space-between;
`;

const businessInfoContainer = css`
  display: flex;
  padding: 0.2rem 0 0;
  gap: 0.2rem;
  align-items: flex-end;
  ${theme.fonts.body3};
  color: ${theme.colors.gray4};
`;

const authButtonsContainer = css`
  display: flex;
  padding-left: 1.4rem;
  ${theme.fonts.body1};
`;

const authButton = css`
  all: unset;
  padding: 1rem;
`;

const legalButtonsContainer = css`
  all: unset;
  padding: 0 0 0 1.8rem;
  ${theme.fonts.caption3};
  color: ${theme.colors.gray5};
`;

const legalButton = css`
  all: unset;
  padding: 1rem 0.6rem;
`;

const dropdwonContainer = css`
  padding: 2rem 2.4rem 0 2.4rem;
  width: 100%;
`;

const snsButtonContainer = css`
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 2.4rem;
`;

const snsButtonWrapper = css`
  display: flex;
  gap: 0.8rem;
`;

const designSystemWrapper = css`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  ${theme.fonts.caption3}
  color: ${theme.colors.gray4};
`;

export {
  noticeContainer,
  noticeStyle,
  linkStyle,
  logoContainer,
  businessInfoContainer,
  authButtonsContainer,
  authButton,
  legalButtonsContainer,
  legalButton,
  dropdwonContainer,
  snsButtonContainer,
  snsButtonWrapper,
  designSystemWrapper,
};
