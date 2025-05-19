import { useTheme } from '@emotion/react';

import * as s from './EventCard.style';

interface EventCardProps {
  imgUrl: string;
  title: string;
  date: string;
}

const EventCard = ({ imgUrl, title, date }: EventCardProps) => {
  const theme = useTheme();
  return (
    <div css={s.card}>
      <img src={imgUrl} alt={title} css={s.image} />
      <p css={s.title(theme)}>{title}</p>
      <p css={s.date(theme)}>{date}</p>
    </div>
  );
};

export default EventCard;
