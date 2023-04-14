import { model, Schema } from 'mongoose';

const dogSchema = Schema(
  {
    dogName: {
      type: String,
      required: [true, 'Please enter name.'],
    },
    dogType: {
      type: String,
      required: [true, 'Please select type.'],
    },
    dogAge: {
      type: Number,
      required: [true, 'Please enter age.'],
      min: [0.5, 'Dog must be at least 1/2 a year old.'],
    },
    dogGender: {
      type: String,
      required: [true, 'Please select gender.'],
    },
    dogIsDerpy: {
      type: Boolean,
      default: true,
    },
    dogDescription: String,
  },
  { timestamps: true }
);

const Dog = model('Dog', dogSchema);
export default Dog;
