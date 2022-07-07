import axios from "axios";
import moment from "moment";

import { sequelize } from "../models/index.js";
import User from "../models/user.js";
import Post from "../models/post.js";

const time = moment();

const indexRender = (req, res, next) => {
  return res.render("index");
}

const joinRender = (req, res, next) => {
  return res.render("join");
}

const mainRender = async (req, res, next) => {  
  try {
    const page = req.query.page;
    const user = await User.findOne({ where: { id: req.user.id }});
    const posts = await user.getPosts();
    return res.render("main", {
      user: req.user,
      posts,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
}

const profileRender = (req, res, next) => {
  return res.render("profile", {
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
    birth: req.user.birth,
    profile: req.user.profile,
  });
}

const testRender = async (req, res, next) => {
  const [ result, metadata ] = await sequelize.query("SELECT * FROM users");
  console.log(result); 
  return res.render("test");
}

const test = async (req, res, net) => {
  const key = process.env.key;
  const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=37&lon=126&appid=${key}&units=metric`)
  console.log(weather.data);
  return res.json(weather.data);
}

export {
  indexRender,
  joinRender,
  mainRender,
  profileRender,
  testRender,
  test,
}