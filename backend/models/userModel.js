import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    displayName: {
      type: String,
      required: true,
      unique: true,
      minlength: 4,
      maxlength: 64,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 4,
      maxLength: 64,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
