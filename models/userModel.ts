import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true, max: 20 },
  lastName: { type: String, required: true, max: 30 },
  picture: {},
  password: { type: String, required: true, min: 8, max: 12 }, 
  isVerified: { type: Boolean, default: false },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date
});

const User = models.User || model("User", UserSchema);

export default User;
