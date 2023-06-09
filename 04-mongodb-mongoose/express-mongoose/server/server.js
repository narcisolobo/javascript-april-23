const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const MY_NAME = process.env.MY_NAME;
console.log(MY_NAME);

require('./config/mongoose.config.js');

app.use(express.json());

const AllMyUserRoutes = require('./routes/user.routes');
AllMyUserRoutes(app);

const { PORT } = process.env;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
