import axios from 'axios';

import { BASE_URL } from '@/utils/constants/apiURL';

export const instance = axios.create({
  baseURL: BASE_URL,
});
