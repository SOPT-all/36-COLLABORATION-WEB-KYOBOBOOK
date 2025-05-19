import { useState } from 'react';

import { TopButtonList } from './components/TopButton/TopButton.constants';
import TopButton from './components/TopButton/TopButton';

import MainHeader from '@/components/MainHeader/MainHeader';
import HorizontalScrollList from '@/components/HorizontalScroll/HorizontalScroll';

const HomeBest = () => {
  const [activeTab, setActiveTab] = useState('종합'); // 기본값 '종합'

  return (
    <>
      <MainHeader />
      <div>홈 베스트 페이지입니다</div>
      <HorizontalScrollList gap="0.8rem">
        {TopButtonList.map(({ label, iconName }) => (
          <TopButton
            key={label}
            text={label}
            iconName={iconName}
            active={activeTab === label}
            onClick={() => setActiveTab(label)}
          />
        ))}
      </HorizontalScrollList>
    </>
  );
};

export default HomeBest;
