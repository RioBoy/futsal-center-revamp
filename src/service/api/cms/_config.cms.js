import axios from 'axios';

export const _get = (url, timeout = 5000) =>
  axios
    .get(url)
    .then((response) => {
      return response?.data || {};
    })
    .catch((err) => {
      console.log('err: ', err);
    });

export const _post = (url, payload = {}, headers = {}) =>
  axios
    .post(url, payload, { headers })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log('err: ', err);
    });
