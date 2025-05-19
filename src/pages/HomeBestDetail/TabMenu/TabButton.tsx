import { useTheme } from '@emotion/react';

import { tabButton, tabText } from '@/pages/HomeBestDetail/TabMenu/TabButton.style';

type TabTypes = {
  tab: string;
  isActive: boolean;
  onClick: () => void;
};

export default function TabButton({ tab, isActive, onClick }: TabTypes) {
  const theme = useTheme();

  return (
    <button onClick={onClick} css={tabButton}>
      <span css={tabText(theme, isActive)}>{tab}</span>
    </button>
  );
}
