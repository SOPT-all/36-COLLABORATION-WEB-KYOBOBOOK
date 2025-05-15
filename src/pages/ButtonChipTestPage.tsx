// 버튼, 칩 테스트
import { Button } from '@/components/buttons/Button';
import { Chip } from '@/components/chips/Chip';
import Icon from '@/components/Icon';

const ButtonChipTestPage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>공통 버튼 테스트</h2>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '1rem 0' }}>
        {/* 1. 기본 버튼 2종 */}
        <Button variant="mainFilled">등록</Button>
        <Button variant="mainOutlined">등록</Button>

        {/* 2. 아이콘 + 텍스트 버튼 4종 */}
        <Button variant="iconOutlinedPurple" icon={<Icon name="write" />}>작성</Button>
        <Button variant="iconFilledPurple" icon={<Icon name="write" />}>작성</Button>
        <Button variant="iconFilledLightPurple" icon={<Icon name="write" />}>작성</Button>
        <Button variant="iconOutlinedGray" icon={<Icon name="write" />}>작성</Button>

        {/* 3. 찜 버튼 */}
        <Button variant="iconOnlyHeart" icon={<Icon name="wish" />} />

        {/* 4. 엑셀 다운로드 버튼 */}
        <Button variant="iconOnlyExcel" icon={<Icon name="download" width={16} height={16} />} />
      </div>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem' }}>공통 칩 테스트</h2>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        {/* 1. 테두리 칩 */}
        <Chip variant="outlinedPurple">이벤트</Chip>
        <Chip variant="outlinedGray">뉴스</Chip>

        {/* 2. 라운드 칩 */}
        <Chip variant="filledRoundPurple">#키워드</Chip>

        {/* 3. 숫자 카운트 칩 */}
        <Chip variant="filledGreenText">참여중</Chip>
        <Chip variant="filledGreenCount">1</Chip>
        <Chip variant="filledGrayCount">9</Chip>
      </div>
    </div>
  );
};

export default ButtonChipTestPage;
