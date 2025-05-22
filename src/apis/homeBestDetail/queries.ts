import { useQuery } from '@tanstack/react-query';

import { getReviews } from '@/apis/homeBestDetail/axios';
import { QUERY_KEYS } from '@/utils/constants/queryKey';
import type { ReviewResponseTypes } from '@/types/reviewResponseTypes';

export const useGetReviews = (bookId: number) => {
  return useQuery<ReviewResponseTypes>({
    queryKey: [QUERY_KEYS.BOOK_REVIEWS, bookId],
    queryFn: () => getReviews(bookId),
  });
};
