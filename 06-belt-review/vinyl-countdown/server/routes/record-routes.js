import express from 'express';
import {
  createRecord,
  getAllRecords,
  getOneRecord,
  updateOneRecord,
  deleteOneRecord,
} from '../controllers/record-controllers.js';

const router = express.Router();

// prettier-ignore
router
  .route('/')
  .get(getAllRecords)
  .post(createRecord);

// prettier-ignore
router
  .route('/:id')
  .get(getOneRecord)
  .put(updateOneRecord)
  .delete(deleteOneRecord);

export default router;
