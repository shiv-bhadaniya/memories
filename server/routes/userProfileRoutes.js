import express from "express";

import { getUserProfile } from "../controller/userProfile.js";

const router = express.Router();


router.get("/:id", getUserProfile);

export default router;