import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Favorite =
  mongoose.models?.Favorite || mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;
