import { useLocation, useNavigate } from 'react-router-dom';

import routePath from '@/routes/routePath';
import Icon from '@/components/Icon';
import { theme } from '@/styles/theme';
import {
  headerContainer,
  searchContainer,
  searchInputWrapper,
  searchInput,
  cartIconWrapper,
  headerTabWrapper,
  layeredWrapper,
  layeredIconWrapper,
} from '@/components/Header/Header.style';
import { headerTabs } from '@/components/Header/HeaderTabButton/headerTabs';
import TabButton from '@/components/Header/HeaderTabButton/HeaderTabButton';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(routePath.HOME);
  };
  return (
    <div css={headerContainer}>
      <div css={layeredWrapper}>
        <div css={layeredIconWrapper(0)}>
          <Icon name="navHottracks" width={375} height={30} />
        </div>
        <div css={layeredIconWrapper(1)}>
          <Icon name="navSam" width={300} height={30} />
        </div>
        <div css={layeredIconWrapper(2)}>
          <Icon name="navEbook" width={223} height={30} />
        </div>
        <div css={layeredIconWrapper(3)}>
          <Icon name="navLogoBackground" width={148} height={45.1} />
        </div>
        <div css={layeredIconWrapper(4)} onClick={handleLogoClick}>
          <Icon name="icHeaderLogo" width={90} height={29} />
        </div>
      </div>

      <div css={searchContainer}>
        <div css={searchInputWrapper}>
          <Icon name="search" width={24} height={24} fill={`${theme.colors.gray5}`} />
          <input
            css={searchInput}
            type="text"
            placeholder="SBS 그알 화제의 법의학자 유성호, 신작"
          />
        </div>
        <div css={cartIconWrapper}>
          <Icon name="cart" width={24} height={24} />
        </div>
      </div>
      <div css={headerTabWrapper}>
        {headerTabs.map(({ label, icon, route }) => (
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
  );
};

export default Header;
