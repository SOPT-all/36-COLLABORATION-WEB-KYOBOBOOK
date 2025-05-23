import { useState } from 'react';

import { FirstCartViewStyle as s } from './FirstCartView.style';

import Icon from '@/components/Icon';
import type { BookDetailResponse } from '@/types/bookDetailTypes';

interface BookDetailProps {
  bookData?: BookDetailResponse;
}

const FirstCartView = ({ bookData }: BookDetailProps) => {
  const [count, setCount] = useState(1);
  const MAX_COUNT = 10;
  const discountedUnitPrice = Number(bookData?.price?.replace('원', '') ?? '0');

  const originalUnitPrice = Math.floor(discountedUnitPrice / 0.9);

  const discountedTotalPrice = discountedUnitPrice * count;

  const originalTotalPrice = originalUnitPrice * count;

  const totalPoint = Math.floor(discountedTotalPrice * 0.05);

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrease = () => {
    if (count < MAX_COUNT) {
      setCount(count + 1);
    }
  };

  return (
    <div css={s.Wrapper}>
      <div css={s.firstBox}>
        <div css={s.topWrapper}>
          <div css={s.Banner}>
            <div css={s.bannerTop}>
              <button css={s.iconButton}>
                <Icon name="delivery" width={20} height={20} />
              </button>
              <p>
                <span className="highlight">5만원</span>이상 구매 시{' '}
                <span className="bold">추가 적립!</span>
              </p>
              <Icon name="question" width={18} height={18} />
            </div>
            <button css={s.thingButton}>상품추가</button>
          </div>
          <div css={s.deliveryBar} />
          <p css={s.uniText}>*교보문고 배송 상품 기준 (해외주문도서 제외)</p>
        </div>
      </div>

      <div css={s.secondBox}>
        <div css={s.sectionHeader}>
          <Icon name="check" width={20} height={20} />
          <span className="title">교보문고/바로드림</span>
          <Icon name="up" width={20} height={20} />
        </div>
      </div>

      <div css={s.Card}>
        <div css={s.cardHeader}>
          <div css={s.bookTag}>
            <Icon name="check" width={20} height={20} />
            <span css={s.titleText}>{bookData?.title ?? ''}</span>
          </div>
          <Icon name="close" width={20} height={20} />
        </div>

        <div css={s.cardBody}>
          <img
            css={s.imageStyle}
            src={bookData?.imageUrl ?? ''}
            alt={`책 대표 이미지 - ${bookData?.title}`}
          />
          <div className="priceSection">
            <div className="priceBox">
              <p className="discount">10%</p>
              <p className="finalPrice">{discountedTotalPrice.toLocaleString()}원</p>
              <p className="origin">
                <span className="originPrice">{originalTotalPrice.toLocaleString()}원</span>
                <span className="point"> ({totalPoint.toLocaleString()}P)</span>
              </p>
            </div>
            <div className="countController">
              <button onClick={handleDecrease} disabled={count === 1}>
                −
              </button>
              <span>{count}</span>
              <button onClick={handleIncrease} disabled={count === MAX_COUNT}>
                +
              </button>
            </div>
            <div className="chips">
              <div className="line">
                <span css={s.Chip}>당일배송</span>
                <span>오늘(4/24, 목) 도착</span>
              </div>
              <div className="line">
                <span css={s.secondChip}>바로드림</span>
                <span>9시간 이후 수령 가능</span>
              </div>
            </div>
          </div>
        </div>
        <button css={s.footerButton}>무료배송 상품 추가하기</button>
      </div>
    </div>
  );
};

export default FirstCartView;
