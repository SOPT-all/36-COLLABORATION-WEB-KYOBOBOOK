import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { HomeBottomNavStyle as s } from '@/components/BottomNav/HomeBottomNav.style';

import Icon from '@/components/Icon';
import routePath from '@/routes/routePath';

import type { IconName } from '@/assets/icons';

const navItems: { label: string; icon: IconName }[] = [
  { label: '홈', icon: 'homegreen' },
  { label: '카테고리', icon: 'menu' },
  { label: '검색', icon: 'search' },
  { label: '위시', icon: 'wish' },
  { label: '마이', icon: 'account' },
];

export default function HomeBottomNav() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== routePath.HOME) {
      navigate(routePath.HOME, { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <nav css={s.wrapper(theme)}>
      {navItems.map(({ label, icon }) => {
        const isHome = label === '홈';
        return (
          <button key={label} css={s.Button}>
            <Icon name={icon} width={24} height={24} />
            <span css={s.Label(theme, isHome)}>{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
