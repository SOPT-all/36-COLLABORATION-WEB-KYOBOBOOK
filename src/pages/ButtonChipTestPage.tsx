// 버튼, 칩 테스트
import  { Button }  from '@/components/Button/Button';
import  Chip  from '@/components/Chip/Chip';
import Icon from '@/components/Icon';

const ButtonChipTestPage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>공통 버튼 테스트</h2>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', rowGap: '1rem', margin: '1rem 0' }}>
        {/* 1. 기본 버튼 2종 */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
          <Button variant="mainFilled">button</Button>
          <Button variant="mainOutlined">button</Button>
        </div>

        {/* 2. 아이콘 + 텍스트 버튼 4종 */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Button variant="iconOutlinedPurple" icon={<Icon name="write" width="0.875rem" height="0.875rem" fill="current" />}>button</Button>
          <Button variant="iconFilledPurple" icon={<Icon name="write" width="0.875rem" height="0.875rem" fill="current"/>}>button</Button>
          <Button variant="iconFilledLightPurple" icon={<Icon name="write" width="0.875rem" height="0.875rem" fill="current" />}>button</Button>
          <Button variant="iconOutlinedGray" icon={<Icon name="write" width="0.875rem" height="0.875rem" fill="current"/>}>button</Button>
        </div>
        
        {/* 3. 찜 버튼 */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
          <Button variant="iconOnlyHeart" icon={<Icon name="wish" width="1.5rem" height="1.5rem" fill="current"/>} />
        </div>

        {/* 4. 다운로드 버튼 */}
        <Button variant="iconOnlyExcel" 
        icon={<Icon name="download" width="1rem" height="1rem" fill="current" />} />
      </div>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem'  }}>공통 칩 테스트</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1rem' }}>

        {/* 1. 테두리 칩 */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <Chip variant="outlinedPurple">chip</Chip>
          <Chip variant="outlinedGray">chip</Chip>
        </div>

        {/* 2. 라운드 칩 */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
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