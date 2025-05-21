/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';

import { Row, Item, Label } from './CategoryButton.styles';

import { Button } from '@/components/Button/Button';
import Icon from '@/components/Icon';

const CategoryButton = () => {
  const theme = useTheme();

  return (
    <div css={Row}>
      <div css={Item}>
        <Button
          variant="mainOutlined"
          icon={<Icon name="ticket" width={36} height={36} fill={theme.colors.purple6} />}
        >
          <span css={Label}>할인쿠폰</span>
        </Button>
      </div>
      <div css={Item}>
        <Button
          variant="mainOutlined"
          icon={<Icon name="sale" width={36} height={36} fill={theme.colors.purple6} />}
        >
          <span css={Label}>오늘만특가</span>
        </Button>
      </div>
      <div css={Item}>
        <Button
          variant="mainOutlined"
          icon={<Icon name="mission" width={36} height={36} fill={theme.colors.purple6} />}
        >
          <span css={Label}>오늘의미션</span>
        </Button>
      </div>
      <div css={Item}>
        <Button
          variant="mainOutlined"
          icon={<Icon name="store" width={36} height={36} fill={theme.colors.purple6} />}
        >
          <span css={Label}>매장</span>
        </Button>
      </div>
      <div css={Item}>
        <Button
          variant="mainOutlined"
          icon={<Icon name="funding" width={36} height={36} fill={theme.colors.purple6} />}
        >
          <span css={Label}>바로펀딩</span>
        </Button>
      </div>
    </div>
  );
};

export default CategoryButton;
