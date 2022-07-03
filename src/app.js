import express from "express";
import morgan from "morgan";
import nunjucks from "nunjucks";
import dotenv from "dotenv";
import path from "path";
import session from "express-session";
import cookieParser from "cookie-parser";
import passport from "passport";

import indexRoutes from "./routes/index.js";
import * as errorController from "./controllers/error.js";

dotenv.config();
const app = express();
const __dirname = path.resolve();

app.set("port", process.env.NODE_ENV || 1000);
app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRoutes);

app.use(errorController.error404);
app.use(errorController.error);

const server = app.listen(app.get("port"), () => console.log("1000"));

