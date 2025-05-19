import type { iconMap } from "@/assets/icons";

export interface TopButtonItemTypes {
  label: string;
  iconName: keyof typeof iconMap;
}

export const TopButtonList: TopButtonItemTypes[] = [
  { label: '종합', iconName: 'total' },
  { label: '온라인', iconName: 'online' },
  { label: '실시간', iconName: 'readtime' },
  { label: '매장별', iconName: 'star' },
  { label: '인물', iconName: 'person' },
];
