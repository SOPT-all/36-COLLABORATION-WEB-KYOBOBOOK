import { useNavigate } from 'react-router-dom';

import * as S from './Only.style';

import HorizontalScrollList from '@/components/HorizontalScroll/HorizontalScroll';
import Card from '@/components/Card/Card';
import imgMeet1 from '@/assets/img/img_meet1.png';
import imgMeet2 from '@/assets/img/img_meet2.png';
import imgMeet3 from '@/assets/img/img_meet3.png';

const Only = () => {
  const navigate = useNavigate();

  return (
    <section css={S.wrapper}>
      <div css={S.titleRow}>
        <span css={S.titleText}>교보문고에서만 만날 수 있어요</span>
        <button css={S.moreButton} onClick={() => navigate('/only')}>
          더보기 +
        </button>
      </div>

      <HorizontalScrollList gap="0.8rem" sidePadding="2.4rem" effect={false}>
        <div css={S.overrideImageSize}>
            <Card imgUrl={imgMeet1} title="[단품] 명화, 시대를 담다 - 예술로 만나는 역..." />
        </div>

        <div css={S.overrideImageSize}>
          <Card imgUrl={imgMeet2} title="[단품] 친절한 도슨트 - 키워드로 보는 미술..." />
        </div>

        <div css={S.overrideImageSize}>
          <Card imgUrl={imgMeet3} title="[단품] 친절한 인문학 - 문학이 명화를 만났을..." />
        </div>
      </HorizontalScrollList>
    </section>
  );
};

export default Only;
