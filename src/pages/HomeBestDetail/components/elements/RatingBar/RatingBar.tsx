import { useTheme } from '@emotion/react';

import StarRating from '@/pages/HomeBestDetail/components/elements/StarRating/StarRating';
import {
  ratingContainer,
  percentBar,
  fillBar,
  percentText,
} from '@/pages/HomeBestDetail/components/elements/RatingBar/RatingBar.style';

type RatingTypes = {
  rating: number;
  percent: number;
};

export default function RatingBar({ rating, percent }: RatingTypes) {
  const theme = useTheme();

  return (
    <div css={ratingContainer}>
      <StarRating rating={rating} width={16} height={16} />

      <div css={percentBar(theme)}>
        <div css={fillBar(percent, theme)} />
      </div>
      <div css={percentText(theme)}>{percent}%</div>
    </div>
  );
}
