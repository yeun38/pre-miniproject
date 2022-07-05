import { Op } from "sequelize";
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
      image2: req.files[1]?.filename ?? null,
      image3: req.files[2]?.filename ?? null,
      createAt: date,
      UserId: id,
    });
    return res.status(201).redirect("/main");
  } catch (err) {
    console.error(err);
    next(err);
  }
}

const postDelete = async (req, res, next) => {
  try {
    const post = await Post.destroy({ where: { id: req.params.id }});
    if (!post) return res.status(404).redirect("/?error=글이 존재하지 않아요");
    return res.status(304).redirect("/main");
  } catch (err) {
    console.error(err);
    next(err);
  }
}

const postGet = async (req, res, next) => {
  const title = req.query.title;
  try {
    if (!title) return res.status(404).redirect("/?error=검색어가 존재하지 않아요.");
    const posts = await Post.findAll({
      where: {
        title: { [Op.like]: "%" + title + "%" },
      },
      order: [[ "createdAt", "DESC" ]],
    });
    return res.status(200).render("main", {
      user: req.user,
      posts,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
}

export {
  postCreate,
  postDelete,
  postGet,
}