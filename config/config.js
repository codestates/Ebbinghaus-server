require('dotenv').config();
const env = process.env.NODE_ENV || 'development';
const username = process.env.username || "root";
const password = process.env.password;
const host = process.env.host || "ebbinghaus.c98clmwx1rag.ap-northeast-2.rds.amazonaws.com";
const port = process.env.port || "13306"

module.exports = {
  "development": {
    username,
    "database": "ebbing_dev",
    password,
    host,
    "dialect": "mysql"
  },
  "test": {
    username,
    "database": "mohaji_test",
    password,
    host,
    port,
    "dialect": "mysql"
  },
  "production": {
    username,
    "database": "mohaji_production",
    password,
    host,
    port,
    "dialect": "mysql"
  }
}[env]