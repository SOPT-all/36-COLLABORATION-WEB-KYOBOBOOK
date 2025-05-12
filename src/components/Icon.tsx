import { iconMap } from '../assets/icons/index';
import type { IconType } from '../types/IconType';

export default function Icon({ name, width = 24, height = 24, fill, stroke, className }: IconType) {
  const SvgIcon = iconMap[name];

  if (!SvgIcon) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return (
    <SvgIcon width={width} height={height} fill={fill} stroke={stroke} className={className} />
  );
}
