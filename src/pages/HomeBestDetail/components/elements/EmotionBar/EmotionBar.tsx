import { useTheme } from '@emotion/react';

import {
  barWrapper,
  barBackground,
  barFill,
  barContent,
  emotionText,
  percentText,
} from '@/pages/HomeBestDetail/components/elements/EmotionBar/EmotionBar.style';

type EmotionTypes = {
  emotion: string;
  percent: number;
};

const EmotionBar = ({ emotion, percent }: EmotionTypes) => {
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
};
export default EmotionBar;
