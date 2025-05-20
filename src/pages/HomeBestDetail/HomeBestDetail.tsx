import TabMenu from '@/pages/HomeBestDetail/components/elements/TabMenu/TabMenu';
import AuthorInfo from '@/pages/HomeBestDetail/components/sections/AuthorInfo/AuthorInfo';
import BookDescription from '@/pages/HomeBestDetail/components/sections/BookDescription/BookDescription';
import BookReview from '@/pages/HomeBestDetail/components/sections/BookReview/BookReview';

const HomeBestDetail = () => {
  return (
    <>
      <TabMenu type="default" />
      <BookDescription />
      <AuthorInfo />
      <BookReview />
    </>
  );
};

export default HomeBestDetail;
