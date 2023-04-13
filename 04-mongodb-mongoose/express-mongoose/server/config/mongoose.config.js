const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@senseiseesocluster.5sdwhmm.mongodb.net/${DB_NAME}`;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose
  .connect(DB_URI)
  .then(() => console.log('Connected to DB.'))
  .catch((err) => console.log(err));
