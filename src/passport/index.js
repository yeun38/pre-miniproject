import passport from "passport";
import local from "./localStrategy.js";

import { sequelize } from "../models/index.js";
import User from "../models/user.js";

export default () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id }});
      done(null, user);
    } catch (err) {
      console.error(err);
      done(err);
    }
  });

  local();
}