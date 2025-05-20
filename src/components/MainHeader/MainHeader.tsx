import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { useLayoutEffect, useRef, useState } from 'react';

import routePath from '@/routes/routePath';
import Icon from '@/components/Icon';
import * as s from '@/components/MainHeader/MainHeader.style';
import { MainHeaderTab } from '@/components/MainHeader/MainHeaderTab.constants';
import TabButton from '@/components/MainHeader/MainHeaderTab/MainHeaderTab';

const MainHeader = () => {
  const theme = useTheme();

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(routePath.HOME);
  };

  const tabRef = useRef<HTMLDivElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useLayoutEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsSticky(!entry.isIntersecting);
    });

    observer.observe(sentinel);

    return () => {
      observer.unobserve(sentinel);
    };
  }, []);

  return (
    <>
      <div css={s.headerContainer}>
        <div css={s.layeredWrapper(theme)}>
          <div css={s.layeredIconWrapper(0)}>
            <Icon name="navHottracks" width={375} height={30} />
          </div>
          <div css={s.layeredIconWrapper(1)}>
            <Icon name="navSam" width={300} height={30} />
          </div>
          <div css={s.layeredIconWrapper(2)}>
            <Icon name="navEbook" width={223} height={30} />
          </div>
          <div css={s.layeredIconWrapper(3)}>
            <Icon name="navLogoBackground" width={148} height={45.1} />
          </div>
          <div css={s.layeredIconWrapper(4)} onClick={handleLogoClick}>
            <Icon name="icHeaderLogo" width={90} height={29} />
          </div>
        </div>
        <div css={s.searchContainer(theme)}>
          <div css={s.searchInputWrapper(theme)}>
            <Icon name="search" width={24} height={24} fill={`${theme.colors.gray5}`} />
            <input
              css={s.searchInput(theme)}
              type="text"
              placeholder="SBS 그알 화제의 법의학자 유성호, 신작"
            />
          </div>
          <div css={s.cartIconWrapper}>
            <Icon name="cart" width={24} height={24} />
          </div>
        </div>
        <div ref={sentinelRef} />
        {isSticky && <div css={s.emptyContainer} />}

        <div css={[s.headerTabWrapper(theme), isSticky && s.headerTabSticky(theme)]} ref={tabRef}>
          {MainHeaderTab.map(({ label, icon, route }) => (
            <TabButton
              key={label}
              label={label}
              icon={icon}
              active={route ? location.pathname === route : false}
              onClick={route ? () => navigate(route) : undefined}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainHeader;
