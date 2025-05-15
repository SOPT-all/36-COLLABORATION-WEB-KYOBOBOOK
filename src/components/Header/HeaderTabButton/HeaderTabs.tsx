import Icon from '@/components/Icon';
import routePath from '@/routes/routePath';

interface HeaderTabItemTypes {
  label: string;
  icon?: React.ReactNode;
  route?: string;
}

export const headerTabs: HeaderTabItemTypes[] = [
  {
    label: '한강 신작',
    icon: <Icon name="dot" width={4} height={4} />,
  },
  {
    label: '책의날특집',
    icon: <Icon name="dot" width={4} height={4} />,
  },
  {
    label: '베스트',
    route: routePath.HOME_BEST,
  },
  {
    label: '신상품',
  },
  {
    label: '이벤트',
  },
];
