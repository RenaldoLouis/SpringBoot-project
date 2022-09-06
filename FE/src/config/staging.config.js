import devConfig from './development.config';

export default {
  ...devConfig,
  client: {
    baseURL: 'https://admin.stage.jumlaty.app/',
    onlineCouponCode: 'onlinepaymentnudgediscount',
  },
};
