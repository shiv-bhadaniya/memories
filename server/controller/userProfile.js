import express from "express";
import mongoose from "mongoose";

import User from "../models/user.js";
const router = express.Router();


export const getUserProfile  = async (req, res) => {

    const { id } = req.params;
 
    try {
        
        const userProfile = await User.findById(id);

        res.status(200).json(userProfile);

    } catch (error) {
        res.send(error);
    }
}

export default router;