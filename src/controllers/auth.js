import passport from "passport";
import bcrypt from "bcrypt";

import { sequelize } from "../models/index.js";
import User from "../models/user.js";

const authJoin = async (req, res, next) => {
  const { name, email, password, password2, birth, gender} = req.body;
  try {
    const exist = await User.findOne({ where: { email }});
    if (exist) return res.status(304).redirect("/login?error=이미 가입된 회원이에요.");
    if (password !== password2) return res.status(304).redirect("/join?error=동일한 비밀번호를 입력해주세요.");
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hash,
      name,
      gender: gender === "male" ? true : false,
      birth,
      profile: req.file.filename,
    });
    return res.status(201).redirect("/login");
  } catch (err) { 
    console.error(err);
    next(err);
  }
}

const authLogin = async (req, res, next) => {
  try {
    passport.authenticate("local", (authError, user, info) => {
      if (authError) {
        console.error(authError);
        return next(authError);
      }
      if (!user) return res.redirect("/login?error=가입된 회원이 아니에요.");
      return req.login(user, (loginError) => {
        if (loginError) {
          console.error(loginError);
          return next(loginError);
        }
        return res.redirect("/profile");
      })
    })(req, res, next);
  } catch (err) {
    console.error(err);
    next(err);
  }
}

const authLogout = async (req, res, next) => {
  try { 
    req.logout(err => {
      if (err) return res.status(404).redirect("/login");
      req.session.destroy();
      res.clearCookie("connect.sid").status(200).redirect("/login");
    })
  } catch (err) {
    console.error(err);
    next(err);
  }
}

export {
  authJoin,
  authLogin,
  authLogout,
}