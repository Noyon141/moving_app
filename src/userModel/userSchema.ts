import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required!"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "password is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    unique: true,
    lowercase: true,
  },
  forgotPasswordToken: {
    type: String,
    default: "",
  },
  forgotPasswordExpiry: {
    type: Date,
  },
});

const User = mongoose.models.users || mongoose.model("User", userSchema);

export default User;
