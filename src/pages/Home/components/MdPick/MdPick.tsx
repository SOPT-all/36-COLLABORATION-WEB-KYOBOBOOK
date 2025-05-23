import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as s from './MdPick.style';

import HorizontalScrollList from '@/components/HorizontalScroll/HorizontalScroll';
import Card from '@/components/Card/Card';
import img1 from '@/assets/img/img_md1.png';    
import img2 from '@/assets/img/img_md2.png';
import img3 from '@/assets/img/img_md3.png';

const TABS = ['국내도서', '외국도서', 'ebook', 'sam', '핫트랙스', '교보only'];

const BOOKS = [
  { id: 1, imgUrl: img1, title: '법의 체면' },
  { id: 2, imgUrl: img2, title: '그해 여름 문어 모자를 다시 쓰다' },
  { id: 3, imgUrl: img3, title: '영어 유치원이 고민된다면' },
];

const MdPick = () => {
  const [selectedTab, setSelectedTab] = useState('국내도서');
  const navigate = useNavigate();

  return (
    <>
      {/* 제목 */}
      <section css={s.wrapper}>
        <div css={s.titleRow}>
          <span css={s.best}>MD들이 신중하게 골랐어요</span>
          <button css={s.moreButton} onClick={() => navigate('/md')}>
            <span css={s.moreText}>더보기 + </span>
          </button>
        </div>
      </section>

      {/* 탭 */}
      <section css={s.tabWrapper}>
        <HorizontalScrollList gap="1rem" sidePadding="0" effect={false}>
            {TABS.map((tab, idx) => (
                <div key={tab} css={s.tabBlock}>
                    <button css={s.tabButton(selectedTab === tab)} onClick={() => setSelectedTab(tab)}>
                        {tab}
                    </button>
                    {idx < TABS.length - 1 && <div css={s.tabDivider} />}
                </div>
            ))}
        </HorizontalScrollList>
       </section>

      {/* 카드 리스트 */}
      <section css={s.cardWrapper}>
        <HorizontalScrollList gap="1.6rem" sidePadding="2.4rem">
          {BOOKS.map((book) => (
            <Card key={book.id} imgUrl={book.imgUrl} title={book.title} />
          ))}
        </HorizontalScrollList>
      </section>
    </>
  );
};

export default MdPick;
