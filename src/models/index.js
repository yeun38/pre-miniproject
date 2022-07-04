import Sequelize from "sequelize";
import config from "../config/config.js";

import User from "./user.js";
import Post from "./post.js";

const configEnv = config.development;

const db = {};
const sequelize = new Sequelize(
  configEnv.database,
  configEnv.username,
  configEnv.password,
  configEnv,
);

db.sequelize = sequelize;
db.User = User;
db.Post = Post;


User.init(sequelize);
Post.init(sequelize);

User.associate(db);
Post.associate(db);

export {
  sequelize,
}