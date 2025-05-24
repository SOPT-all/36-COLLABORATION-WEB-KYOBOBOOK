import {
  BannerWrapper,
  BannerImage,
  BannerControls,
  InfoBox,
  InfoText,
  PauseIcon,
  AdWrapper,
} from './Home.style';
import CategoryButton from './components/CategoryButton/CategoryButton';
import AdCard from './components/Ad/AdCard';
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
import adImg1 from '@/assets/img/home_ad1.jpg';
import adImg2 from '@/assets/img/home_ad2.jpg';
import adImg3 from '@/assets/img/home_ad3.jpg';
import adImg4 from '@/assets/img/home_ad4.jpg';

const Home = () => {
  return (
    <>
      <MainHeader />

      {/* 배너 */}
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

      {/* 카테고리 버튼 */}
      <CategoryButton />

      {/* 광고 1 */}
      <div css={AdWrapper}>
        <AdCard
          imgSrc={adImg1}
          altText="출석체크"
          title="출석체크 혜택 UP!"
          subtitle="매일 출석하면 한 달 최대 4800원"
          titlePos={{ top: '2.7rem', left: '13.1rem' }}
          subtitlePos={{ top: '5.3rem', left: '13.1rem' }}
        />
      </div>

      {/* 베스트 도서 */}
      <BestBookList />

      {/* 사람들이 많이 찾고 있어요 */}
      <Find />

      {/* 오늘의 선택 */}
      <TodayPick />

      {/* 광고 2 */}
      <div css={AdWrapper}>
        <AdCard
          imgSrc={adImg2}
          altText="행복 수업"
          title="인생의 절반쯤 왔을 때 
                 <br />
                 당신이 놓치고 있는 것들"
          subtitle="하버드 대학 행복 수업"
          titlePos={{ top: '2.6rem', left: '2.2rem' }}
          subtitlePos={{ top: '7.4rem', left: '2.2rem' }}
        />
      </div>

      {/* 출판사 PICK */}
      <PublisherPick />

      {/* MD PICK */}
      <MdPick />

      {/* 광고 3 */}
      <div css={AdWrapper}>
        <AdCard
          imgSrc={adImg3}
          altText="손자병법"
          title="세상의 모든 전쟁을 지배한 단 한권의 책"
          subtitle="손자병법: 세상의 모든 진술"
          titlePos={{ top: '2.3rem', left: '2.4rem' }}
          subtitlePos={{ top: '4.7rem', left: '2.4rem' }}
        />
      </div>

      {/* AI 추천 */}
      <AiPick />

      {/* 교보 Only */}
      <Only />

      {/* 광고 4 */}
      <div css={AdWrapper}>
        <AdCard
          imgSrc={adImg4}
          altText="뇌과학"
          title="“일단 뛰어내려라.<br />
                  날개는 그 뒤에 만드는 것”"
          subtitle="아마존 인지 뇌과학1!"
          titlePos={{ top: '2.2rem', left: '2.4rem' }}
          subtitlePos={{ top: '4.6rem', left: '2.4rem' }}
        />
      </div>

      {/* 캐스팅 */}
      <Casting />

      {/* 이벤트 배너 */}
      <Event />

      {/* 푸터 */}
      <Footer />

      <Floater />
      <HomeBottomNav />
    </>
  );
};

export default Home;
