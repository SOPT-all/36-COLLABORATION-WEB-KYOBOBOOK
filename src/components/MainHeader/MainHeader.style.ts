import { css, type Theme } from '@emotion/react';

const headerContainer = (theme: Theme) => css`
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
  display: flex;
  padding: 0.8rem 2.4rem;
  height: 6.6rem;
  gap: 1.6rem;
  background-color: ${theme.colors.white};
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
    { zIndex: 1, left: '0', bottom: '0' },
    { zIndex: 2, left: '0', bottom: '0' },
    { zIndex: 3, left: '0', bottom: '0' },
    { zIndex: 4, left: '0', bottom: '0' },
    { zIndex: 5, left: '2.4rem', bottom: '0' },
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
};
