import { useNavigate } from 'react-router-dom';

import * as S from './Casting.style';

import HorizontalScrollList from '@/components/HorizontalScroll/HorizontalScroll';
import Card from '@/components/Card/Card';
import imgCasting1 from '@/assets/img/img_casting1.png';
import imgCasting2 from '@/assets/img/img_casting2.png';
import imgCasting3 from '@/assets/img/img_casting3.png';

const Casting = () => {
  const navigate = useNavigate();

  return (
    <section css={S.wrapper}>
      <div css={S.titleRow}>
        <span css={S.titleText}>CASTing</span>
        <button css={S.moreButton} onClick={() => navigate('/casting')}>
          더보기 +
        </button>
      </div>

      <div css={S.contentWrapper}>
        <HorizontalScrollList gap="0.8rem" sidePadding="0" effect={false}>
          <div css={S.overrideImageSize}>
            <Card imgUrl={imgCasting1} title="김영하 작가가 소설을 첨삭해 준다면?" />
          </div>
          <div css={S.overrideImageSize}>
            <Card imgUrl={imgCasting2} title="2025 5월 징검다리 연휴 추천 도서" />
          </div>
          <div css={S.overrideImageSize}>
            <Card imgUrl={imgCasting3} title="감각을 깨우는 예술과 럭셔리의 만남" />
          </div>
        </HorizontalScrollList>
      </div>
    </section>
  );
};

export default Casting;
