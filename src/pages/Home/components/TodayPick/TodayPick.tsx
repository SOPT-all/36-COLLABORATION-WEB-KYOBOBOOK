/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as s from './TodayPick.style';

import HorizontalScrollList from '@/components/HorizontalScroll/HorizontalScroll';
import img1 from '@/assets/img/img_todaybook1.png';
import img2 from '@/assets/img/img_todaybook2.png';
import img3 from '@/assets/img/img_todaybook3.png';
import CaptionIcon from '@/assets/icons/svg/ic_caption.svg?react';

const TABS = ['국내도서', '외국도서', 'ebook', 'sam', '핫트랙스', '교보only'];

const BOOKS = [
  {
    id: 1,
    imgUrl: img1,
    title: '사연 없는 단어는 없다',
    subtitle: '우리 삶에 교양을 더해 줄 지식 사전',
    caption:
      '유래를 알면 더 재밌는 세상의 말들! 단어의 숨은 사연에서 발견한 상상의 힘',
  },
  {
    id: 2,
    imgUrl: img2,
    title: '기울어진 평등',
    subtitle: '마이클 샌델과 토마 피케티의 위대한 만남!',
    caption:
      '불평등이 심화된 현대 사회를 경제적, 정치적, 사회적 차원에서 날카롭게 분석하는 이 책은 능력주의의 모순을 지적하며 평등을 위한 대담한 해법을 제시한다.',
  },
  {
    id: 3,
    imgUrl: img3,
    title: '심장보다 단단한 토마토 한 알',
    subtitle: '텍스트힙의 선두주자, 고선경',
    caption:
      "‘끝낼 인생'을 ‘끝내주는 인생'으로 바꾸는 힘, 우리가 함께 보낸 시간 속에서 붉게 빛나고 있는 토마토 한 알",
  },
];

const TodayPick = () => {
  const [selectedTab, setSelectedTab] = useState('국내도서');
  const navigate = useNavigate();

  return (
    <div>
      {/* Title 영역만 section에 감싸기 */}
      <section css={s.wrapper}>
        <div css={s.titleRow}>
          <span css={s.best}>오늘의 선택</span>
          <button css={s.moreButton} onClick={() => navigate('/today')}>
            <span css={s.moreText}>더보기 +</span>
          </button>
        </div>
      </section>

      {/* 탭 영역 */}
      <div css={s.tabItem}>
        <HorizontalScrollList gap="0" sidePadding="2.4rem" effect={false}>
          {TABS.map((tab, idx) => (
            <div key={tab} css={s.tabBlock}>
              <button
                css={s.tabButton(selectedTab === tab)}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </button>
              {idx < TABS.length - 1 && <div css={s.tabDivider} />}
            </div>
          ))}
        </HorizontalScrollList>
      </div>

      {/* 책 카드 리스트 */}
      <HorizontalScrollList gap="1.6rem" sidePadding="2.4rem">
        {BOOKS.map((book) => (
          <div key={book.id} css={s.cardWrapper}>
            <div style={{ position: 'relative', width: '100%', height: '27.6rem' }}>
              <div css={s.backgroundBlurBox} />
              <img src={book.imgUrl} alt={book.title} css={s.imageWrapper} />
            </div>
            <div css={s.textContainer}>
              <p css={s.cardTitle}>{book.title}</p>
              <div css={s.cardCaption}>
                <span css={s.captionInner}>
                  <CaptionIcon css={s.captionIcon} />
                  <span css={s.cardSubtitle}>{book.subtitle}</span>
                </span>
              </div>
              <p css={s.cardDescription}>{book.caption}</p>
            </div>
          </div>
        ))}
      </HorizontalScrollList>
    </div>
  );
};

export default TodayPick;
