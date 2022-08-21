import express from "express";
import mongoose from "mongoose";

import PostMessage from "../models/post.js";

const router = express.Router();

export const getAllPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find();
        res.status(200).json(postMessage);
    } catch (error) {
        console.log(error);
    }
}


export const createPost = async (req, res) => {

    const newPostData = req.body;
    // console.log("name". req.name);

    const newPostMessage = new PostMessage({
        ...newPostData,
        creator: req.userId,
        createdAt: new Date().toISOString(),
    })

    try {
        newPostMessage.save();
        res.status(201).json(newPostMessage);

    } catch (error) {
        res.status(409).json(error);
    }
}


export const updatePost = async (req, res) => {

    const { id } = req.params;


    const { title , message, creator, selectedFile, tags } = req.body;

    try {
        
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with this id");

        const updatedPost = { creator, title, message, tags, selectedFile, _id: id};

        await PostMessage.findByIdAndUpdate(id, updatedPost, {new: true});

        res.json(updatedPost);

    } catch (error) {
        res.send(error);
    }
}


export const LikePost = async (req, res) => {
    
    const { id } = req.params;

    try {

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with this id");

        var post = await PostMessage.findById(id);
        console.log(post);
        const index = post.likes.findIndex((id) => id === String(req.userId));

        if(index === -1) {
            // when like
            post.likes.push(req.userId);
        } else {
            // when like remove
            post.likes = post.likes.filter((id) => id !== String(req.userId));
        }

        const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {new : true} );
     
        res.json(updatedPost);

    } catch (error) {
        res.send(error)
    }


}

export const deletePost = async (req, res) => {



    const { id } = req.params;

    try {
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with this id");

        await PostMessage.findByIdAndDelete(id);

        res.json({message: "Post delete successfully."});


    } catch (error) {
        res.send(error);
    }
}


export const getOnePostDetails = async(req,res) => {


    const { id } = req.params;

    try {
        const onePostMessage = await PostMessage.findById(id);
        res.status(200).json(onePostMessage);
    } catch (error) {
        res.send(error)
    }
}





export default router;