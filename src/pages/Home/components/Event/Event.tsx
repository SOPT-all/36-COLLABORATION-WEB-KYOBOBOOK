import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import * as S from './Event.style';

import HorizontalScrollList from '@/components/HorizontalScroll/HorizontalScroll';
import eventImg1 from '@/assets/img/_img_event1.png';
import eventImg2 from '@/assets/img/_img_event2.png';

const TABS = ['교보문고', 'ebook', '핫트랙스'];

const Event = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('교보문고');

  return (
    <section css={S.wrapper}>
      <div css={S.titleRow}>
        <span css={S.titleText}>이벤트의 정성이 달라요</span>
        <button css={S.moreButton} onClick={() => navigate('/event')}>
          더보기 +
        </button>
      </div>

      <div css={S.tabRow}>
        {TABS.map((label, idx) => (
          <div key={label} css={S.tabBlock}>
            <button
              css={S.tabButton(selectedTab === label, idx === 0)}
              onClick={() => setSelectedTab(label)}
            >
              {label}
            </button>
            {idx < TABS.length - 1 && <div css={S.tabDivider} />}
          </div>
        ))}
      </div>

      <HorizontalScrollList gap="1rem" sidePadding="2.4rem" effect={false}>
        <img src={eventImg1} alt="이벤트1" css={S.bannerImage} />
        <img src={eventImg2} alt="이벤트2" css={S.bannerImage} />
      </HorizontalScrollList>
    </section>
  );
};

export default Event;
