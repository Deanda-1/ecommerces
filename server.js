const express = require('express');
const routes = require('./routes');
const Sequelize = require('sequelize');
require('dotenv').config();
// import sequelize connection
const sequelize = require('./config/connection');
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

module.exports = sequelize;
// sync sequelize models to the database, then turn on the server






