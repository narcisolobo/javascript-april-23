import Dog from '../models/dog-model.js';

async function createDog(req, res) {
  try {
    const newDog = await Dog.create(req.body);
    res.status(201).json(newDog);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function getAllDogs(req, res) {
  try {
    const allDogs = await Dog.find();
    res.status(200).json(allDogs);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function getOneDog(req, res) {
  try {
    const { id } = req.params;
    const dog = await Dog.findById(id);
    res.status(200).json(dog);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function updateOneDog(req, res) {
  try {
    const { id } = req.params;
    const updatedDog = await Dog.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updatedDog);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function deleteOneDog(req, res) {
  try {
    const { id } = req.params;
    const deletedDog = await Dog.findByIdAndDelete(id);
    res.status(200).json(deletedDog);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

export { createDog, getAllDogs, getOneDog, updateOneDog, deleteOneDog };
