import type { iconMap } from '@/assets/icons';

export interface CategoryButtonTypes {
  label: '종합' | '온라인' | '실시간' | '매장별' | '인물';
  iconName: keyof typeof iconMap;
}

const CategoryButtonList: CategoryButtonTypes[] = [
  { label: '종합', iconName: 'total' },
  { label: '온라인', iconName: 'online' },
  { label: '실시간', iconName: 'readtime' },
  { label: '매장별', iconName: 'bestStore' },
  { label: '인물', iconName: 'person' },
];

const MENU_BUTTON_LIST = ['종합', '소설', '경제/경영', '자기계발', '시/에세이'];

export { CategoryButtonList, MENU_BUTTON_LIST };
