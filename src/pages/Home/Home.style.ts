import { css } from '@emotion/react';

import { theme } from '@/styles/theme';

export const BannerWrapper = css`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const BannerImage = css`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
`;

export const BannerControls = css`
  position: absolute;
  bottom: 0.1rem;
  right: 0.1rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  z-index: 1;
`;

export const AdWrapper = css`
display:flex;
justify-content: center;
  padding: 3.2rem 2.4rem;
`;

export const Ad1Wrapper = css`
  display: flex;
  justify-content: center;
  padding: 2.4rem 2.4rem 0.8rem;
`;

export const PauseIcon = css`
  width: 2.8rem;
  height: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0 0 0 0.3);
  border-radius: 0.5rem;

  svg {
    width: 2.8rem;
    height: 2.8rem;
    fill: currentColor;
  }
`;

export const InfoBox = css`
  display: flex;
  align-items: center;
  padding: 0.6rem 1.2rem;
  height: 2.8rem;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 0.1rem;
`;

export const InfoText = css`
  ${theme.fonts.caption2};
  color: ${theme.colors.white};
`;

export const gapWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
