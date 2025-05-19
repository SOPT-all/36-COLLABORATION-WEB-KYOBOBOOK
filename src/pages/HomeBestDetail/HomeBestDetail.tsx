import StarRating from '@/pages/HomeBestDetail/StarRating/StarRating';
import { starContainer } from '@/pages/HomeBestDetail/StarRating/StarRating.style';

const HomeBestDetail = () => {
  return (
    <div>
      홈 베스트 상세 페이지입니다
      <div css={starContainer}>
        <StarRating rating={4} />
      </div>
    </div>
  );
};

export default HomeBestDetail;
