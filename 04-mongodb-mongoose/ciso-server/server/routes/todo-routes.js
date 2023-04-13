import express from 'express';
import {
  createTodo,
  getAllTodos,
  getOneTodo,
  updateOneTodo,
  deleteOneTodo,
} from '../controllers/todo-controllers.js';

const router = express.Router();

// prettier-ignore
router
  .route('/')
  .post(createTodo)
  .get(getAllTodos);

// prettier-ignore
router
  .route('/:id')
  .get(getOneTodo)
  .put(updateOneTodo)
  .delete(deleteOneTodo);

export default router;
