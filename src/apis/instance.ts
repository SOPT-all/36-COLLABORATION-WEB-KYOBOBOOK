import axios from 'axios';

import { BASE_URL } from '@/utils/constants/apiURL';
import { onErrorResponse } from '@/apis/error';

export const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.response.use((response) => response, onErrorResponse);
