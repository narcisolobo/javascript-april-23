import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose-config.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT;

import todoRouter from './routes/todo-routes.js';
app.use(express.json());
app.use('/api/todos', todoRouter);

async function serverStart() {
  dbConnect();
  app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
}

serverStart();
