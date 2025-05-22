import { useTheme } from '@emotion/react';
import { useState } from 'react';

import { authorStyles as s } from '@/pages/HomeBestDetail/components/sections/AuthorInfo/AuthorInfo.style';
import Icon from '@/components/Icon';
import AuthorImage from '@/assets/img/im_author.svg';
import Card from '@/components/Card/Card';
import HorizontalScrollList from '@/components/HorizontalScroll/HorizontalScroll';
import useToggle from '@/hooks/useToggle';

const AuthorInfo = () => {
  const theme = useTheme();
  const { isLiked, handleLike } = useToggle();

  const books = [
    {
      src: '/src/assets/img/im_author_book1.png',
      title: '김영하의 세계문학 원정대 4: 빨간 머리 앤',
    },
    {
      src: '/src/assets/img/im_author_book2.png',
      title: '김영하의 세계문학 원정대 3: 지킬 박사와 하이드',
    },
    {
      src: '/src/assets/img/im_author_book3.png',
      title: '여행의 이유',
    },
    {
      src: '/src/assets/img/im_author_book4.png',
      title: '김영하의 세계문학 원정대 2: 로미오와 줄리엣, 오만과 편견를',
    },
  ];

  return (
    <>
      <div css={s.wrapper}>
        <h3 css={s.titleText(theme)}>작가 정보</h3>
        <div css={s.container(theme)}>
          <img src={AuthorImage} css={s.image} alt="작가 이미지" />
          <div>
            <div css={s.authorWrapper(theme)}>
              <span>저자(글)</span>
              <b css={s.authorName(theme)}>김영하</b>
              <button css={s.iconWrapper} onClick={handleLike}>
                <Icon
                  width={24}
                  name={isLiked ? 'wishFill' : 'wish'}
                  fill={isLiked ? undefined : theme.colors.gray4}
                />
              </button>
            </div>
            <div css={s.authorMeta(theme)}>
              <span>인물정보</span> <Icon name="right" width={16} height={16} />
            </div>
            <p css={s.authorType(theme)}>현대문학가{`>`}소설가</p>
            <p css={s.authInfo(theme)}>
              소설가. 장편소설로 『작별인사』 『살인자의 기억법』 『검은 꽃』 『나는 나를 파괴할
              권리가 있다』 『빛의 제국』 『아랑은 왜』 『너의 목소리가 들려』 『퀴즈쇼』,
              소설집으로 『오직 두 사람』 『오빠가 돌아왔다』 『엘리베이터에 낀 그 남자는 어떻게
              되었나』 『무슨 일이 일어났는지는 아무도』 『호출』이 있고, 산문 『단 한 번의 삶』
              『여행의 이유』 『오래 준비해온 대답』 『다다다』 등을 냈다. F. 스콧 피츠제럴드의
              『위대한 개츠비』를 번역하기도 했다. 서울에서 아내와 함께 살며 여행, 요리, 그림
              그리기와 정원 일을 좋아한다.
            </p>
            <div css={s.moreText(theme)}>
              <span>펼치기</span>
              <Icon name="circleDown" fill={theme.colors.gray1} width={20} height={20} />
            </div>
          </div>

          <HorizontalScrollList sidePadding="0">
            {books.map((book, idx) => {
              return <Card key={idx} imgUrl={book.src} title={book.title} />;
            })}
          </HorizontalScrollList>
        </div>
        <div css={s.publishWrapper}>
          <h3 css={s.titleText}>출판사 서평</h3>
          <p css={s.contentText(theme)}>
            나는 어떻게 내가 되었나 <br />
            “나에게는 이 삶을 잘 완성할 책임이 있다” <br />
            <br />
            그동안 김영하의 산문은 현재에 충실했다. 다녀온 모든 여행을 담은 『여행의 이유』,
            시칠리아에서의 인문학적 여정을 그린 『오래 준비해온 대답』, 틀을 깨는 사유와 심층을
            꿰뚫는 예리한 시선이 돋보이는 『다다다』까지. 김영하는 자신이 보고 겪고 느낀 것을
            기록하고 나누며 독자와 소통해왔다. 부지런히 쌓은 경험을 중심으로 사유를 펼쳐나갈 때
            살면서 겪은 에피소드가 종종 자연스레 드러나기는 했으나, 자신의 인생을 직접 꺼내어 내놓은
            적은 드물었다. 이번 산문에서는 ‘삶’이 전면에 등장한다.모두에게 한 번씩만 주어진 기회라고
            여긴다면 감히 이야기할 수 있는 삶은 각자의 것뿐이다.
          </p>
          <span css={s.addText(theme)}>더보기</span>
        </div>
      </div>
    </>
  );
};

export default AuthorInfo;
