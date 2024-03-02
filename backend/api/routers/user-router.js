import express from "express";
import {
  register,
  login
} from "../controllers/user.js";

const router = express.Router();

router.post("/api/v1/register", register);
router.post("/api/v1/login", login);


export default router;
