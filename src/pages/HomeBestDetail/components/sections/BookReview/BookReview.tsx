import { useTheme } from '@emotion/react';

import { ratingData } from '@/sampleData/ratingData';
import ReviewCard from '@/pages/HomeBestDetail/components/elements/ReviewCard/ReviewCard';
import RatingBar from '@/pages/HomeBestDetail/components/elements/RatingBar/RatingBar';
import HorizontalScrollList from '@/components/HorizontalScroll/HorizontalScroll';
import TabMenu from '@/pages/HomeBestDetail/components/elements/TabMenu/TabMenu';
import Icon from '@/components/Icon';
import EmotionBar from '@/pages/HomeBestDetail/components/elements/EmotionBar/EmotionBar';
import StarRating from '@/pages/HomeBestDetail/components/elements/StarRating/StarRating';
import * as s from '@/pages/HomeBestDetail/components/sections/BookReview/BookReview.style';
import { useGetReviews } from '@/apis/homeBestDetail/queries';
import type { ReviewTypes } from '@/types/reviewTypes';
import { useBookId } from '@/utils/useBookId';

const BookReview = ({ id }: { id: string }) => {
  const theme = useTheme();
  const bookId = useBookId();

  const { data: reviewData } = useGetReviews(Number(bookId));

  const sortedStar = Object.entries(ratingData.starDistribution).sort(
    ([a], [b]) => Number(b) - Number(a),
  );

  return (
    <>
      <div id={id} css={s.wrapper}>
        <div>
          <div css={s.title}>
            <h3 css={s.titleText(theme)}>리뷰 ({reviewData?.reviewCounts})</h3>
            <Icon name="info" />
          </div>
          <p css={s.description(theme)}>* 구매 후 리뷰 작성 시, e교환권 200원 적립</p>
        </div>

        <div>
          <div css={s.ratingTitle(theme)}>
            <StarRating rating={ratingData.averageStar} width={26} height={26} />
            <span>
              <b css={s.ratingText(theme)}>{ratingData.averageStar}</b>/5
            </span>
          </div>
          {sortedStar.map(([key, percent]) => {
            const rating = Number(key);
            return <RatingBar key={rating} rating={rating} percent={percent} />;
          })}
        </div>

        <div css={s.barWrapper}>
          <p css={s.reviewText(theme)}>
            28%의 구매자가 <br />
            <span css={s.response}>
              <Icon name="quote" fill={theme.colors.purple7} />
              <b css={s.perfect(theme)}>최고예요 </b> 라고 응답했어요
            </span>
          </p>
          {Object.entries(ratingData.emotionDistribution).map(([emotion, percent]) => (
            <EmotionBar key={emotion} emotion={emotion} percent={percent} />
          ))}
        </div>
        <button css={s.buttonContainer(theme)}>
          <Icon name="write" width={12} height={12} fill={theme.colors.purple6} />
          <span css={s.buttonText(theme)}>리뷰 작성</span>
        </button>
      </div>

      <TabMenu type="review" />
      <div css={s.cardWrapper}>
        <HorizontalScrollList gap="1rem" sidePadding="0" effect={true}>
          {(reviewData?.reviewList.slice(0, 2) ?? []).map((review: ReviewTypes) => (
            <ReviewCard key={review.id} reviewData={review} />
          ))}
        </HorizontalScrollList>
      </div>
      <div css={s.moreWrapper}>
        <span css={s.moreText(theme)}>더보기 1/12</span>
        <Icon name="circleDown" fill={theme.colors.white} />
      </div>
    </>
  );
};
export default BookReview;
