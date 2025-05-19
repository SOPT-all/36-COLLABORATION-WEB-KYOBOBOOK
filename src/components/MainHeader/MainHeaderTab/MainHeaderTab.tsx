import {
  iconStyle,
  tabButtonStyle,
} from '@/components/MainHeader/MainHeaderTab/MainHeaderTab.style';

interface MainHeaderTabTypes {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const MainHeaderTab = ({ label, icon, active = false, onClick }: MainHeaderTabTypes) => {
  const isStatic = Boolean(icon);
  return (
    <button css={tabButtonStyle({ active, isStatic })} onClick={onClick}>
      {label}
      {icon && <span css={iconStyle}>{icon}</span>}
    </button>
  );
};

export default MainHeaderTab;
