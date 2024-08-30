const Favorite = require("../models/favorite.model");

const addFavorite = async (req, res) => {
  try {
    const find = await Favorite.findOne({
      location: { $regex: new RegExp(req.body.location, "i") },
      user: { $regex: new RegExp(req.body.user, "i") },
    });
    if (find) {
      return res
        .status(409)
        .json({ message: "Location already exists in favorites" });
    }
    const favorite = await Favorite.create({
      ...req.body,
    });
    res.status(201).json({ favorite, message: "Location added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllFavorites = async (req, res) => {
  const userEmail = req.params.userEmail;
  try {
    const favorites = await Favorite.find({ user: userEmail });
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
};

const deleteFavorite = async (req, res) => {
  const { id, userEmail } = req.params;
  try {
    await Favorite.findOneAndDelete({ _id: id, user: userEmail });
    res.status(200).json({ message: "Location removed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting favorite" });
  }
};
module.exports = {
  addFavorite,
  getAllFavorites,
  deleteFavorite,
};
