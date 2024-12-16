import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

import { databaseMsg, appMsg } from "./constant/index.js";
import { dbConnect } from "./config/dbConfig.js";
import router from "./routers/index.js";

/*
 * load env variables from .env,
 * initialize express app,
 * set up port default 8000,
 */
dotenv.config();
const app = express();
const port = process.env.APP_PORT || 8000;

app.use(morgan("dev"));
app.use(cors({ credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* handle routes */
app.use("/", router());

/* handle undefined routes (404) */
app.use((req, res, next) => {
  const error = new Error(appMsg.notFound);
  error.status = 404;
  next(error);
});

/* global error handling middleware */
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      msg: error.message,
    },
  });
});

/* Connect to the database before starting the server */
dbConnect()
  .then(() => {
    /* Start the HTTP server after successful DB connection */
    app.listen(port, () => console.log(`${appMsg.serMsg} ${port}`));
  })
  .catch((err) => {
    /* Exit process if DB connection fails */
    console.error(databaseMsg.failedDb, err);
    process.exit(1);
  });
