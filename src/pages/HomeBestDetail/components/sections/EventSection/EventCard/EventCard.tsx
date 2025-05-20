import { useTheme } from '@emotion/react';

import * as s from '@/pages/HomeBestDetail/components/sections/EventSection/EventCard/EventCard.style';

interface EventCardProps {
  imgUrl: string;
  title: string;
  date: string;
}

const EventCard = ({ imgUrl, title, date }: EventCardProps) => {
  const theme = useTheme();
  return (
    <div css={s.card}>
      <img src={imgUrl} alt={title} css={s.image} aria-label={`${title}`} />
      <p css={s.title(theme)}>{title}</p>
      <p css={s.date(theme)}>{date}</p>
    </div>
  );
};

export default EventCard;
