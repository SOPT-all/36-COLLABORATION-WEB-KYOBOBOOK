import { Global, css, useTheme } from '@emotion/react';

const GlobalStyle = (theme: ReturnType<typeof useTheme>) => css`
  :root {
    font-family: 'Pretendard';
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* 폰트: Pretendard Regular, Medium, SemiBold, Bold */
  @font-face {
    font-family: 'Pretendard-Bold';
    src:
      url('https://cdn.banggooso.com/sr/assets/fonts/Pretendard-Bold.otf') format('opentype'),
      url('https://cdn.banggooso.com/sr/assets/fonts/Pretendard-Bold.woff2') format('woff2'),
      url('https://cdn.banggooso.com/sr/assets/fonts/Pretendard-Bold.woff') format('woff');
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-Medium';
    src:
      url('https://cdn.banggooso.com/sr/assets/fonts/Pretendard-Medium.otf') format('opentype'),
      url('https://cdn.banggooso.com/sr/assets/fonts/Pretendard-Medium.woff2') format('woff2'),
      url('https://cdn.banggooso.com/sr/assets/fonts/Pretendard-Medium.woff') format('woff');
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    src:
      url('https://cdn.banggooso.com/sr/assets/fonts/Pretendard-Regular.otf') format('opentype'),
      url('https://cdn.banggooso.com/sr/assets/fonts/Pretendard-Regular.woff2') format('woff2'),
      url('https://cdn.banggooso.com/sr/assets/fonts/Pretendard-Regular.woff') format('woff');
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-SemiBold';
    src:
      url('https://cdn.banggooso.com/sr/assets/fonts/Pretendard-SemiBold.otf') format('opentype'),
      url('https://cdn.banggooso.com/sr/assets/fonts/Pretendard-SemiBold.woff2') format('woff2'),
      url('https://cdn.banggooso.com/sr/assets/fonts/Pretendard-SemiBold.woff') format('woff');
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    width: 100%;
    min-height: 100vh;
    font-family: 'Pretendard', sans-serif;
    background-color: ${theme.colors.gray1};
    display: flex;
    justify-content: center;
  }

  #root {
    width: 100%;
    max-width: 73rem;
    min-width: 37.5rem;
    min-height: 100vh;
    background-color: ${theme.colors.white};
  }

  @media (max-width: 375px) {
    html {
      font-size: 56.25%;
    }
  }
`;

// 현재 적용된 테마 가져오기
export default function GlobalStyles() {
  const theme = useTheme();
  return <Global styles={GlobalStyle(theme)} />;
}
