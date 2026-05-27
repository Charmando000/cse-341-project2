const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Video Games API',
    description: 'API documentation for Video Games project'
  },

  host: 'cse-341-project2-ilsl.onrender.com',

  schemes: ['https']
};

const outputFile = './swagger-output.json';

const routes = ['./server.js'];

swaggerAutogen(outputFile, routes, doc);