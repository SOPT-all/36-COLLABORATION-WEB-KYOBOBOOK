import AuthorInfo from '@/pages/HomeBestDetail/components/sections/AuthorInfo/AuthorInfo';
import BookReview from '@/pages/HomeBestDetail/components/sections/BookReview/BookReview';
import EventSection from '@/pages/HomeBestDetail/EventSection/EventSection';
import KeywordSection from '@/pages/HomeBestDetail/KeywordSection/KeywordSection';
import NoticeSection from '@/pages/HomeBestDetail//NoticeSection/NoticeSection';

const HomeBestDetail = () => {
  return (
    <>
      <AuthorInfo />
      <BookReview />

      <KeywordSection />
      <EventSection />
      <NoticeSection />
    </>
  );
};

export default HomeBestDetail;
