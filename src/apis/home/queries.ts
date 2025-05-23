import { useQuery } from '@tanstack/react-query';

import { getTopBooks } from '@/apis/home/axios';
import { QUERY_KEYS } from '@/utils/constants/queryKey';
import type { TopBookResponseType } from '@/types/TopBookResponseType';

export const useGetTopBooks = () => {
  return useQuery<TopBookResponseType>({
    queryKey: [QUERY_KEYS.TOP_BOOKS],
    queryFn: getTopBooks,
  });
};

