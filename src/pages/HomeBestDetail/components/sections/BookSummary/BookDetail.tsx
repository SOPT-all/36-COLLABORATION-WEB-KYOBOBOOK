import { useTheme } from '@emotion/react';

// import BookImage from '@/assets/img/im_book_main.png';
import * as s from '@/pages/HomeBestDetail/components/sections/BookSummary/BookDetail.style';
import Icon from '@/components/Icon';
import { Chip } from '@/components/Chip/Chip';
import { useBookId } from '@/utils/useBookId';
import { useGetBookDetail } from '@/apis/homeBestDetail/queries';
import type { BookDetailResponse } from '@/types/bookDetailTypes';

interface BookDetailProps {
  bookData?: BookDetailResponse;
}

const BookDetail = ({ bookData }: BookDetailProps) => {
  const theme = useTheme();
  const bookId = useBookId();
  const { data: bookDetailData } = useGetBookDetail(bookId);
  const formatDate = (dateStr?: string) => {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-');
    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <>
      <div css={s.imageBackground(theme)}>
        <div css={s.bookContainer}>
          <img
            css={s.imageStyle(theme)}
            src={bookDetailData?.imageUrl ?? ''}
            alt={`책 대표 이미지 - ${bookDetailData?.title}`}
          />
          <div css={s.previewContainer(theme)}>
            <span css={s.previewText(theme)}>미리보기</span>
            <span>
              <b css={s.currentPage(theme)}>01</b> - 02
            </span>
          </div>
        </div>
      </div>

      <div css={s.bookDetail}>
        <div css={s.tagContainer}>
          <Chip variant="outlinedPurple">2025년 05월 24일 오늘의 선택</Chip>
          <Chip variant="outlinedPurple">MD의 선택</Chip>
          <Chip variant="outlinedGray">무료배송</Chip>
          <Chip variant="outlinedGray">사은품</Chip>
          <Chip variant="outlinedGray">이벤트</Chip>
          <Chip variant="outlinedGray">소득공제</Chip>
        </div>

        <h3 css={s.titleText(theme)}>{bookDetailData?.title ?? ''}</h3>
        <p css={s.publisherText(theme)}>{bookDetailData?.publisher ?? ''}</p>
        <p css={s.authorText(theme)}>{bookDetailData?.author ?? ''} 저자 (글)</p>
        <p css={s.dateText(theme)}>{formatDate(bookDetailData?.date)}</p>
        <div css={s.bestContainer}>
          <Icon name="best" />
          <strong css={s.bestText(theme)}>주간베스트</strong>
          <div css={s.rankContainer(theme)}>
            <span>
              국내도서 <b css={s.rankText(theme)}>2</b>위
            </span>
            <span>·</span>
            <span>
              시/에세이 <b>1</b>위
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetail;
