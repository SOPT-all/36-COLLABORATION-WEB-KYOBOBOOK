import { useTheme } from '@emotion/react';

import HorizontalScrollList from '@/components/HorizontalScroll/HorizontalScroll';
import * as s from '@/pages/HomeBestDetail/components/sections/BookDescription/BookDescription.style';
import BookMeta from '@/pages/HomeBestDetail/components/elements/BookMeta/BookMeta';

const BookDescription = () => {
  const theme = useTheme();

  const bookMeta = {
    카테고리: '한국에세이',
    출간일: '2025.04.06',
    쪽수: '200P',
    크기: '9791191114768',
    ISBN: '137 * 196 * 22mm / 397 g',
  };

  return (
    <div css={s.descriptionWrapper}>
      <div css={s.bookInfoWrapper}>
        <div>
          <h3 css={s.titleText(theme)}>책 소개</h3>
          <div css={s.contentText(theme)}>
            내 의지와 무관하게 시작된 삶이라는 사건 <br />
            예측 불가하고 불공평하고 질서 없는 진짜 인생을 사유하다 <br /> <br />
            “때로 어떤 예감을 받을 때가 있다.
            <br />
            아, 이건 이 작가가 평생 단 한 번만 쓸 수 있는 글이로구나. <br />
            내겐 이 책이 그런 것 같다.” (김영하)
            <br />
            『여행의 이유』 이후 6년 만의 신작 산문-오직 한 번만 쓸 수 있는, 나의 삶에
            대하여김영하가 신작 산문 『단 한 번의 삶』을 출간했다. 60만 명이 넘는 독자의 사랑을 받은
            『여행의 이유』 이후 6년 만에 선보이는 산문집으로, 유료 이메일 구독 서비스 ‘영하의
            날씨’에 2024년 연재되었던 글을 대폭 수정하고 다듬어 묶었다. ‘영하의 날씨’는 초기
            구독자의 초대로만 가입이 가능한 서비스로 화제를 모으며 연재 당시 뜨거운 호응을
            얻었다.『단 한 번의 삶』은 작가의 지난 산문들보다 더 사적이고 한층 내밀하다
            <div css={s.gradationBar} />
          </div>
          <span css={s.addText(theme)}>더보기</span>
        </div>
      </div>

      <HorizontalScrollList gap="0" sidePadding="0">
        {Object.entries(bookMeta).map(([title, content], index) => {
          return <BookMeta key={title} title={title} content={content} index={index} />;
        })}
      </HorizontalScrollList>
    </div>
  );
};

export default BookDescription;
