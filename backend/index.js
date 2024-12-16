import http from 'http';
import dev from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import {serMsg} from './constant/index.js';
import {dbConnect} from "./config/dbConfig.js";

dev.config();
const app = express();
const port = process.env.APP_PORT || 8000;

app.use(morgan('dev'));
app.use(cors({credentials: true}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Authorization"
  );
  if (req.method === 'OPTIONS') {
    res.header(
      'Access-Control-Allow-Methods',
      'PUT, POST, PATCH, DELETE, GET'
    );
    return res.status(200).json({});
  }
  next();
});

app.use('/', (req, res) => {
  res.status(200).json({msg: 'success'});
});

app.use((req, res, next) => {
  const error = new Error('The API url Not Found');
  error.status = 400;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      msg: error.message
    }
  })
});

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`${serMsg} ${port}`);
  dbConnect();
});
