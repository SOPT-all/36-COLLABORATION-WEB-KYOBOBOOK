import { useState } from 'react';

import * as s from '@/pages/HomeBest/components/BookItem/BookItem.style';
import { getRankBadgeInfo } from '@/pages/HomeBest/utils/getRankBadgeStyle';
import Icon from '@/components/Icon';
import { theme } from '@/styles/theme';

interface BookItemPropTypes {
  rank: number;
  title: string;
  author: string;
  publisher: string;
  discountRate: number;
  price: number;
  point: number;
  rating: number;
  review: string;
  deliveryDate: string;
  isLiked: boolean;
  imageUrl: string;
}

const BookItem = ({
  rank,
  title,
  author,
  publisher,
  discountRate,
  price,
  point,
  rating,
  review,
  deliveryDate,
  isLiked: defaultLiked,
  imageUrl,
}: BookItemPropTypes) => {
  const { text, isTop3 } = getRankBadgeInfo(rank);
  const [isLiked, setIsLiked] = useState(defaultLiked);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div css={s.container}>
      <div css={s.imageWrapper}>
        <img src={imageUrl} alt={title} css={s.bookImage} />
      </div>

      <div css={s.content}>
        <div css={s.topRow}>
          <span css={[s.rankBadgeBase, isTop3 ? s.rankBadgeTop3 : s.rankBadgeOther]}>{text}</span>
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
          <h3 css={s.title}>{title}</h3>
          <div css={s.subtitle}>
            {author} · {publisher}
          </div>
        </div>

        <div css={s.priceRow}>
          <span css={s.discount}>{discountRate}%</span>
          <div>
            <span css={s.price}>{price.toLocaleString()}</span>
            <span css={s.won}>원</span>
          </div>
          <span css={s.point}>({point}P)</span>
        </div>

        <div css={s.reviewRow}>
          <span css={s.rating}>
            <Icon name="star" width={14} height={14} /> {rating}
          </span>
          <span css={s.separator}>/</span>
          <span css={s.review}>
            <Icon name="quote" width={14} height={14} />
            {review}
          </span>
        </div>

        <div css={s.deliveryRow}>
          <span css={s.deliveryBadge}>당일배송</span>
          <span css={s.deliveryDate}>{deliveryDate}</span>
          <span css={s.deliveryText}>도착</span>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
