import { instance } from '@/apis/instance';
import type { ApiResponseType } from '@/types/apiResponseType';
import type { ratingResponseTypes } from '@/types/ratingReponseTypes';
import type { ReviewResponseTypes } from '@/types/reviewResponseTypes';
import type { BookDetailResponse } from '@/types/bookDetailTypes';
import { END_URL } from '@/utils/constants/apiURL';

export const getReviews = async (bookId: number) => {
  const res = await instance.get<ApiResponseType<ReviewResponseTypes>>(
    END_URL.GET_BOOK_REVIEWS(bookId),
  );
  return res.data.data;
};

export const getRatings = async (bookId: number) => {
  const res = await instance.get<ApiResponseType<ratingResponseTypes>>(
    END_URL.GET_BOOK_REVIEWS_STATISTIC(bookId),
  );
  return res.data.data;
};

export const getBookDetail = async (bookId: number) => {
  const res = await instance.get<ApiResponseType<BookDetailResponse>>(
    END_URL.GET_BOOK_DETAIL(bookId),
  );
  return res.data.data;
};
