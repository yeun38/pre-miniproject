import bcrypt from "bcrypt";

import { sequelize } from "../models/index.js";
import User from "../models/user.js";

const userUpdatePass = async (req, res, next) => {
  const userId = req.params.id;
  const password = req.body.password;
  try {
    const exist = await User.findOne({ where: { id: userId }});
    if (!exist) return res.status(404).redirect("/profile?error=유저 아이디 미존재");
    const hash = await bcrypt.hash(password, 10);
    const update = await User.update({
      password: hash,
    }, {
      where: { id: userId },
    });
    return res.status(200).json({
      result: true,
      message: "success",
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
}

const userUpdateImage = async (req, res, next) => {
  const userId = req.params.id;
  try {
    console.log(req.file.filename);
    const exist = await User.findOne({ where: { id: userId }});
    if (!exist) return res.status(404).redirect("/?error=유저아이디 없음");
    const update = await User.update({
      profile: req.file.filename,
    }, {
      where: { id: userId },
    });
    return res.status(200).json({
      url: `/img/${req.file.filename}`,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
}

export {
  userUpdatePass,
  userUpdateImage,
}