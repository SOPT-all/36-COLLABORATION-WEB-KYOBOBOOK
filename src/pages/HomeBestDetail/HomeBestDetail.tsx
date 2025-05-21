import { useEffect, useState } from 'react';

import DetailHeader from '@/components/DetailHeader/DetailHeader';
import TabMenu from '@/pages/HomeBestDetail/components/elements/TabMenu/TabMenu';
import AuthorInfo from '@/pages/HomeBestDetail/components/sections/AuthorInfo/AuthorInfo';
import BookReview from '@/pages/HomeBestDetail/components/sections/BookReview/BookReview';
import BookSummary from '@/pages/HomeBestDetail/components/sections/BookSummary/BookSummary';
import DetailBottomNav from '@/components/BottomNav/DetailBottomNav';
import EventSection from '@/pages/HomeBestDetail/components/sections/EventSection/EventSection';
import KeywordSection from '@/pages/HomeBestDetail/components/sections/KeywordSection/KeywordSection';
import NoticeSection from '@/pages/HomeBestDetail/components/sections/NoticeSection/NoticeSection';
import BookDescription from '@/pages/HomeBestDetail/components/sections/BookDescription/BookDescription';
import { mainStyle } from '@/pages/HomeBestDetail/HomeBestDetail.Style';
import Footer from '@/components/Footer/Footer';

const HomeBestDetail = () => {
  const [scrollState, setScrollState] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const tabMenuElement = document.getElementById('tab-menu');
      const tabTop = tabMenuElement?.offsetTop || 0;
      const y = window.scrollY;

      if (y >= tabTop) {
        setScrollState(3);
      } else if (y >= 500) {
        setScrollState(2);
      } else {
        setScrollState(1);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {scrollState !== 3 && <DetailHeader scrollState={scrollState} />}
      <main css={mainStyle}>
        <section>
          <BookSummary />
          <TabMenu type="default" id="tab-menu" />
        </section>
        <section>
          <BookDescription />
          <AuthorInfo />
        </section>
        <section>
          <BookReview id="review-section" />
        </section>
        <section>
          <KeywordSection />
        </section>
        <section>
          <EventSection />
        </section>
        <section>
          <NoticeSection />
        </section>
        <section>
          <Footer />
        </section>
      </main>
      <DetailBottomNav />
    </>
  );
};

export default HomeBestDetail;
