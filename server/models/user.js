import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name : { type : String, required: true },
    email : { type: String, required: true },
    password : { type: String, required: true },
    id : { type: String },
    following: { type: [String], default: [] },
    followers: { type: [String], default: [] },
    savedPost: {type : [String], default: []},
});

var User = mongoose.model("User", userSchema);

export default User;
