import express from "express";
import mongoose from "mongoose";

import PostMessageModel from "../models/post.js";

const router = express.Router();

export const getAllPosts = async (req, res) => {
    try {
        const postMessage = await PostMessageModel.find();
        res.status(200).json(postMessage);
    } catch (error) {
        console.log(error);
    }
}


export const createPost = async (req, res) => {

    const newPostData = req.body;
 
    const newPostMessage = new PostMessageModel({
        ...newPostData,
        creator: null,
        createdAt: new Date().toISOString(),
    })

    try {
        newPostMessage.save();
        res.status(201).json(newPostMessage);

    } catch (error) {
        res.status(409).json(error);
    }
}


export default router;