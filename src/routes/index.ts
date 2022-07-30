import {Express} from 'express';
import site from './site';
const routes = (app: Express) => {
  app.use('/', site);
};

export default routes;
