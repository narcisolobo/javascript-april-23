import { model, Schema } from 'mongoose';

const dogSchema = Schema(
  {
    dogName: {
      type: String,
      required: [true, 'Please enter name.'],
      minLength: [2, 'Name of doggo must be at least two characters.'],
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
  },
  { timestamps: true }
);

dogSchema.pre('save', function (next) {
  console.log('pre save');
  next();
});

const Dog = model('Dog', dogSchema);
export default Dog;
