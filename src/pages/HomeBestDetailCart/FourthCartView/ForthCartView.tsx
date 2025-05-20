import { FourthCartViewStyle as s } from '@/pages/HomeBestDetailCart/FourthCartView/FourthCartView.style';
import Icon from '@/components/Icon';
import FoldableItem from '@/pages/HomeBestDetailCart/FourthCartView/FoldButton/FoldButton';

const FourthCartView = () => {
  return (
    <div css={s.Wrapper}>
      <h2 css={s.title}>결제 프로모션</h2>
      <div css={s.itemList}>
        <FoldableItem firstText="네이버페이" secondText="포인트 추가 적립(추첨)" />
        <FoldableItem firstText="카카오페이" secondText="3천원 즉시 할인(선착순)" />
        <FoldableItem firstText="카카오페이" secondText="생애 첫 결제 4천원 즉시 할인(선착순)" />
        <FoldableItem firstText="토스페이" secondText="계좌 결제 5천 포인트 추첨 지급(추첨)" />
      </div>

      <div css={s.cartBox}>
        <div css={s.foldButton}>
          <h3>장바구니 유의사항</h3>
          <Icon name="up" width={16} height={16} />
        </div>
        <div css={s.list}>
          <span>· 택배 배송일정은 기본배송지 기준으로 예상일이 노출됩니다.</span>
          <br />
          <span>
            · 상품별 배송일정이 서로 다를 시 가장 늦은 일정의 상품 기준으로 모두 함께 배송됩니다.
          </span>
          <br />
          <span>
            · 배송지 수정보다 예상일이 변경될 수 있으며, 주문서에서 배송일정을 꼭 확인하시기
            바랍니다.
          </span>
          <br />
          <span>· 바로드림의 수령가능일은 나의 기본매장 기준으로 노출됩니다.</span>
          <br />
          <span>· 쿠폰, 통합포인트, 교환권 사용시 적립예정포인트는 변동 될 수 있습니다.</span>
        </div>
      </div>
    </div>
  );
};

export default FourthCartView;
