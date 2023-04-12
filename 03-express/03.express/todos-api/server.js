const todos = require('./dummy-todos');
console.log(todos);

// importing the Express package
// common js syntax
const express = require('express');

// instantiating express app
const app = express();

app.use(express.json());

// req is short for request
// res is short for response
// route handler / middleware
app.get('/api', (req, res) => {
  res.send(
    'Our express api server is now sending this over to the chrome browser!'
  );
});

app.get('/api/todos', (_, res) => {
  res.status(202).json(todos);
});

app.post('/api/todos', (req, res) => {
  console.log(req.body);

  if (!req.body.title || !req.body.isComplete) {
    res.status(400).json({ message: 'Please enter all values.' });
  } else {
    const newTodo = {
      id: todos.length + 1,
      title: req.body.title,
      isComplete: req.body.isComplete,
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
  }
});

app.get('/api/todos/:id', (req, res) => {
  const exists = todos.some((todo) => todo.id === parseInt(req.params.id));

  if (!exists) {
    res.status(400).json({ message: 'Todo not found.' });
  } else {
    const todo = todos.find((todo) => todo.id === parseInt(req.params.id));
    console.log(todo);
    res.status(200).json(todo);
  }
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
