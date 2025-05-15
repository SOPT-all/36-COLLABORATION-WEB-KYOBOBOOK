import { useLocation, useNavigate } from 'react-router-dom';

import Icon from '@/components/Icon';
import { theme } from '@/styles/theme';
import {
  headerContainer,
  searchContainer,
  searchInputWrapper,
  searchInput,
  cartIconWrapper,
  headerTabWrapper,
} from '@/components/Header/Header.style';
import { headerTabs } from '@/components/Header/HeaderTabButton/headerTabs';
import TabButton from '@/components/Header/HeaderTabButton/HeaderTabButton';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div css={headerContainer}>
      <Icon name="headerNavBar" width={375} height={44} />
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
