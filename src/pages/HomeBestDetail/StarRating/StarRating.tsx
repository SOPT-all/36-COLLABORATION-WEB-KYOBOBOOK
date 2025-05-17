import { useTheme } from '@emotion/react';

import Icon from '@/components/Icon';

type starTypes = {
  rating: number;
  width?: number;
  height?: number;
};
export default function StarRating({ rating, width, height }: starTypes) {
  const theme = useTheme();
  const totalRating = 5;

  return (
    <div>
      {Array.from({ length: totalRating }).map((_, index) => (
        <Icon
          name="star"
          width={width}
          height={height}
          fill={index < rating ? theme.colors.green1 : theme.colors.green2}
        />
      ))}
    </div>
  );
}
