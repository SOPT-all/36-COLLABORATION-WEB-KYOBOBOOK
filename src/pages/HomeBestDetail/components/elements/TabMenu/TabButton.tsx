import { useTheme } from '@emotion/react';

import {
  tabButton,
  tabCount,
  tabText,
} from '@/pages/HomeBestDetail/components/elements/TabMenu/TabButton.style';

type TabTypes = {
  tab: string;
  isActive: boolean;
  onClick: () => void;
};

export default function TabButton({ tab, isActive, onClick }: TabTypes) {
  const theme = useTheme();

  const reviewText = (tab: string) => {
    const match = tab.match(/^(.*?)(\s*\(\d+\))$/);
    if (!match) {
      return [tab, ''];
    }
    return [match[1], match[2]];
  };

  const [label, count] = reviewText(tab);

  return (
    <button onClick={onClick} css={tabButton}>
      <span css={tabText(theme, isActive)}>
        {label}
        {count && <span css={tabCount(theme, isActive)}>{count}</span>}
      </span>
    </button>
  );
}
