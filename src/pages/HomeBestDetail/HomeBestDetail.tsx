import RatingBar from '@/pages/HomeBestDetail/RatingBar/RatingBar';
import { data } from '@/pages/HomeBestDetail/EmotionBar/ReviewData';
import BookMeta from '@/pages/HomeBestDetail/BookMeta/BookMeta';
import HorizontalScrollList from '@/components/HorizontalScroll/HorizontalScroll';
import TabMenu from '@/pages/HomeBestDetail/TabMenu/TabMenu';
import DetailBottomNav from '@/components/BottomNav/DetailBottomNav';
import Floater from '@/components/Floater/Floater';

const HomeBestDetail = () => {
  const bookMeta = {
    카테고리: '한국에세이',
    출간일: '2025.04.06',
    쪽수: '200P',
    크기: '9791191114768',
    ISBN: '137 * 196 * 22      mm / 397 g',
  };

  const sortedStar = Object.entries(data.starDistribution).sort(
    ([a], [b]) => Number(b) - Number(a),
  );

  return (
    <>
      <div>
        <TabMenu type="default" />
      </div>
      <HorizontalScrollList gap="0" sidePadding="0">
        {Object.entries(bookMeta).map(([title, content], index) => {
          return <BookMeta key={title} title={title} content={content} index={index} />;
        })}
      </HorizontalScrollList>
      <div>
        {sortedStar.map(([key, percent]) => {
          const rating = Number(key);
          return <RatingBar key={rating} rating={rating} percent={percent} />;
        })}
      </div>
      <Floater />
      <DetailBottomNav />
    </>
  );
};

export default HomeBestDetail;
