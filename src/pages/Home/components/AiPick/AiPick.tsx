import { useNavigate } from 'react-router-dom';

import * as S from './AiPick.style';

import { Button } from '@/components/Button/Button';
import Card from '@/components/Card/Card';
import { theme } from '@/styles/theme';
import img1 from '@/assets/img/img_ai1.png';
import img2 from '@/assets/img/img_ai2.png';
import img3 from '@/assets/img/img_ai3.png';
import img4 from '@/assets/img/img_ai4.png';

const AiPick = () => {
  const navigate = useNavigate();

  return (
    <section css={S.wrapper}>
      <div css={S.titleRow}>
        <div css={S.titleTextBox}>
          <span css={S.titleText}>AI 추천</span>
          <span css={S.badge}>
            P<i style={{ color: theme.colors.green1, fontStyle: 'normal' }}>i</i>cks
          </span>
        </div>
        <button css={S.moreButton} onClick={() => navigate('/md')}>
          <span css={S.moreText}>더보기 +</span>
        </button>
      </div>

      <p css={S.description}>
        발견의 기쁨을 선물합니다.
        <br />
        취향을 분석해 꼭 맞는 책을 추천해 드릴게요!
      </p>

      <div css={S.cardGrid}>
        <Card imgUrl={img1} title="소년이 온다" />
        <Card imgUrl={img2} title="경제신문이 말하지 않는 경제 이야기" />
        <Card imgUrl={img3} title="행동하지 않으면 인생은 바뀌지 않는다" />
        <Card imgUrl={img4} title="스토너" />
      </div>

      <Button variant="mainOutlined">로그인하고 더 많은 추천 받기</Button>
    </section>
  );
};

export default AiPick;
