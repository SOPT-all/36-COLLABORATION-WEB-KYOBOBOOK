import { useState } from 'react';
import { useTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

import { mockBooks } from './mockBooks';
import HomeBottomNav from '@/components/BottomNav/HomeBottomNav';

import MenuButton from '@/pages/HomeBest/components/MenuButton/MenuButton';
import {
  CategoryButtonList,
  MENU_BUTTON_LIST,
  type CategoryButtonTypes,
} from '@/pages/HomeBest/HomeBest.constants';
import CategoryButton from '@/pages/HomeBest/components/CategoryButton/CategoryButton';
import MainHeader from '@/components/MainHeader/MainHeader';
import HorizontalScrollList from '@/components/HorizontalScroll/HorizontalScroll';
import * as s from '@/pages/HomeBest/HomeBest.style';
import Icon from '@/components/Icon';
import BookItem from '@/pages/HomeBest/components/BookItem/BookItem';
import Footer from '@/components/Footer/Footer';
import routePath from '@/routes/routePath';

const HomeBest = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState<CategoryButtonTypes['label']>('종합');
  const [activeMenu, setActiveMenu] = useState(0);
  const today = new Date();
  const formattedDate = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;

  const handleBookClick = () => {
    navigate(routePath.HOME_BEST_DETAIL);
  };

  return (
    <>
      <MainHeader />
      <HorizontalScrollList gap="0.8rem">
        {CategoryButtonList.map(({ label, iconName }) => (
          <CategoryButton
            key={`${label}-${iconName}`}
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
            key={`${label}-${idx}`}
            label={label}
            active={activeMenu === idx}
            onClick={() => setActiveMenu(idx)}
          />
        ))}
      </HorizontalScrollList>

      <div css={s.wrapper(theme)}>
        <div css={s.leftGroup}>
          <span css={s.date(theme)}>{formattedDate}</span>
          <Icon name="info" width={16} height={16} />
        </div>

        <div css={s.rightGroup}>
          <span css={s.label(theme)}>
            <span>일간</span>
            <Icon name="circleDown" width={20} height={20} fill={theme.colors.white} />
          </span>
          <button css={s.iconButton(theme)}>
            <Icon name="view" width={16} height={16} />
          </button>
          <button css={s.iconButton(theme)}>
            <Icon name="download" width={16} height={16} />
          </button>
        </div>
      </div>

      <div css={s.bookListWrapper}>
        {mockBooks.map((book) => (
          <BookItem key={book.rank} {...book} onClick={handleBookClick} />
        ))}
      </div>

      <Footer />
      <HomeBottomNav />
    </>
  );
};

export default HomeBest;
