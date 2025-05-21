import { useTheme } from '@emotion/react';

import { reviewCardStyle as s } from '@/pages/HomeBestDetail/components/elements/ReviewCard/ReviewCard.style';
import Icon from '@/components/Icon';
import type { ReviewTypes } from '@/types/reviewTypes';
import StarRating from '@/pages/HomeBestDetail/components/elements/StarRating/StarRating';
import { Chip } from '@/components/Chip/Chip';

const ReviewCard = ({ reviewData }: { reviewData: ReviewTypes }) => {
  const theme = useTheme();

  const blindName = (name: string) => {
    if (name.length <= 2) {
      return name;
    }
    return name.slice(0, 2) + '*'.repeat(name.length - 2);
  };

  return (
    <div css={s.cardContainer(theme)}>
      <img src={reviewData.image} css={s.imgSection} alt="리뷰 이미지" />

      <div css={s.contentContainer}>
        <div css={s.topSection}>
          <p css={s.writerText(theme)}>{blindName(reviewData.reviewer)}</p>
          <div css={s.iconWrapper}>
            <Icon name="viewDetail" width={14} height={14} fill={theme.colors.gray4} />
          </div>
        </div>
        <div css={s.metaSection}>
          <span>종이책</span>
          <StarRating rating={reviewData.star} width={14} height={14} />
          <p css={s.dateText(theme)}>{reviewData.reviewDate}</p>
        </div>
        <div css={s.descriptionSection}>
          <p css={s.descriptionText}>{reviewData.description}</p>
        </div>
        <div css={s.emotionTagSection}>
          <Chip variant="filledRoundPurple">감동이에요</Chip>
          <Chip variant="filledRoundPurple">감동이에요</Chip>
          <Chip variant="filledRoundPurple">감동이에요</Chip>
        </div>
        <p css={s.seeMore(theme)}>자세히보기</p>
      </div>
    </div>
  );
};

export default ReviewCard;
