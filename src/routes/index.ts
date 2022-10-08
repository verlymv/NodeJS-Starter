import 'reflect-metadata';
import UserRoute from './user';

module.exports = function(app) {
  app.use('/users', UserRoute);
};