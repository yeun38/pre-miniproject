import axios from "axios";

const indexRender = (req, res, next) => {
  return res.render("index");
}

const joinRender = (req, res, next) => {
  return res.render("join");
}

const loginRender = (req, res, next) => {
  return res.render("login");
}

const profileRender = (req, res, next) => {
  return res.render("profile");
}

const test = async (req, res, net) => {
  const key = "a2e8922539a2e4f37866cc7d173c8be2";
  const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=37&lon=126&appid=${key}&units=metric`)
  console.log(weather.data);
  res.end();
}

export {
  indexRender,
  joinRender,
  loginRender,
  profileRender,
  test,
}