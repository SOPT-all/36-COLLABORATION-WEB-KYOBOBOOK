import { useTheme } from '@emotion/react';

import * as s from '@/pages/HomeBestDetail/NoticeSection/NoticeSection.style';

const NoticeSection = () => {
  const theme = useTheme();
  return (
    <div css={s.noticeSection}>
      <h2 css={s.titleSection(theme)}>교환/반품/품절 안내</h2>
      <section css={s.buttonStyle}>
        <button css={s.leftButtonStyle(theme)}>반품/교환 신청</button>
        <button css={s.rightButtonStyle(theme)}>1:1 문의</button>
      </section>
      <div css={s.divider(theme)} />
      <section css={s.textSection}>
        <h3 css={s.subTitleSection(theme)}>반품/교환방법</h3>
        <p css={s.textStyle(theme)}>
          마이룸 &gt; 주문관리 &gt; 주문/배송내역 &gt; 주문조회 &gt; 반품/교환 신청, [1:1 상담 &gt;
          반품/교환/환불] 또는 고객센터 <span css={s.numbebrStyle}>(1544-1900)</span>
          <br />* 오픈마켓, 해외배송 주문, 기프트 주문시 [1:1 상담 &gt; 반품/교환/환불] 또는
          고객센터 <span>(1544-1900)</span>
        </p>
      </section>
    </div>
  );
};

export default NoticeSection;
