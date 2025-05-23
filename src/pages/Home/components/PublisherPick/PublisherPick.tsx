import { Wrapper, TitleText, AdBadge, ScrollWrapper, textWrapper } from './PublisherPick.style';

import Img1 from '@/assets/img/img_recommend1.png';
import Img2 from '@/assets/img/img_recommend2.png';
import Img3 from '@/assets/img/img_recommend3.png';
import Card from '@/components/Card/Card';
import HorizontalScrollList from '@/components/HorizontalScroll/HorizontalScroll';

const books = [
  { id: 1, title: '단 한 번의 삶', imgUrl: Img1 },
  { id: 2, title: '내가 원하는 것을 나도 모를 때', imgUrl: Img2 },
  { id: 3, title: '드디어 만나는 경제학 수업', imgUrl: Img3 },
];

const PublisherPick = () => {
  return (
    <div>
      <section css={Wrapper}>
        <span css={AdBadge}>AD</span>
        <h2 css={TitleText}>출판사에서 자신있게 추천해요</h2>
      </section>

      <HorizontalScrollList>
        {books.map((book) => (
          <Card key={book.id} imgUrl={book.imgUrl} title={book.title} />
        ))}
      </HorizontalScrollList>
    </div>
  );
};

export default PublisherPick;
