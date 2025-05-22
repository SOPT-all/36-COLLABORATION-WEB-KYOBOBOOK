import HorizontalScrollList from '@/components/HorizontalScroll/HorizontalScroll';
import CartCard from '@/pages/HomeBestDetailCart/components/CartCard/CartCard';
import { SecondCartViewStyle as s } from '@/pages/HomeBestDetailCart/SecondCartView/SecondCartView.style';

const mockCards = [
  { src: '/src/assets/img/img_foru1.png', title: '단 한 번의 삶', price: 15120 },
  {
    src: '/src/assets/img/img_foru2.png',
    title: '2025 시대에듀 All-New KB 국민은행 필기전형 봉투모의고사 9회분+무료NCS특강',
    price: 18000,
  },
  {
    src: '/src/assets/img/img_foru3.png',
    title: '모순',
    price: 11700,
  },
  {
    src: '/src/assets/img/img_foru4.png',
    title: '결국 국민이 합니다',
    price: 19800,
  },
  { src: '/src/assets/img/img_foru5.png', title: '청춘의 독서(특별 증보판)', price: 17010 },
];

const SecondCartView = () => {
  return (
    <div css={s.Wrapper}>
      <h3 css={s.Title}>당신을 위한 추천 도서</h3>
      <HorizontalScrollList gap="1.2rem" sidePadding="0rem">
        {mockCards.map((card, idx) => (
          <div key={idx} css={s.cardWrapper}>
            <CartCard imgUrl={card.src} title={card.title} price={card.price} type="rectangular" />
          </div>
        ))}
      </HorizontalScrollList>
    </div>
  );
};

export default SecondCartView;
