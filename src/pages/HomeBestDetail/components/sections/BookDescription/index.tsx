import HorizontalScrollList from '@/components/HorizontalScroll/HorizontalScroll';
import BookMeta from '@/pages/HomeBestDetail/components/elements/BookMeta/BookMeta';

export default function BookDescription() {
  const bookMeta = {
    카테고리: '한국에세이',
    출간일: '2025.04.06',
    쪽수: '200P',
    크기: '9791191114768',
    ISBN: '137 * 196 * 22mm / 397 g',
  };

  return (
    <HorizontalScrollList gap="0" sidePadding="0">
      {Object.entries(bookMeta).map(([title, content], index) => {
        return <BookMeta key={title} title={title} content={content} index={index} />;
      })}
    </HorizontalScrollList>
  );
}
