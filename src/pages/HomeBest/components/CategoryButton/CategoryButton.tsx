import { useTheme } from '@emotion/react';

import { type CategoryButtonTypes } from '@/pages/HomeBest/HomeBest.constants';
import * as s from '@/pages/HomeBest/components/CategoryButton/CategoryButton.style';
import Icon from '@/components/Icon';

interface CategoryListTypes extends Omit<CategoryButtonTypes, 'label'> {
  active: boolean;
  text: string;
  onClick?: () => void;
}

const CategoryButton = ({ active, text, onClick, iconName }: CategoryListTypes) => {
  const theme = useTheme();
  return (
    <button css={s.buttonStyle(active, theme)} onClick={onClick} type="button">
      <span css={s.iconStyle(active, theme)}>
        <Icon name={iconName} width={24} height={24} fill="currentColor" />
      </span>
      <span css={s.labelStyle(active, theme)}>{text}</span>
    </button>
  );
};

export default CategoryButton;
