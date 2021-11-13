const Sequelize = require('sequelize');
require('dotenv').config();

const Sequelize = require('sequelize');
const sequelize = process.env.JAWSDB_URL
          process.env.DB_NAME,
          process.env.DB_USER,
          process.env.DB_PASSWORD,
   new Sequelize(process.env.JAWSDB_URL)
   new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;