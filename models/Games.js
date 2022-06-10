import mongoose from "mongoose";

const rev = new mongoose.Schema({
  reviews: {
    type: String,
  },
  author: {
    type: String,
  },
});

const gam = new mongoose.Schema({
  title: {
    type: String,
  },
  dis: {
    type: String,
  },
  thum: {
    type: String,
  },
  tags: [String],
  review: [rev],
});

const mySchema = new mongoose.Schema(
  {
    user: {
      type: String,
    },
    games: [gam],
  },
  { timestamps: true }
);

const Games = mongoose.models.Games || mongoose.model("Games", mySchema);

export default Games;
