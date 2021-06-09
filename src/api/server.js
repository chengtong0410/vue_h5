import axios from 'axios';
import { Toast } from 'vant';
import { getLocal } from '../utils/local';
let _http = axios.create({
  baseURL: process.env.VUE_APP_URL,
});

_http.interceptors.request.use(
  (config) => {
    // 获取 token

    if (config.needToken) {
      const token = getLocal('token');
      if (token) {
        // 给请求信息的请求头中统一携带 token
        config.headers.authorization = `Bearer ${token}`;
      }
    }

    Toast.loading({
      message: '加载中...',
      forbidClick: true,
    });
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

_http.interceptors.response.use(
  (res) => {
    const code = res.data.code;
    if (code === 200) {
      Toast.clear();
      return res.data;
    } else if (code === 401 || code === 403) {
      Toast.fail('登录异常');
    } else {
      Toast.fail('网络异常');
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default _http;
