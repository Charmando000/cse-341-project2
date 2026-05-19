const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Video Games API',
    description: 'API for video games collection'
  },

  host: 'localhost:3000',

  schemes: ['http']
};

const outputFile = './swagger-output.json';

const routes = ['./server.js'];

swaggerAutogen(outputFile, routes, doc);