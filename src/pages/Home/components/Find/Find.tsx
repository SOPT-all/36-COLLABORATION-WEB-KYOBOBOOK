import * as S from './Find.style';

import HorizontalScrollList from '@/components/HorizontalScroll/HorizontalScroll';
import Card from '@/components/Card/Card';
import imgFind1 from '@/assets/img/home_find1.jpg';
import imgFind2 from '@/assets/img/home_find2.jpg';
import imgFind3 from '@/assets/img/home_find3.jpg';

const Find = () => {

  return (
    <section css={S.wrapper}>
      <div css={S.titleRow}>
        <span css={S.titleText}>사람들이 많이 찾고 있어요</span>
      </div>

      <HorizontalScrollList gap="1.6rem" sidePadding="2.4rem" effect={false}>
        <Card imgUrl={imgFind1} title="희망" />
        <Card imgUrl={imgFind2} title="경제신문이 말하지 않는 경제 이야기" />
        <Card imgUrl={imgFind3} title="첫 여름, 완주" />
      </HorizontalScrollList>
    </section>
  );
};

export default Find;
