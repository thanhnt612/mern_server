import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = new Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
      unique: true,
    },
    avatar: String,
    access_token: {
      type: String,
      unique: true,
    },
    refresh_token: {
      type: String,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
export const User = mongoose.model("User", userSchema);