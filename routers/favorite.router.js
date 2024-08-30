const express = require("express");
const {addFavorite, getAllFavorites, deleteFavorite} = require("../controllers/favorite.controllers");

const router = express.Router();

router.post("/", addFavorite);
router.get("/:userEmail", getAllFavorites);
router.delete("/:id", deleteFavorite);

module.exports = router;
