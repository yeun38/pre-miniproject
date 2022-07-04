import { Sequelize } from "sequelize";
import config from "../config/config.js";

const env = process.env.NODE_ENV || "development";
const { database, username, password } = config.development;
const sequelize = new Sequelize(
  database, username, password, config.development
);

export { sequelize };
export default sequelize;