require("dotenv").config();

module.exports = {
  development: {
    username: "ebbingTeam",
    password: process.env.DATABASE_PASSWORD,
    database: "ebbinghausDB",
    host: "ebbinghaus.c98clmwx1rag.ap-northeast-2.rds.amazonaws.com",
    port: 13306,
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
