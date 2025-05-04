import dotenv from "dotenv";

dotenv.config();
export const PORT = process.env.PORT;
export const SECRET_KEY = process.env.SECRET_KEY;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = process.env.DB_NAME;
export const FRONTEND_URL_LOCAL = process.env.FRONTEND_URL_LOCAL;
export const FRONTEND_URL_PRODUCTION = process.env.FRONTEND_URL_PRODUCTION;
