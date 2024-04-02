import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URL!);
mongoose.Promise = global.Promise;

const userSchmea = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: true,
  },
  birthdate: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  gender: {
    type: Boolean,
    required: true,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchmea);

export default User;
