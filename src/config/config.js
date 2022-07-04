import dotenv from "dotenv";
dotenv.config();

const config = {
  "development": {
    "username": process.env.DB_ID,
    "password": process.env.DB_PW,
    "database": process.env.DB,
    "host": "3.95.50.72",
    "dialect": "mysql",
    "logging": false,

  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

export default config;