import ReviewCard from '@/pages/HomeBestDetail/components/elements/ReviewCard/ReviewCard';
import { data } from '@/sampleData/reviewData';

export default function BookReview() {
  return (
    <>
      {data.reviewList.map((review) => (
        <ReviewCard key={review.id} reviewData={review} />
      ))}
    </>
  );
}
