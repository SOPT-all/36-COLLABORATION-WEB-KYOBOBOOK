import { useState } from 'react';

import { FirstCartViewStyle as s } from './FirstCartView.style';

import Icon from '@/components/Icon';
// import Chip from '@/components/Chip/Chip';

const FirstCartView = () => {
  const [count, setCount] = useState(1);
  const MAX_COUNT = 10;
  const price = 16800;
  const point = 840;

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

  const discounted = Math.floor(price * count * 0.9);
  const totalPoint = point * count;

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
            <span className="title">[국내도서] 단 한 번의 삶</span>
          </div>
          <Icon name="close" width={20} height={20} />
        </div>

        <div css={s.cardBody}>
          <Icon name="cartBook" width={62} height={90} />
          <div className="priceSection">
            <div className="priceBox">
              <p className="discount">10%</p>
              <p className="finalPrice">{discounted.toLocaleString()}원</p>
              <p className="origin">
                <span className="originPrice">{(price * count).toLocaleString()}원</span>
                <span className="point"> ({totalPoint}P)</span>
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
                <span css={s.Chip}>바로드림</span>
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
