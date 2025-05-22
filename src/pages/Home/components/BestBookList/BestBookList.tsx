import * as S from './BestBookList.styles';

import { Chip } from '@/components/Chip/Chip';
import book1Img from '@/assets/img/home_best_1.jpg';
import book2Img from '@/assets/img/home_best_2.jpg';
import book3Img from '@/assets/img/home_best_3.jpg';
import book4Img from '@/assets/img/home_best_4.jpg';
import book5Img from '@/assets/img/home_best_5.jpg';
import addIcon from '@/assets/icons/svg/ic_add.svg';

const BestBookList = () => {
  return (
    <section>
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
      <div css={S.tabWrapper}>
        {['전체', '국내도서', '외국도서', 'ebook', 'sam', '핫트랙스', '교보only'].map(
          (tab, index) => (
            <button key={tab} css={S.tabButton(index === 0)}>
              {tab}
            </button>
          ),
        )}
      </div>

      {/* 3. 리스트 */}
      <ul css={S.bookList}>
        {/* 1위 */}
        <li css={S.bookItem}>
          <img src={book1Img} alt="단 한 번의 삶" css={S.thumbnail} />
          <div css={S.textContainer}>
            <div css={S.chipWrapper}>
              <Chip variant="filledGreenText">Best 1</Chip>
            </div>
            <div css={S.title}>단 한 번의 삶</div>
            <div css={S.author}>김영하 · 복복서가</div>
          </div>
        </li>

        {/* 2위 */}
        <li css={S.bookItem}>
          <img
            src={book2Img}
            alt="2025 시대에듀 All-New KB 국민은행 필기전형 봉투모의고사 9회분+무료NCS강의"
            css={S.thumbnail}
          />
          <div css={S.textContainer}>
            <div css={S.chipWrapper}>
              <Chip variant="filledGreenText">2</Chip>
            </div>
            <div css={S.title}>
              2025 시대에듀 All-New KB 국민은행 필기전형 봉투모의고사 9회분+무료NCS강의
            </div>
            <div css={S.author}>SDC · 시대고시기획</div>
          </div>
        </li>

        {/* 3위 */}
        <li css={S.bookItem}>
          <img src={book3Img} alt="모순" css={S.thumbnail} />
          <div css={S.textContainer}>
            <div css={S.chipWrapper}>
              <Chip variant="filledGreenText">3</Chip>
            </div>
            <div css={S.title}>모순</div>
            <div css={S.author}>양귀자 · 쓰다</div>
          </div>
        </li>

        {/* 4위 */}
        <li css={S.bookItem}>
          <img src={book4Img} alt="결국 국민이 합니다" css={S.thumbnail} />
          <div css={S.textContainer}>
            <div css={S.chipWrapper}>
              <Chip variant="filledGrayCount">4</Chip>
            </div>
            <div css={S.title}>결국 국민이 합니다</div>
            <div css={S.author}>이재명 · 오마이북</div>
          </div>
        </li>

        {/* 5위 */}
        <li css={S.bookItem}>
          <img src={book5Img} alt="듀얼 브레인" css={S.thumbnail} />
          <div css={S.textContainer}>
            <div css={S.chipWrapper}>
              <Chip variant="filledGrayCount">5</Chip>
            </div>
            <div css={S.title}>듀얼 브레인</div>
            <div css={S.author}>이선 몰릭 · 상상스퀘어</div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default BestBookList;
