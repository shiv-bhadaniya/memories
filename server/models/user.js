import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = Schema({
    name : { type : String, required: true },
    email : { type: String, required: true },
    password : { type: String, required: true },
    id : { type: String },
    following: { type: [String], default: [] },
    followers: { type: [String], default: [] },
    savedPost: {type : [String], default: []},
});

var UserModel = mongoose.model("user", userSchema);

export default UserModel;
