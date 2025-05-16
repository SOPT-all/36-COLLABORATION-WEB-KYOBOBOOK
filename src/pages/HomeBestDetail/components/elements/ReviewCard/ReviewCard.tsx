import { useTheme } from '@emotion/react';

import { reviewCardStyle as s } from './ReviewCard.style';

import sampleImage from '@/assets/img/sample.png';
import Icon from '@/components/Icon';
import type { ReviewTypes } from '@/types/reviewTypes';

export default function ReviewCard({ reviewData }: { reviewData: ReviewTypes }) {
  const theme = useTheme();

  return (
    <div css={s.cardContainer(theme)}>
      <img src={reviewData.image} css={s.imgSection} alt="리뷰 이미지" />

      <div css={s.contentContainer}>
        <div css={s.topSection}>
          <p css={s.writerText(theme)}>{reviewData.reviewer}</p>
          <div css={s.iconWrapper}>
            <Icon name="viewDetail" width={14} height={14} fill={theme.colors.gray4} />
          </div>
        </div>
        <div css={s.metaSection}>
          <span>종이책</span>
          <div>⭐️⭐️⭐️⭐️⭐️</div>
          <p css={s.dateText(theme)}>{reviewData.reviewDate}</p>
        </div>
        <div css={s.descriptionSection}>
          <p css={s.descriptionText}>{reviewData.description}</p>
        </div>
        <div css={s.emotionTagSection}>
          <span>감동이에요</span>
          <span>감동이에요</span>
          <span>감동이에요</span>
        </div>
        <p css={s.seeMore(theme)}>자세히보기</p>
      </div>
    </div>
  );
}
