/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Button } from '@/components/Button/Button';
import Icon from '@/components/Icon';

const container = css`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const TestButtonPage = () => {
  return (
    <div css={container}>
      <Button variant="mainFilled">기본 채움 버튼</Button>
      <Button variant="mainOutlined">외곽선 버튼</Button>
      <Button
        variant="iconFilledPurple"
        icon={<Icon name="ticket" width={24} height={24} fill="current" />}
      >
        아이콘 채움
      </Button>
      <Button
        variant="iconOnlyHeart"
        icon={<Icon name="wish" width={24} height={24} fill="current" />}
      />
    </div>
  );
};

export default TestButtonPage;
