require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../../config/Config.json')[env];

const basename = path.basename(module.filename);
const db = {};

const sequelize = config.use_env_constiable ?
  new Sequelize(process.env[config.use_env_constiable]) :
  new Sequelize(config.database, config.username, config.password, config);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) &&
    (file !== 'Index.js') &&
    (file.slice(-3) === '.js');
  })
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;