// AdCard.tsx
import * as S from './AdCard.style';

type AdCardProps = {
  imgSrc: string;
  altText: string;
  title: string;
  subtitle: string;
  titlePos: {
    top: string;
    left: string;
  };
  subtitlePos: {
    top: string;
    left: string;
  };
};

const AdCard = ({ imgSrc, altText, title, subtitle, titlePos, subtitlePos }: AdCardProps) => {
  return (
    <div css={S.wrapper}>
      <img src={imgSrc} alt={altText} css={S.image} />
      <p css={S.title(titlePos)}>{title}</p>
      <p css={S.subtitle(subtitlePos)}>{subtitle}</p>
    </div>
  );
};

export default AdCard;
