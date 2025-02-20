import express from "express";
import verifyConversion from "../controllers/verifyController.js";

const router = express.Router();

router.post("/verify", verifyConversion);

export default router;
