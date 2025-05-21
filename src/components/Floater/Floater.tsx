import { useTheme } from '@emotion/react';

import { FloaterStyle as s } from '@/components/Floater/Floater.style';
import Icon from '@/components/Icon';

export default function Floater() {
  const theme = useTheme();

  // 위로 화살표 버튼 눌렀을 때, 스크롤 최상단 이동
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div css={s.wrapper}>
      <button css={s.floatingButton(theme)}>
        <Icon name="floating" width={44} height={44} />
      </button>
      <button css={s.scrollTopButton(theme)} onClick={handleScrollToTop}>
        <Icon name="arrowUp" width={24} height={24} fill={theme.colors.black1} />
      </button>
    </div>
  );
}
