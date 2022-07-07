import moment from "moment";

import { Op } from "sequelize";
import { sequelize } from "../models/index.js";
import User from "../models/user.js";
import Post from "../models/post.js";

const time = moment();

const postCreate = async (req, res, next) => {
  const { id, date, title } = req.body;
  const dateResult = date.split("-");
  console.log(dateResult[2]);
  try {
    if (!id) return res.status(404).redirect("/?error=유저가 존재하지 않아요.");
    const post = await Post.create({
      title,
      image1: req.files[0]?.filename ?? null,
      image2: req.files[1]?.filename ?? null,
      image3: req.files[2]?.filename ?? null,
      created: time.format(`${dateResult[0]}-${dateResult[1]}-${dateResult[2]}`),
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
      order: [[ "created", "DESC" ]],
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

const postGetDate = async (req, res, next) => {
  const date = req.params.date;
  try {
    switch (date) {
      case "seven":
        const [ result ] = await sequelize.query(`SELECT * FROM posts WHERE DATE(created) BETWEEN DATE_ADD(NOW(), INTERVAL - 1 WEEK) AND NOW()`);
        return res.render("main", {
          posts: result,
        });
        break;
      case "three":
        const [ result2 ] = await sequelize.query(`SELECT * FROM posts WHERE DATE(created) BETWEEN DATE_ADD(NOW(), INTERVAL - 3 DAY) AND NOW()`);
        return res.render("main", {
          posts: result2,
        });
        break;
      default:
        return res.status(404).redirect("/main?error=클라이언트 에러");
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
}

export {
  postCreate,
  postDelete,
  postGet,
  postGetDate,
}