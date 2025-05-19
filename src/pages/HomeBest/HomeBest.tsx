import BookItem from '@/pages/HomeBest/components/BookItem/BookItem';
import sample from '@/assets/img/sample.png';
import Footer from '@/components/Footer/Footer';
import MainHeader from '@/components/MainHeader/MainHeader';

const HomeBest = () => {
  return (
    <>
      <MainHeader />
      <div>홈 베스트 페이지입니다</div>
      <BookItem
        rank={7}
        title={'단 한 번의 삶'}
        author={'김영하'}
        publisher={'복복서가'}
        discountRate={10}
        price={15120}
        point={840}
        rating={4}
        review={'감동이에요'}
        deliveryDate={'오늘(4/24,목)'}
        isLiked={false}
        imageUrl={sample}
      />
      <Footer />
    </>
  );
};

export default HomeBest;
