import express from "express";
import mongoose from "mongoose";
import PostMessage from "../models/post.js";

import User from "../models/user.js";
const router = express.Router();


export const getUserProfile = async (req, res) => {

    const { id } = req.params;

    try {

        const userProfile = await User.findById(id);

        res.status(200).json(userProfile);

    } catch (error) {
        res.send(error);
    }
}

export const savePost = async (req, res) => {

    const { id } = req.params;
    const userId = req.userId;
    console.log("post id : ", id);
    console.log("user id : ", userId);
    try {

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with this id");

        var userProfile = await User.findById(userId);

        var userSavedPost = userProfile.savedPost;

        const findIndexFun = (element) => element === String(id);

        const indexOfSavedPost = userSavedPost.findIndex(findIndexFun)

        console.log("Index of Saved post : ", indexOfSavedPost);

        if (indexOfSavedPost === -1) {
            // save post
            console.log("Save Post");
            userProfile.savedPost.push(id);
        } else {


            console.log("Remove from save post");

            function removeSave(value) {
                return value !== id
            }

            const filtered = userSavedPost.filter(removeSave)


            // remove from save

            console.log("Remove SAved", filtered);

            userProfile.savedPost = filtered;

        }

        const updatedUserProfile = await User.findByIdAndUpdate(userId, userProfile, { new: true });

        console.log(updatedUserProfile);
        res.json(updatedUserProfile);


    } catch (error) {
        res.send(error)
    }
}


export const followUser = async (req, res) => {
    const { id } = req.params;

    console.log("Req user id : ", id);
    const userId = req.userId;

    try {

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No user with this id");

        const loginUserProfile = await User.findById(userId);

        const loginUserFollowing = loginUserProfile.following;
        console.log("loginUserFollowing : ", loginUserFollowing);
        const findIndexFun = (element) => {
            console.log(`element : ${element}, id : ${id}`);
           return element === String(id)
        };


        var indexOfFollowing = loginUserFollowing.findIndex(findIndexFun);

        console.log("Index of following people : ", indexOfFollowing);

        if(indexOfFollowing === -1) {
            // follow user
            console.log("Follow user");
            loginUserProfile.following.push(id)
        } else {
            //un follow user
            console.log("un follow user");


            function removeFollowing(allFollowers) {
                return allFollowers !== id
            }

            const filtered = loginUserFollowing.filter(removeFollowing)

            loginUserProfile.following = filtered;
        }

        const loginUserUpdatedProfile = await User.findByIdAndUpdate(userId, loginUserProfile, {new : true})

        console.log("loginUserUpdatedProfile : ", loginUserUpdatedProfile);
        res.json(loginUserUpdatedProfile);
        

    } catch (error) {
        res.send(error);
    }

}

export default router;