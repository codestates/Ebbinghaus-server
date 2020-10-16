require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "ebbinghaus_development",
    host: "localhost",
    dialect: "mysql",
    timezone: "+09:00",
    //port: 13306,

  },
  test: {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "ebbinghaus_development",
    host: "localhost",
    dialect: "mysql",
  },
  production: {
    username: "ebbingTeam",
    password: process.env.DATABASE_PASSWORD,
    database: "ebbinghausDB",
    host: "ebbinghaus.c98clmwx1rag.ap-northeast-2.rds.amazonaws.com",
    dialect: "mysql",
    port: 13306,
  },
};
