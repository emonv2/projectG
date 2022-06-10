import mongoose from "mongoose";

const mySchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

const Users = mongoose.models.Users || mongoose.model("Users", mySchema);

export default Users;
