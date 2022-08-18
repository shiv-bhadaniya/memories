import express  from "express";

import { createPost, getAllPosts } from "../controller/post.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/create", auth, createPost);

export default router;