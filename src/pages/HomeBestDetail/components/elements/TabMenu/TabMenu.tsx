import { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';

import TabButton from '@/pages/HomeBestDetail/components/elements/TabMenu/TabButton';
import {
  sortButton,
  tabMenuContainer,
} from '@/pages/HomeBestDetail/components/elements/TabMenu/TabMenu.style';
import Icon from '@/components/Icon';

const tabs = ['상품정보', '리뷰 (118)', '이벤트', '교환/반품/품절'];
const reviewTabs = ['전체 리뷰', '구매 리뷰'];

type TabMenuTypes = {
  type: 'default' | 'review';
};

export default function TabMenu({ type }: TabMenuTypes) {
  const theme = useTheme();
  const currentTabs = type === 'default' ? tabs : reviewTabs;
  const [selectedTab, setSelectedTab] = useState(currentTabs[0]);

  useEffect(() => {
    setSelectedTab(currentTabs[0]);
  }, [type]);

  const handleTab = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <nav css={tabMenuContainer(theme)}>
      {currentTabs.map((tab) => (
        <TabButton
          key={tab}
          tab={tab}
          isActive={selectedTab === tab}
          onClick={() => handleTab(tab)}
        />
      ))}
      {type === 'review' && (
        <button css={sortButton(theme)}>
          <span>좋아요 순</span>
          <Icon name="down" width={12} height={12} />
        </button>
      )}
    </nav>
  );
}
