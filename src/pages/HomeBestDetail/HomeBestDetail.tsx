import { useEffect, useState } from 'react';

import DetailHeader from '@/components/DetailHeader/DetailHeader';
import TabMenu from '@/pages/HomeBestDetail/components/elements/TabMenu/TabMenu';
import AuthorInfo from '@/pages/HomeBestDetail/components/sections/AuthorInfo/AuthorInfo';
import BookDescription from '@/pages/HomeBestDetail/components/sections/BookDescription/BookDescription';
import BookReview from '@/pages/HomeBestDetail/components/sections/BookReview/BookReview';
import BookSummary from '@/pages/HomeBestDetail/components/sections/BookSummary/BookSummary';

const HomeBestDetail = () => {
  const [scrollState, setScrollState] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 500) {
        setScrollState(1);
      } else if (window.scrollY >= 500) {
        setScrollState(2);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <DetailHeader scrollState={scrollState} />
      <BookSummary />
      <TabMenu type="default" />
      <BookDescription />
      <AuthorInfo />
      <BookReview />
    </>
  );
};

export default HomeBestDetail;
