import { useState } from 'react';
import { useTheme } from '@emotion/react';

import * as s from '@/pages/HomeBest/components/BookItem/BookItem.style';
import { getRankBadgeInfo } from '@/pages/HomeBest/utils/getRankBadgeStyle';
import Icon from '@/components/Icon';
import type { AddBookTypes } from '@/types/HomeBestResponseTypes';

const BookItem = ({
  ranking,
  title,
  author,
  publisher,
  price,
  star,
  bestEmotion,
  imageUrl,

  discountRate,
  point,
  deliveryDate,
  isLiked: defaultLiked,
}: AddBookTypes) => {
  const theme = useTheme();

  const { text, isTop3 } = getRankBadgeInfo(ranking);
  const [isLiked, setIsLiked] = useState(defaultLiked);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div css={s.container(theme)}>
      <div css={s.imageWrapper}>
        <img src={imageUrl} alt={title} css={s.bookImage} />
      </div>

      <div css={s.content}>
        <div css={s.topRow}>
          <span
            css={[
              s.rankBadgeBase(theme),
              isTop3 ? s.rankBadgeTop3(theme) : s.rankBadgeOther(theme),
            ]}
          >
            {text}
          </span>
          <button css={s.likeButton} onClick={toggleLike}>
            <Icon
              name={isLiked ? 'wishFill' : 'wish'}
              width={24}
              height={24}
              fill={isLiked ? undefined : theme.colors.gray3}
            />
          </button>
        </div>
        <div css={s.titleContainer}>
          <p css={s.title(theme)}>{title}</p>
          <div css={s.subtitle(theme)}>
            {author} · {publisher}
          </div>
        </div>

        <div css={s.priceRow}>
          <span css={s.discount(theme)}>{discountRate}%</span>
          <div>
            <span css={s.price(theme)}>{parseInt(price, 10).toLocaleString()}</span>
            <span css={s.won(theme)}>원</span>
          </div>
          <span css={s.point(theme)}>({point}P)</span>
        </div>

        <div css={s.reviewRow}>
          <span css={s.rating(theme)}>
            <Icon name="star" width={14} height={14} /> {star}
          </span>
          <span css={s.separator(theme)}>/</span>
          <span css={s.review(theme)}>
            <Icon name="quote" width={14} height={14} />
            {bestEmotion}
          </span>
        </div>

        <div css={s.deliveryRow}>
          <span css={s.deliveryBadge(theme)}>당일배송</span>
          <span css={s.deliveryDate(theme)}>{deliveryDate}</span>
          <span css={s.deliveryText(theme)}>도착</span>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
