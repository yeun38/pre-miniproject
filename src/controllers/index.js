import axios from "axios";

const indexRender = (req, res, next) => {
  return res.render("index");
}

const joinRender = (req, res, next) => {
  return res.render("join");
}

const mainRender = (req, res, next) => {
  return res.render("main", {
    user: req.user,
  });
}

const profileRender = (req, res, next) => {
  console.log(req.user.birth);
  return res.render("profile", {
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
    birth: req.user.birth,
    profile: req.user.profile,
  });
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
  mainRender,
  profileRender,
  test,
}