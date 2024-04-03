import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URL!);
mongoose.Promise = global.Promise;

const userSchema = new Schema({
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
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: false,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
