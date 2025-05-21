import { instance } from '@/apis/instance';
import { END_URL } from '@/utils/constants/apiURL';
import type { HomeBestResponseTypes } from '@/types/HomeBestResponseTypes';
import type { ApiResponseType } from '@/types/apiResponseType';

export const getBestBooks = async (): Promise<HomeBestResponseTypes> => {
  const response = await instance.get<ApiResponseType<HomeBestResponseTypes>>(END_URL.GET_BEST_BOOKS);
  return response.data.data;
};
