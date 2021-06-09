import _http from './server';

export const toLogin = (data) => {
  return _http.post('/au/login', data, {
    timeout: 10000,
  });
};
export const getCode = (data) => {
  return _http.post('/au/code', data, {
    timeout: 10000,
  });
};
