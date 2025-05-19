import { useTheme } from '@emotion/react';

import Icon from '@/components/Icon';
import { starContainer } from '@/pages/HomeBestDetail/StarRating/StarRating.style';

type starTypes = {
  rating: number;
  width?: number;
  height?: number;
};

export default function StarRating({ rating, width, height }: starTypes) {
  const theme = useTheme();
  const totalRating = 5;

  return (
    <div css={starContainer}>
      {Array.from({ length: totalRating }).map((_, index) => (
        <Icon
          key={index}
          name="star"
          width={width}
          height={height}
          fill={index < rating ? theme.colors.green1 : theme.colors.green2}
        />
      ))}
    </div>
  );
}
