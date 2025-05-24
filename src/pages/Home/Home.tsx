import { useTheme } from '@emotion/react';

import {
  BannerWrapper,
  BannerImage,
  BannerControls,
  InfoBox,
  InfoText,
  PauseIcon,
  AdWrapper,
  Ad1Wrapper,
  gapWrapper,
  emptyContainer,
} from './Home.style';
import CategoryButton from './components/CategoryButton/CategoryButton';
import BestBookList from './components/BestBookList/BestBookList';
import Find from './components/Find/Find';
import TodayPick from './components/TodayPick/TodayPick';
import PublisherPick from './components/PublisherPick/PublisherPick';
import MdPick from './components/MdPick/MdPick';
import AiPick from './components/AiPick/AiPick';
import Only from './components/Only/Only';
import Casting from './components/Casting/Casting';
import Event from './components/Event/Event';

import Icon from '@/components/Icon';
import HomeBottomNav from '@/components/BottomNav/HomeBottomNav';
import Floater from '@/components/Floater/Floater';
import MainHeader from '@/components/MainHeader/MainHeader';
import Footer from '@/components/Footer/Footer';
import homeBanner from '@/assets/img/home_banner.png';
import banner1 from '@/assets/img/banner1.jpg';

const Home = () => {
  const theme = useTheme();

  return (
    <>
      <MainHeader />

      {/* 배너 */}
      <div css={BannerWrapper}>
        <img src={homeBanner} alt="6분 클래식" css={BannerImage} />
        <div css={BannerControls(theme)}>
          <div css={PauseIcon}>
            <Icon name="pause" />
          </div>
          <div css={InfoBox}>
            <span css={InfoText(theme)}>30-37 전체보기</span>
          </div>
        </div>
      </div>

      {/* 카테고리 버튼 */}
      <CategoryButton />
      <div css={gapWrapper}>
        {/* 광고 1 */}
        <div css={Ad1Wrapper}>
          <img src={banner1} width={327} height={100} alt="배너1" />
        </div>

        {/* 베스트 도서 */}
        <BestBookList />

        {/* 사람들이 많이 찾고 있어요 */}
        <Find />

        {/* 오늘의 선택 */}
        <TodayPick />

        {/* 광고 2 */}
        <div css={AdWrapper}>
          <Icon name="banner2" width={327} height={120} />
        </div>

        {/* 출판사 PICK */}
        <PublisherPick />

        {/* MD PICK */}
        <MdPick />

        {/* 광고 3 */}
        <div css={AdWrapper}>
          <Icon name="banner3" width={327} height={120}/>
        </div>

        {/* AI 추천 */}
        <AiPick />

        {/* 교보 Only */}
        <Only />

        {/* 광고 4 */}
        <div css={AdWrapper}>
          <Icon name="banner4" width={327} height={120}/>
        </div>
        {/* 캐스팅 */}
        <Casting />

        {/* 이벤트 배너 */}
        <Event />
      </div>

      {/* 푸터 */}
      <Footer />
      <div css={emptyContainer} />
      <Floater />
      <HomeBottomNav />
    </>
  );
};

export default Home;
