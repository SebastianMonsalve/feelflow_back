import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config.js";

export const auth = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: "No token" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    req.token = token;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ code: "TOKEN_EXPIRED" });
    }
    return res.status(401).json({ code: "INVALID_TOKEN" });
  }
};
