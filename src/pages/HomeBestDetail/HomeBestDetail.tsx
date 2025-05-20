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
      <BookSummary />
      <TabMenu type="default" id="tab-menu" />
      <BookDescription />
      <AuthorInfo />
      <BookReview />
    </>
  );
};

export default HomeBestDetail;
