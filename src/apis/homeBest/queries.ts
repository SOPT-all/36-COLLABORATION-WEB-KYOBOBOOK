import { useQuery } from '@tanstack/react-query';

import { getBestBooks } from '@/apis/homeBest/axios';
import { QUERY_KEYS } from '@/utils/constants/queryKey';
import type { HomeBestResponseTypes } from "@/types/HomeBestResponseTypes";

export const useGetBestBooks = () => {
  return useQuery<HomeBestResponseTypes>({
    queryKey: [QUERY_KEYS.BEST_BOOKS],
    queryFn: getBestBooks,
  });
};
