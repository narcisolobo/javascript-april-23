// importing the Express package
// common js syntax
const express = require('express');

// instantiating express app
const app = express();

// req is short for request
// res is short for response
// route handler / middleware
app.get('/api', (req, res) => {
  res.send(
    'Our express api server is now sending this over to the chrome browser!'
  );
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
