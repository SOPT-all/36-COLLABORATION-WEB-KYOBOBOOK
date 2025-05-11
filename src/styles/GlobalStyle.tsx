/** @jsxImportSource @emotion/react */
import { Global, css, useTheme } from '@emotion/react';

const GlobalStyle = (theme: ReturnType<typeof useTheme>) => css`
  :root {
    font-family: 'Pretendard';
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/assets/fonts/Pretendard-Medium.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Pretendard', sans-serif;
    background-color: ${theme.colors.gray1};
    display: flex;
    justify-content: center;
  }

  #root {
    width: 23.4375rem; /* 375px */
    min-height: 42.3125rem; /* 677px */
    padding: 0 1.5rem; /* 24px */
    background-color: ${theme.colors.white};
  }
`;

export default function GlobalStyles() {
  const theme = useTheme(); // 현재 적용된 테마 가져오기
  return <Global styles={GlobalStyle(theme)} />;
}
