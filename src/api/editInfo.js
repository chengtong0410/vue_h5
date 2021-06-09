import _http from './server';
export const editUserInfo = (data) => {
  return _http({
    method: 'post',
    url: '/au/edit',
    data,
  });
};
export const hadUserInfo = () => {
  return _http({
    url: '/au/info',
  });
};
