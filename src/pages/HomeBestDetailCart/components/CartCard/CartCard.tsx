import { useTheme } from '@emotion/react';
import type { cartCardTypes } from '@/types/cardTypes';
import { CartCardStyle as s } from '@/pages/HomeBestDetailCart/components/CartCard/CartCard.style';

const CartCard = ({ imgUrl, title, price, type = 'rectangular' }: cartCardTypes) => {
  const theme = useTheme();
  const imgHeight = type === 'rectangular' ? '18.8rem' : '12.8rem';

  return (
    <div css={s.cardWrapper}>
      <img css={s.imgStyle(imgHeight)} src={imgUrl} alt={`책 표지 이미지 - ${title}`} />
      <button css={s.cartButton(theme)}>장바구니</button>
      <p css={s.title(theme)}>{title}</p>
      <p css={s.price(theme)}>
        {price.toLocaleString()}
        <span css={s.won(theme)}>원</span>
      </p>
    </div>
  );
};

export default CartCard;
