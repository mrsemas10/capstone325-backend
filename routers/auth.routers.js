import express from 'express';
import { createUser, login} from "../controllers/auth.controllers"

const router = express.Router();

router.post("/register", createUser);
router.post("/login", login);

module.exports = router;
