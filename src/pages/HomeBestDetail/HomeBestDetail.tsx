import AuthorInfo from '@/pages/HomeBestDetail/components/sections/AuthorInfo/AuthorInfo';
import BookReview from '@/pages/HomeBestDetail/components/sections/BookReview/BookReview';
import BookSummary from '@/pages/HomeBestDetail/components/sections/BookSummary/BookSummary';

const HomeBestDetail = () => {
  return (
    <>
      <BookSummary />
      <AuthorInfo />
      <BookReview />
    </>
  );
};

export default HomeBestDetail;
