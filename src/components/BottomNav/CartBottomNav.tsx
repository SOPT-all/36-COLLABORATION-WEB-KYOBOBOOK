import { useTheme } from '@emotion/react';
import { CartBottomNavStyle as s } from '@/components/BottomNav/CartBottomNav.style';

const CartBottomNav = () => {
  const theme = useTheme();
  const Price = 15120;

  return (
    <div css={s.wrapper(theme)}>
      <div css={s.priceWrapper}>
        <span css={s.label(theme)}>결제 예정 금액</span>
        <span css={s.amount(theme)}>{Price.toLocaleString()}원</span>
      </div>
      <button css={s.purchaseButton(theme)}>구매하기</button>
    </div>
  );
};

export default CartBottomNav;
