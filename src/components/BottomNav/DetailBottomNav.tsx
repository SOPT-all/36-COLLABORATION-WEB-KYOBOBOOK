import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';

import { DetailBottomNavStyle as s } from '@/components/BottomNav/DetailBottomNav.style';
import Icon from '@/components/Icon';
import { useBookId } from '@/utils/useBookId';

const DetailBottomNav = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const bookId = useBookId();

  const handleLikeToggle = () => {
    setLiked((prev) => !prev);
  };

  const handleGoToCart = () => {
    navigate(`/best/detail-cart/${bookId}`);
  };

  return (
    <nav css={s.wrapper(theme)}>
      <button css={s.iconButton(theme)} onClick={handleLikeToggle}>
        <Icon name={liked ? 'wishFill' : 'wish'} width={24} height={24} />
      </button>
      <button css={s.cartButton(theme)} onClick={handleGoToCart}>
        장바구니 담기
      </button>
      <button css={s.purchaseButton(theme)} onClick={handleGoToCart}>
        바로 구매하기
      </button>
    </nav>
  );
};

export default DetailBottomNav;
