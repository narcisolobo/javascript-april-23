import { model, Schema } from 'mongoose';

const recordSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Please enter album title.'],
    minLength: [3, 'Title must be at least three characters.'],
  },
  artist: {
    type: String,
    required: [true, 'Please enter album artist.'],
    minLength: [3, 'Artist must be at least three characters.'],
  },
  cover: {
    type: String,
    required: [true, 'Please enter album cover image URL.'],
    minLength: [3, 'URL must be at least three characters.'],
  },
  description: {
    type: String,
    required: [true, 'Please enter album description.'],
    minLength: [3, 'Description must be at least three characters.'],
  },
  isOwned: {
    type: Boolean,
    default: false,
  },
  genre1: String,
  genre2: String,
  genre3: String,
});

const Record = model('Record', recordSchema);
export default Record;
