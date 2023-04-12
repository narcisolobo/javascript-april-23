const { Band } = require('./models/band-model');
const express = require('express');
const app = express();

app.get('/api/fake-bands', (req, res) => {
  res.status(201).json(new Band());
});

app.listen(8000, () => console.log('Listening on port 8000'));
