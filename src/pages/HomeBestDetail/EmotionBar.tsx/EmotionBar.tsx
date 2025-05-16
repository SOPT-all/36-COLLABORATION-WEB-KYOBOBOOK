import { useTheme } from '@emotion/react';

import {
  barWrapper,
  barBackground,
  barFill,
  barContent,
  emotionText,
  percentText,
} from '@/pages/HomeBestDetail/EmotionBar.tsx/EmotionDetail.style';

type EmotionTypes = {
  emotion: string;
  percent: number;
};

export default function EmotionBar({ emotion, percent }: EmotionTypes) {
  const theme = useTheme();

  return (
    <div css={barWrapper}>
      <div css={barBackground(theme)} />
      <div css={barFill(percent, theme)} />
      <div css={barContent(theme)}>
        <p css={emotionText(theme)}>"{emotion}"</p>
        <span css={percentText(theme)}>{percent}%</span>
      </div>
    </div>
  );
}
