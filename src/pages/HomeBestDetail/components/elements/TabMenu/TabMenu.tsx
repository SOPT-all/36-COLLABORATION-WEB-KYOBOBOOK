import { useState } from 'react';
import { useTheme } from '@emotion/react';

import TabButton from '@/pages/HomeBestDetail/components/elements/TabMenu/TabButton';
import {
  sortButton,
  tabMenuContainer,
} from '@/pages/HomeBestDetail/components/elements/TabMenu/TabMenu.style';
import Icon from '@/components/Icon';

const tabs = ['상품정보', '리뷰 (118)', '이벤트', '교환/반품/품절'];
const reviewTabs = ['전체 리뷰', '구매 리뷰'];
const NAVIGATE_TAB_NAME = '리뷰';

type TabMenuTypes = {
  type: 'default' | 'review';
  id?: string;
};

const TabMenu = ({ type, id }: TabMenuTypes) => {
  const theme = useTheme();
  const currentTabs = type === 'default' ? tabs : reviewTabs;
  const initialTab = type === 'default' ? tabs[0] : reviewTabs[1];

  const [selectedTab, setSelectedTab] = useState(initialTab);

  const handleTab = (tab: string) => {
    setSelectedTab(tab);
  };

  const goReviewSection = () => {
    const reviewElement = document.getElementById('review-section');
    if (reviewElement) {
      reviewElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav id={id} css={tabMenuContainer(theme)}>
      {currentTabs.map((tab) => (
        <TabButton
          key={tab}
          tab={tab}
          isActive={selectedTab === tab}
          onClick={() => {
            handleTab(tab);
            if (type === 'default' && tab.includes(NAVIGATE_TAB_NAME)) {
              goReviewSection();
            }
          }}
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
};
export default TabMenu;
