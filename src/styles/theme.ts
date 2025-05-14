import type { Theme } from '@emotion/react';

import { fonts } from '@/styles/fonts';

import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      white: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
      gray6: string;
      black1: string;
      black2: string;
      black3: string;
      green1: string;
      green2: string;
      green3: string;
      purple1: string;
      purple2: string;
      purple3: string;
      purple4: string;
      purple5: string;
      purple6: string;
      purple7: string;
      blue1: string;
      blue2: string;
      red: string;
      whiteGr: string;
      blueGr: string;
      bluegreenGr: string;
      greenGr1: string;
      greenGr2: string;
    };
    fonts: {
      header1: string;
      title1: string;
      title2: string;
      title3: string;
      subtitle1: string;
      subtitle2: string;
      subtitle3: string;
      subtitle4: string;
      body1: string;
      body2: string;
      body3: string;
      caption1: string;
      caption2: string;
      caption3: string;
      caption4: string;
    };
    effects: {
      shadow1: string;
      shadow2: string;
      shadow3: string;
      shadow4: string;
      blur1: string;
    };
  }
}

export const theme: Theme = {
  colors: {
    white: '#ffffff',
    gray1: '#F7F7F7',
    gray2: '#EAEAEA',
    gray3: '#D5D5D5',
    gray4: '#767676',
    gray5: '#595959',
    gray6: '#494949',
    black1: '#000000',
    black2: 'rgba(0, 0, 0, 0.30)',
    black3: 'rgba(0, 0, 0, 0.05)',
    green1: '#3C9A17',
    green2: '#BAE2AB',
    green3: '#7CF069',
    purple1: '#EDEDF7',
    purple2: '#E5E6F9',
    purple3: '#DCDDFF',
    purple4: '#B7BAFF',
    purple5: '#8387E3',
    purple6: '#5055B1',
    purple7: '#474C98',
    blue1: '#314FB9',
    blue2: '#05BBBF',
    red: '#EC1F2D',
    whiteGr: 'linear-gradient(0deg, #FFF 50.48%, rgba(255, 255, 255, 0.00) 100%)',
    blueGr: 'linear-gradient(90deg, #4690ED 0%, #3D47A9 100%)',
    bluegreenGr: 'linear-gradient(90deg, #314FB9 0%, #46C971 100%)',
    greenGr1: 'linear-gradient(0deg, #54B12D 0%, #91E470 100%)',
    greenGr2: 'linear-gradient(0deg, #28A94C 7.03%, #6BCC65 93.03%)',
  },
  fonts,
  effects: {
    shadow1:
      '0px 165px 60px rgba(0, 0, 0, 0.02), 0px 60px 30px rgba(0, 0, 0, 0.05), 0px 40px 40px rgba(0, 0, 0, 0.13), 0px 15px 30px rgba(0, 0, 0, 0.15)',
    shadow2: '0px 4px 30px 18px rgba(233, 233, 233, 0.80)',
    shadow3: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.06)',
    shadow4: '0px 4px 4px rgba(0, 0, 0, 0.06)',
    blur1: 'blur(40px)',
  },
};

export type ThemeType = typeof theme;
