'use strict';

var RoleRoutes = require('./RoleRoutes');
var UserRoutes = require('./UserRoutes');
var TypeRoutes = require('./TypeRoutes');
var DocRoutes = require('./DocRoutes');

module.exports = function (app) {
  // Home route
  app.get('/', function (req, res) {
    res.send('Welcome!!');
  });

  // Use userRoutes
  app.use('/users', UserRoutes);

  // Use documentTypes
  app.use('/types', TypeRoutes);

  // Use DocRoutes
  app.use('/documents', DocRoutes);

  // Role routes
  app.use('/roles', RoleRoutes);
};