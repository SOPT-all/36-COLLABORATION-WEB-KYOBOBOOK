import { useState } from 'react';
import { useTheme } from '@emotion/react';

import MenuButton from '@/pages/HomeBest/components/MenuButton/MenuButton';
import { CategoryButtonList, MENU_BUTTON_LIST } from '@/pages/HomeBest/HomeBest.constants';
import CategoryButton from '@/pages/HomeBest/components/CategoryButton/CategoryButton';
import MainHeader from '@/components/MainHeader/MainHeader';
import HorizontalScrollList from '@/components/HorizontalScroll/HorizontalScroll';
import * as s from '@/pages/HomeBest/HomeBest.style';
import Icon from '@/components/Icon';

const HomeBest = () => {
  const theme = useTheme();
  const [activeCategory, setActiveCategory] = useState('종합'); // 기본값 '종합'
  const [activeMenu, setActiveMenu] = useState(0);
  const today = new Date();
  const formattedDate = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;

  return (
    <>
      <MainHeader />
      <HorizontalScrollList gap="0.8rem">
        {CategoryButtonList.map(({ label, iconName }) => (
          <CategoryButton
            key={label}
            text={label}
            iconName={iconName}
            active={activeCategory === label}
            onClick={() => setActiveCategory(label)}
          />
        ))}
      </HorizontalScrollList>

      <h2 css={s.titleStyle(theme)}>도서 종류</h2>
      <HorizontalScrollList gap="0.6rem">
        {MENU_BUTTON_LIST.map((label, idx) => (
          <MenuButton
            key={label}
            label={label}
            active={activeMenu === idx}
            onClick={() => setActiveMenu(idx)}
          />
        ))}
      </HorizontalScrollList>

      <div css={s.wrapper}>
        <div css={s.leftGroup}>
          <span css={s.date(theme)}>{formattedDate}</span>
          <Icon name="info" width={16} height={16} />
        </div>

        <div css={s.rightGroup}>
          <span css={s.label(theme)}>
            <span>일간</span>
            <Icon name="circleDown" width={20} height={20} fill={theme.colors.white} />
          </span>
          <button css={s.iconButton}>
            <Icon name="view" width={16} height={16} />
          </button>
          <button css={s.iconButton}>
            <Icon name="download" width={16} height={16} />
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeBest;
