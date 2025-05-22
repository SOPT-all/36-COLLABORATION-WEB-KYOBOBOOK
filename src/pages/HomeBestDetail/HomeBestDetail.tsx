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
import { SECTION_IDS } from '@/utils/constants/scrollTargetIds';
import Floater from '@/components/Floater/Floater';
import { useBookId } from '@/utils/useBookId';
import { useGetRatings, useGetReviews } from '@/apis/homeBestDetail/queries';
import useScrollState from '@/hooks/useScrollState';
import BookDetail from '@/pages/HomeBestDetail/components/sections/BookSummary/BookDetail';
import Divider from '@/components/Divider/Divider';
import ProductDetail from '@/pages/HomeBestDetail/components/sections/BookSummary/ProductDetail';

const HomeBestDetail = () => {
  const bookId = useBookId();

  const { data: ratingData } = useGetRatings(bookId);
  const { data: reviewData } = useGetReviews(bookId);

  const scrollState = useScrollState();

  return (
    <>
      {scrollState !== 3 && <DetailHeader scrollState={scrollState} />}
      <main css={mainStyle}>
        <section>
          <BookDetail />
          <Divider />
          <ProductDetail />
          <Divider />
        </section>
        <TabMenu type="default" id="tab-menu" reviewCounts={reviewData?.reviewCounts} />
        <section>
          <BookDescription id={SECTION_IDS.PRODUCT} />
          <AuthorInfo />
        </section>
        <section>
          <BookReview id={SECTION_IDS.REVIEW} ratingData={ratingData} reviewData={reviewData} />
        </section>
        <section>
          <KeywordSection />
        </section>
        <section>
          <EventSection id={SECTION_IDS.EVENT} />
        </section>
        <section>
          <NoticeSection id={SECTION_IDS.NOTICE} />
        </section>
        <section>
          <Footer hideSns />
        </section>
      </main>
      <Floater />
      <DetailBottomNav />
    </>
  );
};

export default HomeBestDetail;
