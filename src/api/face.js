import _http from '../api/server';
export const getFaceExe = () => {
  return _http({
    url: '/articles/technic',
    needToken: false,
  });
};
export const pullMonenyList = () => {
  return _http({
    url: '/chart-data/hot',
    needToken: false,
  });
};
