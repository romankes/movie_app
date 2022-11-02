import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';
import ENV from '@/configs';

import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosInstance: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
  baseURL: `${ENV.BASE_URL}/api/v${ENV.API_VERSION}`,
});

axiosInstance.interceptors.request.use(
  async (config: any) => {
    const token = await AsyncStorage.getItem('TOKEN');

    if (token) {
      config.headers['Authorization'] = token;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  },
);

export default axiosInstance;
