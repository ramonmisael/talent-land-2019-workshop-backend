const express = require('express');

const expressRouter = express.Router();

const resumeRoutes = require('./resume');


const registerArrayOfRoutes = (router, arrayOfRoutes) => arrayOfRoutes.forEach((routeObj) => {
  const { method, route, handler } = routeObj;

  if (typeof route !== 'string') {
    throw new Error('Route property is not valid or not provided.');
  }

  if (typeof method !== 'string') {
    throw new Error(`Method '${method}' is not a valid express router method on route '${route}'.`);
  }

  if (typeof handler !== 'function') {
    throw new Error(`Handler for  '${method} ${route}' is not valid or not provided.`);
  }

  const routerMethod = router[method.toLowerCase()].bind(router);

  if (typeof routerMethod !== 'function') {
    throw new Error(`Method '${method}' is not a valid express router method.`);
  }

  try {
    routerMethod(route, handler);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Failed at registering route '${method} ${route}'.`, error);
  }
});

const allRoutesArray = resumeRoutes;// authRoutes.concat(rideRoutes)

registerArrayOfRoutes(expressRouter, allRoutesArray);

module.exports = expressRouter;
