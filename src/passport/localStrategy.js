import passport from "passport";
import passportLocal from "passport-local";
import bcrypt from "bcrypt";

import { sequelize } from "../models/index.js";
import User from "../models/user.js";

const LocalStrategy = passportLocal.Strategy;

export default () => {
  passport.use(new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
  }, async (email, password, done) => {
    try {
      const exist = await User.findOne({ where: { email }});
      if (!exist) return done(null, false, { message: "가입된 회원이 아니에요." });
      const compare = await bcrypt.compare(password, exist.password);
      if (!compare) return done(null, false, { message: "비밀번호 불일치" });
      done(null, exist);
    } catch (err) {
      console.error(err);
      done(err);
    }
  }));
}