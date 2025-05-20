import { useTheme } from '@emotion/react';

import BookImage from '@/assets/img/im_book_main.png';
import {
  imageBackground,
  bookContainer,
  previewContainer,
  previewText,
  currentPage,
  imageStyle,
} from '@/pages/HomeBestDetail/components/sections/BookSummary/BookSummary.style';

const BookSummary = () => {
  const theme = useTheme();

  return (
    <div>
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
    </div>
  );
};

export default BookSummary;
