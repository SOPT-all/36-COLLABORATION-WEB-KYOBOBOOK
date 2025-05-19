import { useTheme } from '@emotion/react';

import { EVENT_CARD_LIST } from '@/pages/HomeBestDetail/EventSection/EventSection.constants';
import EventCard from '@/pages/HomeBestDetail/EventSection/EventCard/EventCard';
import * as s from '@/pages/HomeBestDetail/EventSection/EventSection.style';
import HorizontalScrollList from '@/components/HorizontalScroll/HorizontalScroll';
const EventSection = () => {
  const theme = useTheme();
  return (
    <div css={s.eventSection}>
      <h2 css={s.titleSection(theme)}>이 책의 이벤트</h2>
      <HorizontalScrollList gap="1.2rem">
        {EVENT_CARD_LIST.map(({ imgUrl, title, date }) => (
          <EventCard key={title} imgUrl={imgUrl} title={title} date={date} />
        ))}
      </HorizontalScrollList>
    </div>
  );
};

export default EventSection;
