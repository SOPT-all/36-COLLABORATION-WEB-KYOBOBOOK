import Divider from '@/components/Divider/Divider';
import BookDetail from '@/pages/HomeBestDetail/components/sections/BookSummary/BookDetail';
import ProductDetail from '@/pages/HomeBestDetail/components/sections/BookSummary/ProductDetail';

const BookSummary = () => {
  return (
    <>
      <BookDetail />
      <Divider />
      <ProductDetail />
      <Divider />
    </>
  );
};

export default BookSummary;
