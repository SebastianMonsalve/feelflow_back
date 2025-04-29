import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
} from "../controllers/users.controller.js";
import { auth } from "../middlewares/auth.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", auth, profile);

export default router;
