import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/users.routes.js";
import { FRONTEND_URL_LOCAL, FRONTEND_URL_PRODUCTION } from "./config.js";

const app = express();

app.use(
  cors({
    origin: [FRONTEND_URL_LOCAL, FRONTEND_URL_PRODUCTION],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);

export default app;
