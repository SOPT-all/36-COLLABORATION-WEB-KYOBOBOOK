import { Row, Item, Label } from '@/pages/Home/components/CategoryButton/CategoryButton.style';
import { Button } from '@/components/Button/Button';
import Icon from '@/components/Icon';

const CATEGORY_DATA = [
  { name: 'ticket', label: '할인쿠폰' },
  { name: 'sale', label: '오늘만특가' },
  { name: 'mission', label: '오늘의미션' },
  { name: 'store', label: '매장' },
  { name: 'funding', label: '바로펀딩' },
] as const;

const CategoryButton = () => {
  return (
    <div css={Row}>
      {CATEGORY_DATA.map(({ name, label }) => (
        <div key={name} css={Item}>
          <Button
            variant="mainOutlined"
            icon={<Icon name={name} width={36} height={36} />}
          >
            <span css={Label}>{label}</span>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default CategoryButton;
