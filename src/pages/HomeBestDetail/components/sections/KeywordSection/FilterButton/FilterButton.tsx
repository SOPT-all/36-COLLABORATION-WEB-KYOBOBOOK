import { useTheme } from '@emotion/react';

import * as s from '@/pages/HomeBestDetail/components/sections/KeywordSection/FilterButton/FilterButton.style';

interface FilterButtonTypes {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const FilterButton = ({ label, active = false, onClick }: FilterButtonTypes) => {
  const theme = useTheme();
  return (
    <button css={s.menuButtonStyle(active, theme)} onClick={onClick} type="button">
      {label}
    </button>
  );
};

export default FilterButton;
