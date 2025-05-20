import { useTheme } from '@emotion/react';

import BookImage from '@/assets/img/im_book_main.png';
import * as s from '@/pages/HomeBestDetail/components/sections/BookSummary/BookDetail.style';
import Icon from '@/components/Icon';
import Divider from '@/components/Divider/Divider';

const BookDetail = () => {
  const theme = useTheme();

  return (
    <>
      <div css={s.imageBackground(theme)}>
        <div css={s.bookContainer}>
          <img css={s.imageStyle(theme)} src={BookImage} alt="책 대표 이미지" />
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
          <span css={s.tag}>2025년 04월 04일 오늘의 선택</span>
          <span css={s.tag}>MD의 선택</span>
          <span css={s.tag}>무료배송</span>
          <span css={s.tag}>사은품</span>
          <span css={s.tag}>이벤트</span>
          <span css={s.tag}>소득공제</span>
        </div>

        <h3 css={s.titleText(theme)}>단 한번의 삶</h3>
        <p css={s.publisherText(theme)}>양장본 Hardcover</p>
        <p css={s.authorText(theme)}>김영하 저자(글)</p>
        <p css={s.dateText(theme)}>복복서가 · 2025년 04월 06일</p>

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

      <Divider />
    </>
  );
};

export default BookDetail;
