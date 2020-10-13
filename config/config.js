require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "ebbinghaus_development",
    host: "localhost",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "ebbinghaus_development",
    host: "localhost",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "ebbinghaus_development",
    host: "localhost",
    dialect: "mysql",
  },
};
