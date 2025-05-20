import { useTheme } from '@emotion/react';

import BookImage from '@/assets/img/im_book_main.png';
import {
  imageBackground,
  bookContainer,
  previewContainer,
  previewText,
  currentPage,
  imageStyle,
  bookDetail,
  tagContainer,
  tag,
  titleText,
  publisherText,
  authorText,
  dateText,
  bestContainer,
  bestText,
  rankContainer,
  rankText,
} from '@/pages/HomeBestDetail/components/sections/BookSummary/BookSummary.style';
import Icon from '@/components/Icon';
import Divider from '@/components/Divider/Divider';

const BookSummary = () => {
  const theme = useTheme();

  return (
    <>
      <div css={imageBackground(theme)}>
        <div css={bookContainer}>
          <img css={imageStyle(theme)} src={BookImage} alt="책 대표 이미지" />
          <div css={previewContainer(theme)}>
            <span css={previewText(theme)}>미리보기</span>
            <span>
              <b css={currentPage(theme)}>01</b> - 02
            </span>
          </div>
        </div>
      </div>

      <div css={bookDetail(theme)}>
        <div css={tagContainer(theme)}>
          <span css={tag}>2025년 04월 04일 오늘의 선택</span>
          <span css={tag}>MD의 선택</span>
          <span css={tag}>무료배송</span>
          <span css={tag}>사은품</span>
          <span css={tag}>이벤트</span>
          <span css={tag}>소득공제</span>
        </div>

        <h3 css={titleText(theme)}>단 한번의 삶</h3>
        <p css={publisherText(theme)}>양장본 Hardcover</p>
        <p css={authorText(theme)}>김영하 저자(글)</p>
        <p css={dateText(theme)}>복복서가 · 2025년 04월 06일</p>

        <div css={bestContainer(theme)}>
          <Icon name="best" />
          <strong css={bestText(theme)}>주간베스트</strong>
          <div css={rankContainer(theme)}>
            <span>
              국내도서 <b css={rankText(theme)}>2</b>위
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

export default BookSummary;
