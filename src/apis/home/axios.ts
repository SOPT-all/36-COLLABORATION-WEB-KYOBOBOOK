import { instance } from '@/apis/instance';
import type { TopBookResponseType } from '@/types/TopBookResponseType';
import type { ApiResponseType } from '@/types/apiResponseType';

export const getTopBooks = async (): Promise<TopBookResponseType> => {
  const response = await instance.get<ApiResponseType<TopBookResponseType>>(
    'http://3.39.227.247:8082/books/top5'
  );

  if (!response.data.success) {
    throw new Error(response.data.error?.message || 'top5 조회 실패');
  }
  return response.data.data;
};
