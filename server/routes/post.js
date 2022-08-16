import express  from "express";

import { createPost, getAllPosts } from "../controller/post.js";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/create", createPost);

export default router;