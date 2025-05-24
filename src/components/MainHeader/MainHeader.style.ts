import { css, type Theme } from '@emotion/react';

import { theme } from '@/styles/theme';

const headerContainer = css`
  display: flex;
  flex-direction: column;
`;

const searchContainer = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1.8rem 0 2.4rem;
  gap: 0.6rem;
  width: 100%;
  background-color: ${theme.colors.white};
`;

const searchInputWrapper = (theme: Theme) => css`
  display: flex;
  align-items: center;
  flex: 1 0 0;
  gap: 0.6rem;
  padding: 0.8rem 1.2rem;

  border-radius: 100px;
  border: none;
  background-color: ${theme.colors.gray1};
`;

const searchInput = (theme: Theme) => css`
  flex: 1;
  border: none;
  outline: none;

  ${theme.fonts.body2}
  background-color: ${theme.colors.gray1};
  color: ${theme.colors.gray4};
`;

const cartIconWrapper = css`
  padding: 0.8rem 0.4rem;
`;

const headerTabWrapper = (theme: Theme) => css`
  position: sticky;

  display: flex;
  padding: 0.8rem 2.4rem;
  height: 6.6rem;
  gap: 1.6rem;
  background-color: ${theme.colors.white};
  z-index: ${theme.zIndex.two};
`;

const headerTabSticky = (theme: Theme) => css`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 73rem;
  min-width: 37.5rem;

  background-color: ${theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  z-index: ${theme.zIndex.two};
`;

const emptyContainer = css`
  height: 6.6rem;
`;

const layeredWrapper = (theme: Theme) => css`
  position: relative;
  height: 4.4rem;
  background-color: ${theme.colors.gray1};
  svg {
    display: block;
  }
`;

const layeredIconWrapper = (index: number) => {
  const styles = [
    { zIndex: `${theme.zIndex.one}`, left: '0.1rem', bottom: '0' },
    { zIndex: `${theme.zIndex.two}`, left: '0.1rem', bottom: '0' },
    { zIndex: `${theme.zIndex.three}`, left: '0.1rem', bottom: '0' },
    { zIndex: `${theme.zIndex.four}`, left: '0', bottom: '-0.1rem' },
    { zIndex: `${theme.zIndex.five}`, left: '2.4rem', bottom: '0' },
  ];

  const { zIndex, left, bottom } = styles[index] ?? styles[0];

  return css`
    position: absolute;
    left: ${left};
    bottom: ${bottom};
    z-index: ${zIndex};
  `;
};

export {
  headerContainer,
  searchContainer,
  searchInputWrapper,
  searchInput,
  cartIconWrapper,
  headerTabWrapper,
  layeredWrapper,
  layeredIconWrapper,
  headerTabSticky,
  emptyContainer,
};
