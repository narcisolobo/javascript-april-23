import Todo from '../models/todo-model.js';

async function createTodo(req, res) {
  try {
    const newTodo = await Todo.create(req.body);
    res.status(201).json(newTodo);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function getAllTodos(req, res) {
  try {
    const allTodos = await Todo.find();
    res.status(200).json(allTodos);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function getOneTodo(req, res) {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    res.status(200).json(todo);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function updateOneTodo(req, res) {
  try {
    const { id } = req.params;
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updatedTodo);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function deleteOneTodo(req, res) {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);
    res.status(200).json(deletedTodo);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

export { createTodo, getAllTodos, getOneTodo, updateOneTodo, deleteOneTodo };
