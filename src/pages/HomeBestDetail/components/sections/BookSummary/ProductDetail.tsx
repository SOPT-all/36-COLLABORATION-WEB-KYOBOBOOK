import { useTheme } from '@emotion/react';

import * as s from '@/pages/HomeBestDetail/components/sections/BookSummary/ProductDetail.style';
import Icon from '@/components/Icon';
import StarRating from '@/pages/HomeBestDetail/components/elements/StarRating/StarRating';
import { Chip } from '@/components/Chip/Chip';
import useToggle from '@/hooks/useToggle';
import type { BookDetailResponse } from '@/types/bookDetailTypes';

interface ProductDetailProps {
  productData: BookDetailResponse | undefined;
}

const ProductDetail = ({ productData }: ProductDetailProps) => {
  const theme = useTheme();
  const { isLiked, handleLike } = useToggle();

  const discountedPrice = Number(productData?.price?.replace('원', '') ?? '0');
  const originalPrice = Math.floor(discountedPrice / 0.9);
  const point = Math.floor(discountedPrice * 0.05);

  return (
    <div css={s.productWrapper}>
      <div css={s.priceWrapper}>
        <span css={s.saleText(theme)}>10%</span>
        <span css={s.priceText(theme)}>
          <b css={s.priceNumber(theme)}>{discountedPrice.toLocaleString()}</b>원
        </span>
        <span css={s.beforeText(theme)}>{originalPrice.toLocaleString()}원</span>
      </div>

      <div css={s.benefitWrapper(theme)}>
        <p css={s.benefitText(theme)}>적립/혜택</p>
        <div css={s.pointWrapper}>
          <span css={s.pointText(theme)}>{point.toLocaleString()}P</span>
          <Icon name="circleDown" fill={theme.colors.white} width={20} height={20} />
        </div>
      </div>

      <div css={s.deliverWrapper(theme)}>
        <div css={s.deliverFistWrapper}>
          <p css={s.benefitText(theme)}>배송안내</p>
          <div css={s.deliverRightWrapper}>
            <span css={s.deliverText(theme)}>무료배송</span>
            <Icon name="info" fill={theme.colors.white} width={18} height={18} />
          </div>
        </div>
        <div css={s.deliverRightWrapper}>
          <Chip variant="filledRoundPurple">당일배송</Chip>
          <b css={s.arriveText(theme)}>오늘 (4/24,목) 도착</b>
          <Icon name="info" fill={theme.colors.white} width={18} height={18} />
        </div>
        <div css={s.deliverRightWrapper}>
          <span css={s.deliverText(theme)}>기본배송지 기준</span>
          <Icon name="info" fill={theme.colors.white} width={18} height={18} />
        </div>
      </div>

      <div css={s.deliverInfoWrapper(theme)}>
        <p css={s.deliverInfoText(theme)}>
          <span css={s.loginText(theme)}>로그인</span> 후
          <span css={s.arriveText(theme)}> 정확한 배송 안내</span>를 받아보세요!
        </p>

        <div css={s.infoWrapper(theme)}>
          <div css={s.firstLineContainer}>
            <p css={s.firstLineText(theme)}>이달의 꽃과 함께 책을 받아보세요!</p>
            <button css={s.moreButton(theme)}>
              <span css={s.moreText(theme)}>자세히 보기</span>
              <Icon name="right" width={10} height={10} fill={theme.colors.gray4} />
            </button>
          </div>
          <p css={s.secondLineText(theme)}>· 1권 구매 시 결제 단계에서 적용 가능합니다.</p>
        </div>
      </div>

      <div css={s.deliverInfoWrapper(theme)}>
        <div css={s.alarmInfoContainer}>
          <p css={s.alarmText(theme)}>알림 신청하시면 원하시는 정보를 받아 보실 수 있습니다.</p>
          <button css={s.alarmButton(theme)}>
            <Icon name="bell" width={10} height={10} fill={theme.colors.purple7} />
            <span css={s.alarmButtonText(theme)}>알림신청</span>
          </button>
        </div>
        <div css={s.infoWrapper(theme)}>
          <div css={s.firstLineContainer}>
            <Icon name="message" width={20} height={20} />
            <p css={s.arriveText(theme)}>알립니다.</p>
          </div>
          <p css={s.alarmSecondLineText(theme)}>
            사은품 ‘영하의 무물' 한정판 별책 (포인트 차감, 추가결제)
          </p>
        </div>
      </div>

      <div css={s.reviewWrapper(theme)}>
        <div css={s.reviewBox(theme)}>
          <span css={s.ratingText(theme)}>4</span>
          <StarRating rating={4} />
          <p css={s.reviewText(theme)}>
            (<b css={s.countText(theme)}>118개</b>의 리뷰)
          </p>
        </div>
        <div css={s.reviewBox(theme)}>
          <Icon name="quote" fill={theme.colors.purple7} />
          <span css={s.emotionText(theme)}>감동이에요</span>
          <p css={s.reviewText(theme)}>
            (<b css={s.countText(theme)}>70%</b>의 구매자)
          </p>
        </div>
      </div>

      <button css={s.locationButton(theme)}>
        <Icon name="map" width={16} height={16} />
        <p css={s.locationText(theme)}>매장 재고·위치</p>
      </button>

      <div css={s.buttonWrapper}>
        <button css={s.buttonContainer}>
          <Icon name="share" />
          <span css={s.buttonText(theme)}>공유</span>
        </button>
        <button css={s.buttonContainer} onClick={handleLike}>
          <Icon
            name={isLiked ? 'wishFill' : 'wish'}
            fill={isLiked ? undefined : theme.colors.gray4}
          />
          <span css={s.buttonText(theme)}>찜</span>
          <span css={s.wishCountText(theme)}>(1,529)</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
