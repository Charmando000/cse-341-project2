const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Video Games API',
    description: 'API documentation for Video Games project'
  },

  host: 'localhost:3000',

  schemes: ['http']
};

const outputFile = './swagger-output.json';

const routes = ['./server.js'];

swaggerAutogen(outputFile, routes, doc);