import { model, Schema } from 'mongoose';

const todoSchema = Schema(
  {
    task: {
      type: String,
      required: [true, 'Please enter todo.'],
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Todo = model('Todo', todoSchema);
export default Todo;
