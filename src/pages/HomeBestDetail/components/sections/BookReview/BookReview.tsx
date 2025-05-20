import type { ReviewTypes } from '@/types/reviewTypes';
import { reviewData } from '@/sampleData/reviewData';
import { ratingData } from '@/sampleData/ratingData';
import ReviewCard from '@/pages/HomeBestDetail/components/elements/ReviewCard/ReviewCard';
import RatingBar from '@/pages/HomeBestDetail/components/elements/RatingBar/RatingBar';
import BookMeta from '@/pages/HomeBestDetail/components/elements/BookMeta/BookMeta';
import HorizontalScrollList from '@/components/HorizontalScroll/HorizontalScroll';
import TabMenu from '@/pages/HomeBestDetail/components/elements/TabMenu/TabMenu';

export default function BookReview() {
  const bookMeta = {
    카테고리: '한국에세이',
    출간일: '2025.04.06',
    쪽수: '200P',
    크기: '9791191114768',
    ISBN: '137 * 196 * 22mm / 397 g',
  };

  const sortedStar = Object.entries(ratingData.starDistribution).sort(
    ([a], [b]) => Number(b) - Number(a),
  );

  return (
    <>
      <div>
        <TabMenu type="default" />
      </div>
      <HorizontalScrollList gap="0" sidePadding="0">
        {Object.entries(bookMeta).map(([title, content], index) => {
          return <BookMeta key={title} title={title} content={content} index={index} />;
        })}
      </HorizontalScrollList>

      <div>
        {sortedStar.map(([key, percent]) => {
          const rating = Number(key);
          return <RatingBar key={rating} rating={rating} percent={percent} />;
        })}
      </div>
      <HorizontalScrollList gap="1rem" sidePadding="0" effect={true}>
        {reviewData.reviewList.map((review: ReviewTypes) => (
          <ReviewCard key={review.id} reviewData={review} />
        ))}
      </HorizontalScrollList>
    </>
  );
}
