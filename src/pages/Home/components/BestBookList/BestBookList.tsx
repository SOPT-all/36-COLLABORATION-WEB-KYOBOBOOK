import { useNavigate } from 'react-router-dom';

import * as S from './BestBookList.styles';

import { useGetTopBooks } from '@/apis/home/queries';
import { Chip } from '@/components/Chip/Chip';
import HorizontalScrollList from '@/components/HorizontalScroll/HorizontalScroll';
import Icon from '@/components/Icon';
import ROUTE_PATH from '@/routes/routePath';

const TABS = ['전체', '국내도서', '외국도서', 'ebook', 'sam', '핫트랙스', '교보only'];

const BestBookList = () => {
  const navigate = useNavigate();
  const { data: books = [], isLoading, isError, error } = useGetTopBooks();

  if (isLoading) {
    return (
      <section css={S.wrapper}>
        <div css={S.loadingContainer}>데이터를 불러오는 중입니다...</div>
      </section>
    );
  }

  if (isError) {
    return (
      <section css={S.wrapper}>
        <div css={S.errorContainer}>
          <p>데이터를 불러오는데 실패했습니다.</p>
          <p css={S.errorMessage}>
            {error instanceof Error ? error.message : '알 수 없는 에러가 발생했습니다.'}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section css={S.wrapper}>
      {/* 베스트/스테디/더보기+ */}
      <div css={S.titleRow}>
        <div css={S.titleTabs}>
          <span css={S.best}>베스트</span>
          <span css={S.steady}>스테디</span>
        </div>
        <button css={S.moreButton} onClick={() => navigate(ROUTE_PATH.HOME_BEST)}>
          <span css={S.moreText}>더보기</span>
          <Icon name="add" width={20} height={20} />
        </button>
      </div>

      {/* 카테고리 탭 */}
      <HorizontalScrollList gap="0">
        {TABS.map((tab, index) => (
          <div key={tab} css={S.tabItem}>
            <button css={S.tabButton(index === 0)}>{tab}</button>
            {index < TABS.length - 1 && <div css={S.tabDivider} />}
          </div>
        ))}
      </HorizontalScrollList>

      {/* 베스트 도서 리스트 */}
      <ul css={S.bookList}>
        {books.map(({ ranking, title, author, imageUrl }) => (
          <li key={ranking} css={S.bookItem}>
            <img src={imageUrl} alt={title} css={S.thumbnail} />
            <div css={S.textContainer}>
              <div css={S.chipWrapper}>
                <Chip variant={ranking <= 3 ? 'filledGreenText' : 'filledGrayCount'}>
                  {ranking === 1 ? `Best ${ranking}` : ranking}
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
