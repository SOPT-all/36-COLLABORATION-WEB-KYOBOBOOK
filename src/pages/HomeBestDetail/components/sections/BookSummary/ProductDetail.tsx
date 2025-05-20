import { useTheme } from '@emotion/react';

import {
  productWrapper,
  priceWrapper,
  saleText,
  priceText,
  priceNumber,
  beforeText,
  benefitWrapper,
  benefitText,
  pointWrapper,
  pointText,
  deliverText,
  deliverWrapper,
  deliverFistWrapper,
  deliverRightWrapper,
  deliverChip,
  arriveText,
  deliverInfoWrapper,
  deliverInfoText,
  loginText,
  infoWrapper,
  firstLineContainer,
  firstLineText,
  moreButton,
  moreText,
  secondLineText,
  alarmInfoContainer,
  alarmText,
  alarmButton,
  alarmButtonText,
  alarmSecondLineText,
} from '@/pages/HomeBestDetail/components/sections/BookSummary/ProductDetail.style';
import Icon from '@/components/Icon';

const ProductDetail = () => {
  const theme = useTheme();

  return (
    <div css={productWrapper(theme)}>
      <div css={priceWrapper(theme)}>
        <span css={saleText(theme)}>10%</span>
        <span css={priceText(theme)}>
          <b css={priceNumber(theme)}>15,120</b>원
        </span>
        <span css={beforeText(theme)}>16,800원</span>
      </div>

      <div css={benefitWrapper(theme)}>
        <p css={benefitText(theme)}>적립/혜택</p>
        <div css={pointWrapper(theme)}>
          <span css={pointText(theme)}>840P</span>
          <Icon name="circleDown" fill={theme.colors.white} width={20} height={20} />
        </div>
      </div>

      <div css={deliverWrapper(theme)}>
        <div css={deliverFistWrapper(theme)}>
          <p css={benefitText(theme)}>배송안내</p>
          <div css={deliverRightWrapper(theme)}>
            <span css={deliverText(theme)}>무료배송</span>
            <Icon name="info" fill={theme.colors.white} width={18} height={18} />
          </div>
        </div>
        <div css={deliverRightWrapper(theme)}>
          <span css={deliverChip(theme)}>당일배송</span>
          <b css={arriveText(theme)}>오늘 (4/24,목) 도착</b>
          <Icon name="info" fill={theme.colors.white} width={18} height={18} />
        </div>
        <div css={deliverRightWrapper(theme)}>
          <span css={deliverText(theme)}>기본배송지 기준</span>
          <Icon name="info" fill={theme.colors.white} width={18} height={18} />
        </div>
      </div>

      <div css={deliverInfoWrapper(theme)}>
        <p css={deliverInfoText(theme)}>
          <span css={loginText(theme)}>로그인</span> 후
          <span css={arriveText(theme)}> 정확한 배송 안내</span>를 받아보세요!
        </p>

        <div css={infoWrapper(theme)}>
          <div css={firstLineContainer(theme)}>
            <p css={firstLineText(theme)}>이달의 꽃과 함께 책을 받아보세요!</p>
            <button css={moreButton(theme)}>
              <span css={moreText(theme)}>자세히 보기</span>
              <Icon name="right" width={10} height={10} fill={theme.colors.gray4} />
            </button>
          </div>
          <p css={secondLineText(theme)}>· 1권 구매 시 결제 단계에서 적용 가능합니다.</p>
        </div>
      </div>

      <div css={deliverInfoWrapper(theme)}>
        <div css={alarmInfoContainer(theme)}>
          <p css={alarmText(theme)}>알림 신청하시면 원하시는 정보를 받아 보실 수 있습니다.</p>
          <button css={alarmButton(theme)}>
            <Icon name="bell" width={10} height={10} fill={theme.colors.purple7} />
            <span css={alarmButtonText(theme)}>알림신청</span>
          </button>
        </div>
        <div css={infoWrapper(theme)}>
          <div css={firstLineContainer(theme)}>
            <Icon name="message" width={20} height={20} />
            <p css={arriveText(theme)}>알립니다.</p>
          </div>
          <p css={alarmSecondLineText(theme)}>
            사은품 ‘영하의 무물' 한정판 별책 (포인트 차감, 추가결제)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
