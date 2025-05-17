import {
  iconStyle,
  tabButtonStyle,
} from '@/components/Header/HeaderTabButton/HeaderTabButton.style';

interface TabButtonPropTypes {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const HeaderTabButton = ({ label, icon, active = false, onClick }: TabButtonPropTypes) => {
  const isStatic = Boolean(icon);
  return (
    <button css={tabButtonStyle({ active, isStatic })} onClick={onClick}>
      {label}
      {icon && <span css={iconStyle}>{icon}</span>}
    </button>
  );
};

export default HeaderTabButton;
