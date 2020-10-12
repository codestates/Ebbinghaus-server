const path = require('path');
require('dotenv').config(path.join(__dirname, '../.env'));
const env = process.env.NODE_ENV || 'development';
const username = process.env.username || "root";
const password = process.env.password;
const host = process.env.host || "127.0.0.1";
const port = process.env.port || "3306"

module.exports = {
  development: {
    username,
    database: "ebbinghaus_development",
    password,
    host,
    dialect: "mysql"
  },
  test: {
    username,
    database: "ebbinghaus_test",
    password,
    host,
    port,
    dialect: "mysql"
  },
  production: {
    username,
    database: "ebbinghaus_production",
    password,
    host,
    port,
    dialect: "mysql"
  }
}[env]