import * as S from './BestBookList.styles';

import { Chip } from '@/components/Chip/Chip';
import book1Img from '@/assets/img/home_best_1.jpg';
import book2Img from '@/assets/img/home_best_2.jpg';
import book3Img from '@/assets/img/home_best_3.jpg';
import book4Img from '@/assets/img/home_best_4.jpg';
import book5Img from '@/assets/img/home_best_5.jpg';
import addIcon from '@/assets/icons/svg/ic_add.svg';
import HorizontalScrollList from '@/components/HorizontalScroll/HorizontalScroll';

const BOOKS = [
  {
    rank: 1,
    title: '단 한 번의 삶',
    author: '김영하 · 복복서가',
    image: book1Img,
  },
  {
    rank: 2,
    title: '2025 시대에듀 All-New KB 국민은행 필기전형 봉투모의고사 9회분+무료NCS강의',
    author: 'SDC · 시대고시기획',
    image: book2Img,
  },
  {
    rank: 3,
    title: '모순',
    author: '양귀자 · 쓰다',
    image: book3Img,
  },
  {
    rank: 4,
    title: '결국 국민이 합니다',
    author: '이재명 · 오마이북',
    image: book4Img,
  },
  {
    rank: 5,
    title: '듀얼 브레인',
    author: '이선 몰릭 · 상상스퀘어',
    image: book5Img,
  },
];

const TABS = ['전체', '국내도서', '외국도서', 'ebook', 'sam', '핫트랙스', '교보only'];

const BestBookList = () => {
  return (
    <section css={S.wrapper}>
      {/* 1. 베스트 / 스테디 / 더보기+ */}
      <div css={S.titleRow}>
        <div css={S.titleTabs}>
          <span css={S.best}>베스트</span>
          <span css={S.steady}>스테디</span>
        </div>
        <button css={S.moreButton}>
          <span css={S.moreText}>더보기</span>
          <img src={addIcon} alt="더보기 아이콘" width={20} height={20} />
        </button>
      </div>

      {/* 2. 카테고리 탭 */}
      <HorizontalScrollList gap="0">
        {TABS.map((tab, index) => (
          <div key={tab} css={S.tabItem}>
            <button css={S.tabButton(index === 0)}>{tab}</button>
            {index < TABS.length - 1 && <div css={S.tabDivider} />}
          </div>
        ))}
      </HorizontalScrollList>

      {/* 3. 리스트 */}
      <ul css={S.bookList}>
        {BOOKS.map(({ rank, title, author, image }) => (
          <li key={rank} css={S.bookItem}>
            <img src={image} alt={title} css={S.thumbnail} />
            <div css={S.textContainer}>
              <div css={S.chipWrapper}>
                <Chip variant={rank <= 3 ? 'filledGreenText' : 'filledGrayCount'}>
                  {rank === 1 ? `Best ${rank}` : rank}
                </Chip>
              </div>
              <div css={S.title}>{title}</div>
              <div css={S.author}>{author}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BestBookList;
