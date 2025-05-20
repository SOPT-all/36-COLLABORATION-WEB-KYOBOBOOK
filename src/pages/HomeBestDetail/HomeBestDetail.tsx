import AuthorInfo from '@/pages/HomeBestDetail/components/sections/AuthorInfo/AuthorInfo';
import BookReview from '@/pages/HomeBestDetail/components/sections/BookReview/BookReview';
import EventSection from '@/pages/HomeBestDetail/components/sections/EventSection/EventSection';
import KeywordSection from '@/pages/HomeBestDetail/components/sections/KeywordSection/KeywordSection';
import NoticeSection from '@/pages/HomeBestDetail/components/sections/NoticeSection/NoticeSection';

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
