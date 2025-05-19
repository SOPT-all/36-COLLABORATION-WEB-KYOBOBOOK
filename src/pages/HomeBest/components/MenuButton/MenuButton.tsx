import { useTheme } from '@emotion/react';

import * as s from '@/pages/HomeBest/components/MenuButton/MenuButton.style';

interface MenuButtonProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const MenuButton = ({ label, active = false, onClick }: MenuButtonProps) => {
  const theme = useTheme();
  return (
    <button css={s.menuButtonStyle(active, theme)} onClick={onClick} type="button">
      {label}
    </button>
  );
};

export default MenuButton;
