import { Router } from "express";
import {
  register,
  login,
  logout,
  verifyToken,
} from "../controllers/users.controller.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", verifyToken, logout);
router.get("/verify", verifyToken);

export default router;
