import HorizontalScrollList from '@/components/HorizontalScroll/HorizontalScroll';
import CartCard from '@/pages/HomeBestDetailCart/components/CartCard/CartCard';
import { ThirdCartViewStyle as s } from '@/pages/HomeBestDetailCart/ThirdCartView/ThirdCartView.style';

const mockSquareCards = [
  { src: '/src/assets/img/img_preference1.png', title: '카뮈의 그레이백', price: 2000 },
  {
    src: '/src/assets/img/img_preference2.png',
    title: '나만의 책 오두막: 리틀 포레스트',
    price: 38000,
  },
  {
    src: '/src/assets/img/img_preference3.png',
    title: 'The Scent of Page: 디퓨저 리필액',
    price: 28000,
  },
  {
    src: '/src/assets/img/img_preference4.png',
    title: 'The Scent of Page: 차량용 방향제',
    price: 42000,
  },
  {
    src: '/src/assets/img/img_preference5.png',
    title: 'The Scent of Page:디퓨저 200ML',
    price: 58000,
  },
];

const mockRectangularCards = [
  { src: '/src/assets/img/img_need1.png', title: '빛과 실', price: 13500 },
  { src: '/src/assets/img/img_need2.png', title: '한국이란 무엇인가', price: 16920 },
  {
    src: '/src/assets/img/img_need3.png',
    title: '제16회 젊은 작가상 수상작품집(2025)',
    price: 6930,
  },
  {
    src: '/src/assets/img/img_need4.png',
    title: '돈의 심리학(30만 부 기념 스페셜 에디션)',
    price: 17820,
  },
  {
    src: '/src/assets/img/img_need5.png',
    title: '돈의 속성(400쇄 리커버에디션)',
    price: 16920,
  },
];

const ThirdCartView = () => {
  return (
    <div css={s.Wrapper}>
      <h3 css={s.title}>이런 상품은 어떠세요?</h3>

      <HorizontalScrollList gap="1.2rem" sidePadding="0rem">
        {mockSquareCards.map((card, idx) => (
          <div key={idx} css={s.cardWrapper}>
            <CartCard imgUrl={card.src} title={card.title} price={card.price} type="square" />
          </div>
        ))}
      </HorizontalScrollList>

      <HorizontalScrollList gap="1.2rem" sidePadding="0rem">
        {mockRectangularCards.map((card, idx) => (
          <div key={idx} css={s.cardWrapper}>
            <CartCard imgUrl={card.src} title={card.title} price={card.price} type="rectangular" />
          </div>
        ))}
      </HorizontalScrollList>
    </div>
  );
};

export default ThirdCartView;
