const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'EDUCASE API',
    description: 'Api for school list as per user Location'
  },
  host: 'localhost:3000'
};

const outputFile = './swagger-output.json';
const routes = ['./router/school.route.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);