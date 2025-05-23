import { BannerWrapper, BannerImage, BannerControls, InfoBox, InfoText, PauseIcon } from './Home.style';
import CategoryButton from './components/CategoryButton/CategoryButton';
import AdCard from './components/Ad/AdCard';
import BestBookList from './components/BestBookList/BestBookList';

import Icon from '@/components/Icon';
import HomeBottomNav from '@/components/BottomNav/HomeBottomNav';
import Floater from '@/components/Floater/Floater';
import MainHeader from '@/components/MainHeader/MainHeader';
import homeBanner from '@/assets/img/home_banner.png';
import adImg1 from '@/assets/img/home_ad1.jpg';
import adImg2 from '@/assets/img/home_ad2.jpg';
import adImg3 from '@/assets/img/home_ad3.jpg';
import adImg4 from '@/assets/img/home_ad4.jpg'; 


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
      <AdCard
        imgSrc={adImg1}
        altText="출석체크"
        title="출석체크 혜택 UP!"
        subtitle="매일 출석하면 한 달 최대 4800원"
        titlePos={{ top: '2.7rem', left: '13.1rem' }}
        subtitlePos={{ top: '5.1rem', left: '13.1rem' }}
        />
      <AdCard
        imgSrc={adImg2}
        altText="행복 수업"
        title="인생의 절반쯤 왔을 때 당신이 놓치고 있는 것들"
        subtitle="하버드 대학 행복 수업"
        titlePos={{ top: '2.1rem', left: '2.4rem' }}
        subtitlePos={{ top: '5.3rem', left: '2.4rem' }}
        
      />
      <AdCard
        imgSrc={adImg3}
        altText="손자병법"
        title="세상의 모든 전쟁을 지배한 단 한권의 책"
        subtitle="손자병법: 세상의 모든 진술"
        titlePos={{ top: '2.3rem', left: '2.4rem' }}
        subtitlePos={{ top: '4.7rem', left: '2.4rem' }}
      />
      <AdCard
        imgSrc={adImg4}
        altText="뇌과학"
        title='"일단 뛰어내려라. 날개는 그 뒤에 만드는 것"'
        subtitle="아마존 인지 뇌과학1!"
        titlePos={{ top: '2.2rem', left: '2.4rem' }}
        subtitlePos={{ top: '4.6rem', left: '2.4rem' }}
      />
      <BestBookList />
      <div>홈페이지입니다.</div>

      <Floater />
      <HomeBottomNav />
    </>
  );
};

export default Home;
