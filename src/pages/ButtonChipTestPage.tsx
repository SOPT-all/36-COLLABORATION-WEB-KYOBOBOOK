// 버튼, 칩 테스트
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Button } from '@/components/Button/Button';
import { Chip } from '@/components/Chip/Chip';
import { iconMap } from '@/assets/icons';
import { theme } from '@/styles/theme';

const containerStyle = css`
  padding: 2rem;
`;

const sectionTitleStyle = css`
  ${theme.fonts.subtitle4};
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const buttonGroupStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  row-gap: 1rem;
  margin: 1rem 0;
`;

const chipGroupStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const ButtonChipTestPage = () => {
  return (
    <div css={containerStyle}>
      <h2 css={sectionTitleStyle}>공통 버튼 테스트</h2>
      <div css={buttonGroupStyle}>
        {/* 1. 기본 버튼 2종 */}
        <Button variant="mainFilled">button</Button>
        <Button variant="mainOutlined">button</Button>

        {/* 2. 아이콘 + 텍스트 버튼 4종 */}
        <Button variant="iconOutlinedPurple" icon={<iconMap.write fill="currentColor" />}>button</Button>
        <Button variant="iconFilledPurple" icon={<iconMap.write fill="currentColor" />}>button</Button>
        <Button variant="iconFilledLightPurple" icon={<iconMap.write />}>button</Button>
        <Button variant="iconOutlinedGray" icon={<iconMap.write />}>button</Button>

        {/* 3. 찜 버튼 */}
        <Button variant="iconOnlyHeart" icon={<iconMap.wish width="2.4rem" height="2.4rem" />} />

        {/* 4. 다운로드 버튼 */}
        <Button variant="iconOnlyExcel" icon={<iconMap.download width="1.6rem" height="1.6rem"  />} />
      </div>

      <h2 css={sectionTitleStyle}>공통 칩 테스트</h2>
      <div css={chipGroupStyle}>
        {/* 1. 테두리 칩 */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <Chip variant="outlinedPurple">chip</Chip>
          <Chip variant="outlinedGray">chip</Chip>
        </div>

        {/* 2. 라운드 칩 */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <Chip variant="filledRoundPurple">chip</Chip>
        </div>

        {/* 3. 숫자 카운트 칩 */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <Chip variant="filledGreenText">chip</Chip>
          <Chip variant="filledGreenCount">1</Chip>
          <Chip variant="filledGrayCount">1</Chip>
        </div>
      </div>
    </div>
  );
};

export default ButtonChipTestPage;
