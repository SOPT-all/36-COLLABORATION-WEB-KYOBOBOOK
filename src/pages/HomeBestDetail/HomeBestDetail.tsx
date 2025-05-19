import RatingBar from '@/pages/HomeBestDetail/RatingBar/RatingBar';
import { data } from '@/pages/HomeBestDetail/EmotionBar/ReviewData';

const HomeBestDetail = () => {
  const sortedStar = Object.entries(data.starDistribution).sort(
    ([a], [b]) => Number(b) - Number(a),
  );

  return (
    <>
      {sortedStar.map(([key, percent]) => {
        const rating = Number(key);
        return <RatingBar key={rating} rating={rating} percent={percent} />;
      })}
    </>
  );
};

export default HomeBestDetail;
