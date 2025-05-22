import { BannerWrapper, BannerImage } from './Home.style';
import CategoryButton from './components/CategoryButton/CategoryButton';

import HomeBottomNav from '@/components/BottomNav/HomeBottomNav';
import Floater from '@/components/Floater/Floater';
import MainHeader from '@/components/MainHeader/MainHeader';
import homeBanner from '@/assets/img/home_banner.png';

const Home = () => {
  return (
    <>
      <MainHeader />
      <div css={BannerWrapper}>
        <img src={homeBanner} alt="6분 클래식" css={BannerImage} />
      </div>
      <CategoryButton />
      <div>홈페이지입니다.</div>
      <Floater />
      <HomeBottomNav />
    </>
  );
};

export default Home;
