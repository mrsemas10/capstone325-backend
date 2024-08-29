import express from 'express';
import {addFavorite, getAllFavorites, deleteFavorite} from '../controllers/favorite.controllers'

const router = express.Router();

router.post("/", addFavorite);
router.get("/:userEmail", getAllFavorites);
router.delete("/:id", deleteFavorite);

module.exports = router;
