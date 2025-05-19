import HomeBottomNav from '@/components/BottomNav/HomeBottomNav';
import Floater from '@/components/Floater/Floater';
import MainHeader from '@/components/MainHeader/MainHeader';

const Home = () => {
  return (
    <>
      <MainHeader />
      <Floater />
      <HomeBottomNav />
      <div>홈페이지입니다.</div>
    </>
  );
};

export default Home;
