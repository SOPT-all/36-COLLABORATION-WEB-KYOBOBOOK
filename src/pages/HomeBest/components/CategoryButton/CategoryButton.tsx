import { type CategoryButtonTypes } from '@/pages/HomeBest/HomeBest.constants';
import * as s from '@/pages/HomeBest/components/CategoryButton/CategoryButton.style';
import Icon from '@/components/Icon';

interface TopButtonProps extends Omit<CategoryButtonTypes, 'label'> {
  active: boolean;
  text: string;
  onClick?: () => void;
}

const CategoryButton = ({ active, text, onClick, iconName = 'star' }: TopButtonProps) => {
  return (
    <button css={s.buttonStyle(active)} onClick={onClick} type="button">
      <span css={s.iconStyle(active)}>
        <Icon name={iconName} width={24} height={24} fill="currentColor" />
      </span>
      <span css={s.labelStyle(active)}>{text}</span>
    </button>
  );
};

export default CategoryButton;
