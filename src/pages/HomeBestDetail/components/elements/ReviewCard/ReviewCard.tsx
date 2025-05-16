import { useTheme } from '@emotion/react';

import { reviewCardStyle as s } from './ReviewCard.style';

import sampleImage from '@/assets/img/sample.png';
import Icon from '@/components/Icon';

export default function ReviewCard() {
  const theme = useTheme();
  return (
    <div css={s.cardContainer(theme)}>
      <img src={sampleImage} css={s.imgSection} alt="리뷰 이미지" />

      <div css={s.contentContainer}>
        <div css={s.topSection}>
          <p css={s.writerText(theme)}>ls*******</p>
          <div css={s.iconWrapper}>
            <Icon name="viewDetail" width={14} height={14} fill={theme.colors.gray4} />
          </div>
        </div>
        <div css={s.metaSection}>
          <span>종이책</span>
          <div>⭐️⭐️⭐️⭐️⭐️</div>
          <p css={s.dateText(theme)}>2025.04.04</p>
        </div>
        <div css={s.descriptionSection(theme)}>
          <p>이런 시기에 좋은 산문 한편 읽을 수 있게 해주셔서 고마워요</p>
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
