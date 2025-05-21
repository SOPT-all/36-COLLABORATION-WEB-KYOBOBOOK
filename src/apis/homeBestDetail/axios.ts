import { instance } from '@/apis/instance';
import type { ApiResponseType } from '@/types/apiResponseType';
import type { ReviewResponseTypes } from '@/types/reviewResponseTypes';
import { END_URL } from '@/utils/constants/apiURL';

export const getReviews = async (bookId: number) => {
  const res = await instance.get<ApiResponseType<ReviewResponseTypes>>(
    END_URL.GET_BOOK_REVIEWS(bookId),
  );
  return res.data.data;
};
