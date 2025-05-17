import { css } from '@emotion/react';

import EmotionBar from '@/pages/HomeBestDetail/EmotionBar/EmotionBar';
import { data } from '@/pages/HomeBestDetail/EmotionBar/ReviewData';

const HomeBestDetail = () => {
  return (
    <div css={mainStyle}>
      <div css={barWrapper}>
        {Object.entries(data.emotionDistribution).map(([emotion, percent]) => (
          <EmotionBar key={emotion} emotion={emotion} percent={percent} />
        ))}
      </div>
    </div>
  );
};

export default HomeBestDetail;

const mainStyle = css`
  padding: 2.4rem 2.4rem;
`;
const barWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
