import * as s from './TopButton.style';
import type { TopButtonItemTypes } from './TopButton.constants';

import Icon from '@/components/Icon';

interface TopButtonProps extends Omit<TopButtonItemTypes, 'label'> {
  active: boolean;
  text: string;
  onClick?: () => void;
}

const TopButton = ({ active, text, onClick, iconName = 'star' }: TopButtonProps) => {
  return (
    <button css={s.buttonStyle(active)} onClick={onClick} type="button">
      <Icon name={iconName} width={24} height={24} fill="currentColor" />
      {text}
    </button>
  );
};

export default TopButton;
