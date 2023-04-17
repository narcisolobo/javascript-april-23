import Record from '../models/record-model.js';

/**
 * This function creates a new record and returns it as a JSON response with a status code of 201, or
 * returns an error with a status code of 400.
 * @param req - req stands for request and it is an object that contains information about the incoming
 * HTTP request such as the request headers, request parameters, request body, etc.
 * @param res - `res` is the response object that is used to send the HTTP response back to the client.
 * It is an instance of the `http.ServerResponse` class in Node.js. The `res` object has methods like
 * `res.status()` and `res.json()` that are used to set the HTTP
 */
async function createRecord(req, res) {
  try {
    const newRecord = await Record.create(req.body);
    res.status(201).json(newRecord);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function getAllRecords(req, res) {
  try {
    const allRecords = await Record.find();
    res.status(200).json(allRecords);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function getOneRecord(req, res) {
  try {
    const { id } = req.params;
    const oneRecord = await Record.findById(id);
    res.status(200).json(oneRecord);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function updateOneRecord(req, res) {
  try {
    const { id } = req.params;
    const updatedRecord = await Record.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updatedRecord);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function deleteOneRecord(req, res) {
  try {
    const { id } = req.params;
    const deletedRecord = await Record.findByIdAndDelete(id);
    res.status(200).json(deletedRecord);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

export {
  createRecord,
  getAllRecords,
  getOneRecord,
  updateOneRecord,
  deleteOneRecord,
};
