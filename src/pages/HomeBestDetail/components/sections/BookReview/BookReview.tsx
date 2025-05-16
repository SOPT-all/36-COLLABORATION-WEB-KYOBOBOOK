import ReviewCard from '@/pages/HomeBestDetail/components/elements/ReviewCard/ReviewCard';
import { cardWrapper } from '@/pages/HomeBestDetail/components/sections/BookReview/BookReivew.style';
import { data } from '@/sampleData/reviewData';

export default function BookReview() {
  return (
    <div css={cardWrapper}>
      {data.reviewList.map((review) => (
        <ReviewCard key={review.id} reviewData={review} />
      ))}
    </div>
  );
}
