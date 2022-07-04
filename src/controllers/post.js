import { sequelize } from "../models/index.js";
import User from "../models/user.js";
import Post from "../models/post.js";

const postCreate = async (req, res, next) => {
  const { id, date, title } = req.body;
  try {
    if (!id) return res.status(404).redirect("/?error=유저가 존재하지 않아요.");
    const post = await Post.create({
      title,
      image1: req.files[0]?.filename ?? null,
      createAt: date,
      UserId: id,
    });
    return res.status(201).redirect("/main");
  } catch (err) {
    console.error(err);
    next(err);
  }
}

export {
  postCreate,
}