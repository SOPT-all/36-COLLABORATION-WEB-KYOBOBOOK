import { instance } from '@/apis/instance';
import { END_URL } from '@/utils/constants/apiURL';
import type { ApiResponseType } from '@/types/apiResponseType';
import type { TopBookResponseType } from '@/types/TopBookResponseType';

export const getTopBooks = async (): Promise<TopBookResponseType> => {
  const response = await instance.get<ApiResponseType<TopBookResponseType>>(
    END_URL.GET_TOP_BOOKS
  );

  if (!response.data.success) {
    throw new Error(response.data.error?.message || 'top5 조회 실패');
  }
  return response.data.data;
};
