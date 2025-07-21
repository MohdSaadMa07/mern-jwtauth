// /models/user.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  resetToken: String,
  resetTokenExpires: Date,
});

export default mongoose.model("User", userSchema);
