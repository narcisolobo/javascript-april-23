import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose-config.js';
import recordRouter from './routes/record-routes.js';
import cors from 'cors';

const app = express();
dotenv.config();

app.use(express.json(), cors());
app.use('/api/records', recordRouter);

async function serverStart() {
  try {
    await dbConnect();
    const PORT = process.env.PORT;
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
  } catch (err) {
    console.log(err);
  }
}

serverStart();
