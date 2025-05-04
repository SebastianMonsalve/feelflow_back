import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config.js";

export const auth = (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({ message: "No token" });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (error) {
        return res.status(401).json({ message: "Invalid token" });
      }
      req.user = user;
      next();
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
