import express  from "express";

import { createPost, deletePost, getAllPosts, getOnePostDetails, LikePost, updatePost } from "../controller/post.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/create", auth, createPost);
router.patch("/update/:id", auth, updatePost);
router.patch("/like/:id", auth, LikePost);
router.delete("/delete/:id", auth, deletePost);
router.get("/post/:id", getOnePostDetails);


export default router;