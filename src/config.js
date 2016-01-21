require('babel/polyfill');

const environment = {
  development: {
    isProduction: false,
  },
  production: {
    isProduction: true,
  },
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  port: process.env.PORT,
  apiPort: process.env.APIPORT,
  app: {
    title: 'Test',
    description: 'Test',
    head: {
      titleTemplate: 'Test | %s',
      meta: [
        {name: 'description', content: 'Test'},
        {charset: 'utf-8'},
      ],
    },
  },
}, environment);
