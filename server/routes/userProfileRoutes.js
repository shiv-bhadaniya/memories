import express from "express";

import { followUser, getUserProfile, savePost } from "../controller/userProfile.js";
import auth from "../middleware/auth.js";

const router = express.Router();


router.get("/:id", getUserProfile);
router.patch("/post/save/:id", auth ,savePost);
router.patch("/follow/:id", auth, followUser);

export default router;