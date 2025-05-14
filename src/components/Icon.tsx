import { iconMap } from '@/assets/icons/index';
import type { IconType } from '@/types/IconType';

const Icon = ({ name, width = 24, height = 24, fill }: IconType) => {
  const SvgIcon = iconMap[name];

  if (!SvgIcon) {
    return null;
  }

  return <SvgIcon width={width} height={height} fill={fill} />;
};
export default Icon;
