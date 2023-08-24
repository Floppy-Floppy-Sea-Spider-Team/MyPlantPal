/**
 * ************************************
 *
 * @module server.js
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description The main server
 *
 * ************************************
 */


import path from "path";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./Routers/userRouter.js";
import plantRouter from "./Routers/plantRouter.js";
import apiRouter from "./Routers/apiRouter.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();


const app = express();
const port = process.env.PORT || 3000;



const currentDir = path.dirname(new URL(import.meta.url).pathname);

if (process.env.NODE_ENV === "production") {
  app.use("/build", express.static(path.join(currentDir, "../build")));
  app.get("/", (req, res) => {
    return res.status(200).sendFile(path.join(currentDir, "../index.html"));
  });
}

const MONGO_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mydb.qkjprsc.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "test",
  })
  .then(() => console.log("Connected to Mongo DB."))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", apiRouter);
app.use("/leaf/user", userRouter);
app.use("/leaf/plant", plantRouter);

// Define a route for GitHub OAuth callback
app.get("/github/callback", async (req, res) => {
  const { code } = req.query;

  try {
    const { data } = await axios.post(
      "https://github.com/login/oauth/access_token",
      null,
        {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {
          Accept: "application/json",
        },
      }
    );

    const accessToken = data.access_token;

    res.cookie("authToken", accessToken, { httpOnly: true, secure: true });

    console.log("GitHub OAuth success");
    // res.redirect("http://localhost:8080"); // Redirect to /home after successful GitHub sign-in
    res.status(200);
  } catch (error) {
    console.error("GitHub OAuth error:", error.message);
    res.redirect("/error");
  }
});

app.get("/auth", async (req, res) => {
  console.log('auth endpoint hit');
  res.status(202);

})

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" },
  };
  const errObj = Object.assign(defaultErr, err);
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}...`);
});

export default app;

