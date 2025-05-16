import AuthInfo from '@/pages/HomeBestDetail/components/sections/AuthorInfo';
import BookDescription from '@/pages/HomeBestDetail/components/sections/BookDescription';
import BookReview from '@/pages/HomeBestDetail/components/sections/BookReview';
import BookSummary from '@/pages/HomeBestDetail/components/sections/BookSummary';

const HomeBestDetail = () => {
  return (
    <>
      <p>홈 베스트 상세 페이지입니다</p>
      <BookSummary />
      <BookDescription />
      <AuthInfo />
      <BookReview />
    </>
  );
};

export default HomeBestDetail;
