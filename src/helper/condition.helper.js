import _ from 'lodash';

export const isSuccess = (resData) => !_.isEmpty(resData);
