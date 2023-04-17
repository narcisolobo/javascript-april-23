import express from 'express';
import {
  createDog,
  getAllDogs,
  getOneDog,
  updateOneDog,
  deleteOneDog,
} from '../controllers/dog-controllers.js';

const router = express.Router();

// prettier-ignore
router
  .route('/')
  .post(createDog)
  .get(getAllDogs);

// prettier-ignore
router
  .route('/:id')
  .get(getOneDog)
  .put(updateOneDog)
  .delete(deleteOneDog);

export default router;
