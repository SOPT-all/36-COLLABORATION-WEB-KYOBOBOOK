import { BannerWrapper, BannerImage, BannerControls, InfoBox, InfoText, PauseIcon } from './Home.style';
import CategoryButton from './components/CategoryButton/CategoryButton';
import BestBookList from './components/BestBookList/BestBookList';

import Icon from '@/components/Icon';
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

        <div css={BannerControls}>
          <div css={PauseIcon}>
            <Icon name="pause" />
          </div>
          <div css={InfoBox}>
            <span css={InfoText}>30-37 전체보기</span>
          </div>
        </div>
      </div>
      <CategoryButton />
      <BestBookList />
      <div>홈페이지입니다.</div>
      <Floater />
      <HomeBottomNav />
    </>
  );
};

export default Home;
