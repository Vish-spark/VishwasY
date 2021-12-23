require("dotenv").config();

module.exports = {
  HOST: process.env.PGHOST,
  USER: process.env.PGUSER,
  PASSWORD: process.env.PGPASSWORD, //123
  DB: process.env.PGDATABASE, //testdb
  DIALECT: process.env.PGDIALECT,
  PORT: process.env.PGPORT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
