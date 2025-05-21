import { instance } from '@/apis/instance';
import type { ApiResponseType } from '@/types/apiResponseType';
import type { ReviewTypes } from '@/types/reviewTypes';
import { END_URL } from '@/utils/constants/apiURL';

export const getReviews = async (bookId: number) => {
  const res = await instance.get<ApiResponseType<ReviewTypes[]>>(
    END_URL.GET_BOOK_REVIEWS_STATISTIC(bookId),
  );
  return res.data.data;
};
