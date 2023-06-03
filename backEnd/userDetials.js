import mongoose from "mongoose";

const UserDetialsScehma = new mongoose.Schema(
  {
    username: String,
    email: { type: String, unique: true },
    password: String,
  },
  {
    collection: "UserInfo",
  }
);
mongoose.model("UserInfo", UserDetialsScehma);
