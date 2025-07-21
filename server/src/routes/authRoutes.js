import express from "express";
import { register, login,  } from '../controllers/authController.js' // ✅ Correct relative path with `.js` extension

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
